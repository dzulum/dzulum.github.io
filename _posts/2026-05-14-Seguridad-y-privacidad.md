---
layout: post
tags: Seguridad
date: 2026-05-14 21:29:15
title: Guía de seguridad y privacidad en el trabajo.
---
# Guía de seguridad y privacidad en el trabajo.

Esta guía inicialmente ha sido escrita para mis clientes corporativos, aquellos a quienes debo resguardar de todo mal proveniente de internet, pero la comparto con todo el mundo, pues es una guía inicial para todos los usuarios que deseen tener mas seguridad a la hora de navegar por la internet y para aquellos que se preocupan de la privacidad de sus datos.

## 1. Seguridad en el Sistema Operativo (Windows)

Windows es el sistema más atacado debido a su alta cuota de mercado. Para protegerlo, no basta con un antivirus; se requiere una configuración de "capas de defensa".

* **Gestión de Cuentas (Principio de Menor Privilegio):** Nunca trabajes en el día a día con una cuenta de administrador. Crea una cuenta de **"Usuario estándar"** para tus tareas diarias. Si un malware intenta ejecutarse, no tendrá permisos para realizar cambios en el sistema.
* **Windows Hello y Bloqueo Automático:** Configura el bloqueo de pantalla presionando `Win + L`. En `Configuración > Cuentas > Opciones de inicio de sesión`, activa el **Bloqueo dinámico** para que el PC se bloquee automáticamente cuando te alejes con tu teléfono.
* **Cifrado de Disco (BitLocker):** Si tu laptop se pierde, el cifrado impide que alguien extraiga el disco duro y lea tus archivos.
* *Cómo activarlo:* Busca "Administrar BitLocker" en el menú de inicio.


* **Actualizaciones (Windows Update):** Las actualizaciones no son solo estéticas; parchean vulnerabilidades que los hackers explotan activamente. Nunca las pospongas más de 24 horas.

---

## 2. Navegación Segura por Navegador

El navegador es tu ventana al mundo, pero también la puerta de entrada de ataques de *phishing* y *drive-by downloads*.

### **Google Chrome**

* **Protección Mejorada:** Ve a `Configuración > Privacidad y seguridad > Seguridad` y selecciona **Protección mejorada**. Ofrece una defensa proactiva contra sitios web peligrosos.
* **Aislamiento de sitios:** Chrome ejecuta cada sitio en un proceso independiente, evitando que una pestaña maliciosa robe datos de otra (como tu banca en línea).

### **Microsoft Edge**

* **Prevención de Seguimiento:** Configúralo en modo **"Equilibrado"** o **"Estricto"** en `Configuración > Privacidad, búsqueda y servicios`.
* **Microsoft Defender SmartScreen:** Asegúrate de que esté activo; analiza las descargas y sitios en tiempo real comparándolos con una lista negra de Microsoft.

### **Mozilla Firefox**

* **Protección Antirrastreo Mejorada:** Cámbialo a modo **"Estricto"** en `Ajustes > Privacidad & Seguridad`. Esto bloquea rastreadores de redes sociales y scripts de minería de criptomonedas.
* **DNS sobre HTTPS:** Activa la opción de "Protección máxima" en la sección de Red para que tus consultas de navegación viajen cifradas y no puedan ser interceptadas por terceros en la red local.

---

## 3. Extensiones Recomendadas (Indispensables)

Las extensiones pueden mejorar la seguridad, pero instalar demasiadas es riesgoso. Solo utiliza estas tres que son estándar de la industria:

* **uBlock Origin:** El mejor bloqueador de anuncios y scripts maliciosos. Es ligero y de código abierto.
* [Descargar uBlock Origin](https://ublockorigin.com/)


* **Bitwarden:** Un gestor de contraseñas es obligatorio. No reutilices contraseñas entre servicios. Bitwarden es seguro, gratuito y multiplataforma.
* [Descargar Bitwarden](https://bitwarden.com/)


* **Privacy Badger:** Aprende automáticamente a bloquear rastreadores invisibles que te siguen por la red.
* [Descargar Privacy Badger](https://privacybadger.org/)



---

## 4. Seguridad en Dispositivos Móviles

Tu smartphone suele contener más información sensible que tu propia computadora.

### **Tips para Android**

* **Google Play Protect:** Asegúrate de que esté activo en la Play Store. Analiza las apps en busca de comportamiento malicioso.
* **Permisos de Aplicaciones:** Revisa en `Ajustes > Privacidad > Gestor de permisos`. Deniega el acceso a la ubicación, cámara o contactos a apps que no lo necesiten para funcionar.
* **Fuentes Desconocidas:** Nunca actives la instalación de APKs desde fuera de la tienda oficial a menos que seas un usuario avanzado.

### **Tips para iOS (iPhone)**

* **App Tracking Transparency:** Cuando una app te pregunte, selecciona **"Pedir a la app que no rastree"**.
* **Relevo Privado (iCloud+):** Si tienes una suscripción de iCloud, actívalo para ocultar tu dirección IP y tu actividad de navegación en Safari.
* **Actualizaciones de Respuesta Rápida:** iOS ahora permite instalar parches de seguridad críticos sin actualizar todo el sistema operativo. Mantén esto activo en `Ajustes > General > Actualización de software`.

---

## 5. Reglas de Oro de Seguridad Corporativa

1. **Cuidado con el USB:** Nunca conectes una memoria USB encontrada en la calle o que no sea de absoluta confianza. Es el método clásico para introducir *keyloggers*.
2. **Doble Factor de Autenticación (2FA):** Actívalo en **todas** tus cuentas (Correo, Slack, VPN). Usa aplicaciones como **Google Authenticator** o **Microsoft Authenticator** en lugar de SMS.
3. **Redes Wi-Fi:** Evita las redes públicas de cafeterías o aeropuertos para temas de trabajo. Si es necesario, usa siempre una VPN corporativa.

### Herramientas útiles:

* **VirusTotal:** Para analizar archivos sospechosos antes de abrirlos: [virustotal.com](https://www.virustotal.com/)
* **Have I Been Pwned:** Para revisar si tu correo corporativo ha sido filtrado en una base de datos: [haveibeenpwned.com](https://haveibeenpwned.com/)