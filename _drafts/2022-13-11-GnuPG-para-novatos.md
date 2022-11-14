---
layout: tech
date: 2022-14-11 15:18:00
tags: tech
title: GnuPG para novatos
---

Saludos, esto no pretende ser la guia definitiva para usuarios novatos en tanto al uso de GPG, pero te encaminara y te dejara con las suficientes dudas como para ir a buscar mas informacion sobre el tema.

## GnuPG ¿que es?

Bajo mis propias palabras y sin ser muy tecnico te puedo decir que es una herramienta para cifrar y firmar cualquier tipo de mensajes y archivos.

## ¿Como cuando y donde usarla?

Bueno de manera personal te puedo decir que deberias comenzar a usarla en todos los lugares posibles para que aumentes la privacidad con la que compartes voluntaria o involuntariamente tu informacion.

- Para cifrar y firmar correos electronicos
- Para cifrar las fotos de tu telefono que van a la nube
- Para cifrar documentos laborales que solo debe leer el destinatario
- Para enviar mensajes cirfados por mensajeria instantanea (Trabajo extra pero puede dejarte tranquilo)

## Howto

Principalmente debes saber que soy usuario de la distribucion ArchLinux los comandos que yo utilizare solo funcionaran en las distribuciones basadas en Arch, si por consiguiente usas una basada y/o derivada de Debian debes sustituir 'sudo pacman -S' por 'sudo apt-get install' si usas Fedora o alguna basada den RedHat o CentOS debes usar yum y asi sucesivamente, asi que no es necesario que seas un experto en tu distribucion linux pero si que sepas instalar paquetes por lo menos, cada distribucion tiene su administrador de paquetes y eso ya te corresponde averiguarlo.

~~~
sudo pacman -S gpg
~~~

Despues de esto lo primordial sera configurar nuestras claves, al generarlas se crean un par, una es publica y una privada.

La privada es para nuestro uso, exclusivamente para firmar y cifrar todo aquello que queremos ocultar de ojos curiosos y la publica, que es la que compartiremos con aquellos que hagan lo mismo que nosotros.

Usaremos una terminal para generar nuestro par de claves.

## Generar par de claves GPG

~~~
gpg --full-generate-key
~~~

En el menu elegimos la opcion 1.  
Escribe 4096 para generar claves mas robustas.  
Puedes elegir el tiempo de caducidad para tus claves "2y" por ejemplo para dos años.  
Puedes darle algun comentario o algo para distinguir tu cuenta.  
Te va a preguntar una contraseña, te recomiendo usar un generador de contraseñas para este paso.  
Ahora hay dos maneras de compartir tu clave publica, la puedes enviar a un servidor publico donde todos mandan sus claves y ahi te buscan para despues escribirte mensajes cifrados o puedes exportar tu clave y compartirla de manera personal con tus amigos o compañeros de trabajo.

## Esportar clave GPG

Para esportar tu clave privada (no la compartas con nadie)

~~~
gpg --export-secret-keys -a [KeyID] > mi_clave_privada.asc
~~~

Para exportar tu clave publica (esa si se comparte)

~~~
gpg --export -a [KeyID] > mi_clave_publica.asc
~~~

## Certificado de revocación

Si algun dia cometes la grandiosa equivocacion de comprometer accidentalmente tu clave privada lo mejor es tener una manera de quitar los permisos para cifrar y firmar de esa clave, la unica opcion efectiva es un certificado de revocacion.

Debes copiar tu KeyID

~~~
gpg --list-key asuiva@tucorreo.com
~~~

Pon atencion donde dice PUB ahi esta tu KeyID

~~~
gpg --gen-revoke --output revoke.asc [KeyID]
~~~

Seguramente te preguntara porque quieres generar una revocacion, pon la opcion que dice "Key has been compromised"

No es obligatorio poner eso pero es lo mas recomendable.

De momento hasta aqui nos quedamos, en otra entrada te enseñare a configurar tu cliente de correo para enviar y recibir correos cifrados, ahora vamos a ver porque surgio esta entrada.

## Uso local de gpg para cifrar archivos.