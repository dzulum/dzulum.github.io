---
layout: post
tags: Seguridad
date: 2026-05-19 20:05:15
title: VPN con WireGuard.
---
# WireGuard
Saludos a todos. Bienvenidos a esta charla sobre **WireGuard**. Como profesionales y entusiastas de la privacidad, sabemos que asegurar nuestro tráfico de red ya no es un lujo, sino una necesidad básica. Hoy vamos a desglosar qué es WireGuard, por qué ha dejado obsoletas a tecnologías como OpenVPN o IPsec, cómo impacta positivamente en su infraestructura diaria, el hardware ideal para exprimirlo y cómo desplegarlo desde cero sin complicaciones.

---

## 1. El Impacto de WireGuard en tu Día a Día

En el ámbito de la privacidad y la administración de sistemas, el acceso remoto seguro suele ser un dolor de cabeza. Tradicionalmente, tecnologías como OpenVPN dominaban el mercado, pero su base de código masiva (más de 100,000 líneas) las hace lentas y difíciles de auditar.

WireGuard cambia las reglas del juego drásticamente:

* **Auditable y Seguro:** Cuenta con menos de **4,000 líneas de código**. Esto significa que un solo desarrollador experto puede auditar el código completo en una tarde, reduciendo drásticamente la superficie de ataque y la existencia de vulnerabilidades ocultas.
* **Criptografía Moderna:** En lugar de soportar cientos de combinaciones criptográficas antiguas y vulnerables (como hace OpenVPN), WireGuard utiliza exclusivamente primitivas criptográficas modernas y ultraseguras: **ChaCha20** para cifrado simétrico, **Poly1305** para autenticación, **Curve25519** para intercambio de claves y **BLAKE2s** para hashing.
* **Rendimiento y Batería:** Corre directamente en el espacio del núcleo (*kernel space*) de Linux. Esto elimina las costosas operaciones de cambio de contexto entre el espacio de usuario y el núcleo, lo que se traduce en velocidades de transferencia que saturan el enlace y un consumo de batería casi imperceptible en dispositivos móviles.
* **Roaming Invisible (Conexión Persistente):** WireGuard no mantiene una conexión TCP constante; funciona bajo un modelo de "intercambio de claves silencioso" sobre UDP. Si estás en la calle usando datos móviles y entras a tu casa conectándote al Wi-Fi, tu IP cambia, pero la VPN **nunca se corta**. El túnel sigue enviando paquetes de forma transparente sin necesidad de renegociar la conexión durante 30 segundos.

---

## 2. Hardware Recomendado

Al operar en el espacio del núcleo y utilizar ChaCha20 (un cifrado extremadamente eficiente en software que no requiere aceleración por hardware dedicada como AES-NI), WireGuard vuela en prácticamente cualquier dispositivo. Sin embargo, dependiendo del entorno, estas son las mejores opciones:

### Entornos Domésticos y Laboratorios (Homelabs)

* **Raspberry Pi 4 / 5 o Mini PCs (Intel N100):** Son los reyes indiscutibles para un servidor WireGuard doméstico. Una Raspberry Pi 4 puede manejar fácilmente un túnel de hasta 600-800 Mbps de rendimiento real sin despeinarse. Una Mini PC con procesador Intel N100 puede saturar enlaces simétricos de 1 Gbps gestionando múltiples clientes simultáneos.

### Enrutadores Dedicados

* **Dispositivos con soporte OpenWrt:** Enrutadores comerciales compatibles con OpenWrt (como las marcas GL.iNet, que ya los traen de fábrica con WireGuard integrado) son ideales para proteger toda la red local desde la puerta de enlace.

---

## 3. Guía Rápida de Instalación y Configuración Básica

Para entender cómo funciona, vamos a realizar una instalación limpia utilizando como referencia la documentación oficial de sistemas basados en Linux.

### Paso 1: Instalación de Paquetes

En distribuciones modernas, el módulo ya está integrado en el kernel (desde Linux 5.6). Solo necesitamos instalar las herramientas de gestión del espacio de usuario (`wireguard-tools`).

```bash
# En sistemas basados en Arch Linux
sudo pacman -S wireguard-tools

# En sistemas basados en Debian/Ubuntu
sudo apt update && sudo apt install wireguard

```

### Paso 2: Generación de Claves (Criptografía de Llave Pública)

WireGuard funciona de manera similar a SSH: cada nodo tiene una clave privada y una clave pública. El servidor debe conocer la clave pública del cliente, y el cliente la del servidor.

Generamos las llaves para el servidor y el cliente asegurando los permisos correctos:

```bash
# Cambiamos la máscara para que solo nuestro usuario pueda leer los archivos
umask 077

# Generar llaves del Servidor
wg genkey | tee server_private.key | wg pubkey > server_public.key

# Generar llaves del Cliente
wg genkey | tee client_private.key | wg pubkey > client_public.key

```

### Paso 3: Configuración Inicial del Servidor

Creamos el archivo de configuración principal en `/etc/wireguard/wg0.conf`. Este archivo define la interfaz de red virtual (`wg0`) y los clientes autorizados (*Peers*).

```ini
# /etc/wireguard/wg0.conf

[Interface]
# Dirección IP privada que tendrá el servidor dentro del túnel
Address = 10.0.0.1/24
# Puerto UDP en el que escuchará el servidor (debe abrirse en el firewall/router)
ListenPort = 51820
# Contenido de tu archivo server_private.key
PrivateKey = <CONTENIDO_DE_SERVER_PRIVATE_KEY>

[Peer]
# Clave pública del cliente (contenido de client_public.key)
PublicKey = <CONTENIDO_DE_CLIENT_PUBLIC_KEY>
# IPs que este cliente específico tiene permitido usar dentro del túnel
AllowedIPs = 10.0.0.2/32

```

### Paso 4: Configuración Inicial del Cliente

En el dispositivo cliente (por ejemplo, tu laptop o teléfono), creamos su respectivo archivo de configuración (ej. `wg0-client.conf`):

```ini
[Interface]
# Dirección IP del cliente dentro de la red de la VPN
Address = 10.0.0.2/24
# Contenido de tu archivo client_private.key
PrivateKey = <CONTENIDO_DE_CLIENT_PRIVATE_KEY>
# Servidor DNS seguro a utilizar cuando la VPN esté activa
DNS = 1.1.1.1

[Peer]
# Clave pública del servidor (contenido de server_public.key)
PublicKey = <CONTENIDO_DE_SERVER_PUBLIC_KEY>
# IP pública del servidor y el puerto mapeado
Endpoint = tu.ip.publica.o.dominio:51820
# Qué tráfico debe pasar por la VPN. 0.0.0.0/0 significa TODO el tráfico de internet
AllowedIPs = 0.0.0.0/0
# Enviar un paquete de control cada 25 segundos para mantener NAT activo
PersistentKeepalive = 25

```

### Paso 5: Levantamiento del Túnel

Para activar la interfaz de WireGuard en el servidor y configurarla para que inicie automáticamente con el sistema, utilizamos `systemd`:

```bash
# Iniciar la interfaz wg0 inmediatamente
sudo systemctl start wg-quick@wg0

# Habilitar para que inicie en cada arranque del sistema
sudo systemctl enable wg-quick@wg0

```

Para verificar que todo esté operando correctamente, el comando nativo de WireGuard nos da un reporte preciso del estado del túnel, la transferencia de datos y el último intercambio de claves exitoso:

```bash
sudo wg show

```

---

Con esto concluimos la sesión de hoy. Tienen un túnel criptográfico robusto, minimalista, auditable y sumamente veloz operando en su propio hardware. Muchas gracias por su tiempo, mantengan sus redes seguras y sus datos privados. ¡Charla terminada!