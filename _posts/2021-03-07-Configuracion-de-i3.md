---
layout: tech
tags: tech
date: 2021-03-07 22:30:00 -0600
title: "Configuración de i3"
---
Bueno aquí inicia lo sabroso, iniciamos las configuraciones.

# Instalación, configuración y primeros pasos.

Si bien este blog pretende ayudar a los novatos voy a partir con la omisión de la instalación del sistema base, debido a que no pretendo ser un gurú, pero si en verdad desean que les muestre una instalación base pueden pedir la guía y con gusto publicaré la guía para ustedes.

Bueno, a lo que vinimos, primero que nada para instalar i3wm en nuestro sistema debemos tener (de preferencia) todo actualizado, así que ejecutamos el poderoso.

`sudo pacman -Syyu`

Despues vamos a instalar i3 y algunas dependencias.

![Instalar I3]({{ site.baseurl }}/images/instalari3.png)

En la imagen podemos ver que hay un rango de cinco opciones i3-wm tiene conflictos con el paquete i3-gaps, ya que es el mismo paquete con algunas modificaciones, vamos es el mismo programa con diferente configuracion por asi decirlo, en este caso usaré i3-gaps, no te espantes, el sistema lo sigue reconociendo como i3, tambien vamos a necesitar un "Login Screen" que es donde colocas tu nombre de usuario y contraseña para accesar a tu sistema.

![Slim Login]({{ site.baseurl }}/images/slim.png)

[Slim](https://wiki.archlinux.org/index.php/SLiM) es este programa que sera el que nos de la bienvenida cuando iniciemos el sistema para iniciar sesion.

`sudo pacman -S slim`

Ahora, si recien vas instalando el sistema base y despues del mismo vas a instalar tu entorno grafico debes instalar otros paquetes, controlador de video, servidor xorg, una terminal (que sera tu mejor amiga en este viaje), un navegador (personalmente amo chromium o chrome, pero la banda linuxera siempre presume Firefox como veloz y no se que mas), entre otras herramientas mas la mayoria se encuentran ya instaladas en el sistema base la que si sera muy importante sera xinit, que se encarga de levantar el sistema grafico por medio del servidor xorg.

Sin mucha vuelta una vez instalados los paquetes nos damos a la tarea de habilitar el servicio de slim.

`sudo systemctl enable slim.service`  
`sudo systemctl start slim.service`

Con esto nos aseguramos de que el sistema grafico arranque una vez que inicia el sistema, systemctl se encarga de manejar los servicio del arranque, (como el `mscservices` pero no damos soporte gratuito a M$ asi que prosigo) para que el sistema grafico arranque correctamente vamos a utlizar un archivo de configuracion llamado `.xinitrc`.

`touch ~/.xinitrc #Creamos el archivo`  
`nano ~/.xinitrc #Lo abrimos para editarlo`

Escribimos la linea  
`exec i3`

Si usaste nano para la edicion presiona CTRL+O para guardar y CTRL+X para guardar.

Si por algun motivo quieres ver como se ve tu sistema en este momento, no estas ejecutando ningun entorno grafico y solo usas la terminal puedes usar el comando `startx` para por fin ver un espacio de trabajo.

Al iniciar i3 te va a solicitar que hagas una configuracion basica donde el mismo i3 tiene una herramienta que guardara esta confguracion basica en tu directorio $HOME y aqui es donde comienza la magia.