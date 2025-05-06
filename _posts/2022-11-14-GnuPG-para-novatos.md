---
layout: tech
date: 2022-11-13 15:18:00
tags: tech
title: GnuPG para novatos
---

Saludos desde el más allá, esto no pretende ser la guía definitiva para usuarios novatos en tanto al uso de GPG, pero te encaminara y te dejara con las suficientes dudas como para ir a buscar mas informacion sobre el tema.

## GnuPG ¿que es?

Bajo mis propias palabras y sin ser muy tecnico te puedo decir que es una herramienta para cifrar y firmar cualquier tipo de mensajes y archivos.

## ¿Como cuando y donde usarla?

Bueno de manera personal te puedo decir que deberías comenzar a usarla en todos los lugares posibles para que aumentes la privacidad con la que compartes voluntaria o involuntariamente tu informacion.

- Para cifrar y firmar correos electrónicos
- Para cifrar las fotos de tu teléfono que van a la nube
- Para cifrar documentos laborales que solo debe leer el destinatario
- Para enviar mensajes cifrados por mensajería instantánea (Trabajo extra pero puede dejarte tranquilo)

## Howto

Principalmente debes saber que soy usuario de la distribución ArchLinux los comandos que yo utilizare solo funcionaran en las distribuciones basadas en Arch, si por consiguiente usas una basada y/o derivada de Debian debes sustituir `sudo pacman -S` por `sudo apt-get install` si usas Fedora o alguna basada den RedHat o CentOS debes usar yum y así sucesivamente, así que no es necesario que seas un experto en tu distribución linux pero si que sepas instalar paquetes por lo menos, cada distribución tiene su administrador de paquetes y eso ya te corresponde averiguarlo.

~~~bash
sudo pacman -S gnupg
~~~

![Instalar GnuPG]({{ site.baseurl }}/images/post/01-gnupg-instalar.png)

Después de esto lo primordial sera configurar nuestras claves, al generarlas se crean un par, una es publica y una privada.

La privada es para nuestro uso, exclusivamente para firmar y cifrar todo aquello que queremos ocultar de ojos curiosos y la publica, que es la que compartiremos con aquellos que hagan lo mismo que nosotros.

Usaremos una terminal para generar nuestro par de claves.

## Generar par de claves GPG

~~~bash
gpg --full-generate-key
~~~

![Generar Claves]({{ site.baseurl }}/images/post/02-gnupg-generate-keys.png)

En el menú elegimos la opción 1.  
Escribe 4096 para generar claves mas robustas.  
Puedes elegir el tiempo de caducidad para tus claves "2y" por ejemplo para dos años.  
Puedes darle algún comentario o algo para distinguir tu cuenta.  
Te va a preguntar una contraseña, te recomiendo usar un generador de contraseñas para este paso.  
Ahora hay dos maneras de compartir tu clave publica, la puedes enviar a un servidor publico donde todos mandan sus claves y ahí te buscan para después escribirte mensajes cifrados o puedes exportar tu clave y compartirla de manera personal con tus amigos o compañeros de trabajo.

## Exportar clave GPG

Para exportar tu clave privada (no la compartas con nadie)

Primero que nada debes listar tus claves para saber tu ID `gpg --list-key tucorreo@dominio.com`

~~~bash
gpg --export-secret-keys -a [KeyID] > mi_clave_privada.asc
~~~

Te pedirá tu contraseña, la misma que usaste para crear tu par de claves.

Para exportar tu clave publica (esa si se comparte)

~~~bash
gpg --export -a [KeyID] > mi_clave_publica.asc
~~~

En este caso no pide contraseña, si abres el archivo de tu clave publica lucirá así, puedes compartirla como texto plano o enviar el archivo .asc que generaste.
~~~bash
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
8s236//HUZgYJRzPe/bN
=Z+hA
-----END PGP PUBLIC KEY BLOCK-----
~~~

## Certificado de revocación

Si algún día cometes la grandiosa equivocación de comprometer accidentalmente tu clave privada lo mejor es tener una manera de quitar los permisos para cifrar y firmar de esa clave, la única opción efectiva es un certificado de revocación.

Debes copiar tu KeyID

~~~bash
gpg --list-key aquíva@tucorreo.com
~~~

Pon atención donde dice PUB ahí esta tu KeyID

~~~bash
gpg --gen-revoke --output revoke.asc [KeyID]
~~~

Seguramente te preguntara porque quieres generar una revocación, pon la opción que dice "Key has been compromised"

No es obligatorio poner eso pero es lo mas recomendable.

De momento hasta aquí nos quedamos, en otra entrada te enseñare a configurar tu cliente de correo para enviar y recibir correos cifrados, ahora vamos a ver porque surgió esta entrada.

## Uso local de gpg para cifrar archivos.

Bien aquí va la situación para la que yo lo usare, regularmente viajo por motivos laborales, mi trabajo es de riesgo y la información que manejamos es algo delicada pues cuenta con datos personales, ubicaciones y datos de automotores, en mi laptop por comodidad no uso contraseña (para empezar ningún imbécil que necesita robar para drogarse o para revender sabrá usar i3wm) ademas no hay nada que esconder en datos de navegación y menos en contraseñas, de esas se encarga el keepass, así que lo que si me interesa lo cifro para uso personal.

## Cifrar archivos locales

~~~bash
gpg --encrypt --recipient <corro@destinatario.com> archivo-a-cifrar.txt
~~~

Acá no importa la extension del archivo, bien puede ser jpg para fotos, docx, pdf, para documentos incluso un zip y hasta un iso, el correo para el que va firmado seria el tuyo, pues para uso personal.

Lo que sucedera es que va a crear un archivo llamado `archivo-a-cifrar.txt.gpg` eso lo podemos cambiar pasando la opción -o a la linea de comandos, nota que tambien puedes usar la manera abreviada de las opciónes.

~~~bash
gpg -e -r <sorreo@destinatario.com> archivo-a-cifrar.txt -o archivo-cifrado.txt
~~~

## Descrifrar archivos GPG

después de eso puedes borrar el archivo original, ahora para descifrar archivos usaremos la siguiente linea.

~~~bash
gpg -o nuevoarchivo.txt --decrypt archivo-cifrado.gpg
~~~

Recuerda bien que tipo de archivo es, o te va a tocar jugar con extensiones hasta encontrar la que corresponde al archivo, tambien puedes usar la opción --output en dez de -o.

## Cifrar archivos para envio

Primero que nada quien vaya a recibir archivos cifrados de tu parte ya deberia haber generado y exportado su par de claves, a nosotros nos interesa la clave publica, asi que vamos a poner en ejemplo que nos envio su clave publica en un archivo de texto plano, el archivo en ejemplo se llamara contabilidad.txt, nuestro contacto es el encargado de contabilidad de la empresa y su correo es contabilidad@empresaexplotadora.com

Vamos a importar la clave, después a cifrar algún archivo y a mandarle un correo electronico.

### Agregar Clave GPG

~~~bash
gpg --import contabilidad.txt
~~~

Debemos verificar que tenemos agregada la clave `gpg --list-keys`

### Cifrar archivo

~~~bash
gpg --encrypt --recipient <contabilidad@empresaexplotadora.com> archivo-a-crifrar.pdf
~~~

Por ultimo enviar el archivo por correo, puedes usar un webmail o un cliente de escritorio como Thunderbird, de aquí en adelante las opciones se abren en un abanico enorme.

Se que esto no es la guía definitiva pero es un buen comienzo.

Como un extra puedes verificar la suma de tu archivo con `sha256sum archivo.txt`

Hasta pronto, nos vemos en el infierno...

<a href="https://gnupg.org/" target="_blank">https://gnupg.org/</a>  
<a href="https://keepass.info/" target="_blank">https://keepass.info/</a>  
<a href="https://gnupg.org/download/" target="_blank">https://gnupg.org/download/</a> La descarga esta disponible para sistemas Windows, MacOS y Linux por si gustas usar la versión con interfaz gráfica.