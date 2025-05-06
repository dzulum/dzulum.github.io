---
layout: tech
tags: tech
date:2022-11-18 23:22:00
title: Redimensionar particiones sin morir en el intento
---

Hace poco me encontre por ahí una laptop abandonada y sin dueño, decidí adoptarla, pero venia instalado por defecto Windows, no es que no me guste ese sistema, al contrario, lo amo, es el que me dio de comer por años y aun ahora a veces me da para algun café o algún antojo de la tienda de la esquina, asó que como buen linuxero que soy lo primero que hice fue instalarle ArchLinux, hasta ahi todo bien, regularmente no uso gran cantidad de herramientas y mucho menos aquellas que son pesadas.

Para mi un entorno de trabajo regular es, i3wm, pcmanfm, mocp, mpv, sublime, chromium y herramientas de compresión, alguna que otra cosilla como unrar o networkmanager y en esta blueman, porque trae bluetooth, hasta acá todo bien.

La situacion real de todo este asunto comenzo cuando me dispuse a seguir con las publicaciones sobre tecnologia y sobre todo en linux, en algun momento fui aun mas novato de lo que soy ahora, en ese entoncer me habia gustado tener un manual bien explicado (Antipendejos) para poder aventurarme mas rapido en el mundo de la terminal y el pingüino, asi que me instale algunas cosas para grabar la pantalla y editar video (Pronto abro YT) con la finalidad de hacer mini tutos, todo bien hasta que habia que actualizar.

No hay mucho que decir, la verdad me evite bastante con el hecho de tener una iso de archbang a la mano, aunque esto lo pude haber solucionado con un sistema live cualquiera, ahora te explico lo que hice.

Mi sistema esta configurado con las siguientes particiones, toma nota de las tuyas.

/dev/sda (Todo mi HDD)  
/dev/sda3 / (Root del sistema)  
/dev/sda1 /boot (Particion de arranque)  
/dev/sda2 /swap (Memoria de intercambio)  
/dev/sda4 /home (Todo el espacio restante para mis archivos)

De entrada debes saber que uso archlinux, asi que esto funciona con cualquier distribucion con la diferencia de entrar al chroot.

Asi que preparate para echarle polvos magicos y rezar mucho a san google, de entrada puedes usar cualquier live que tengas a mano con la condicion de que tenga preinstalado gparted, si no tienes un ISO te recomiendo ir directamente a la descarga de <a href="https://gparted.org/livecd.php" target="_blank">GParted Live</a> y rifarte como los grandes.

Si eres de los mios.

~~~bash
# Regularmente /dev/sdb es una memoria extraible si no tienes mas unidades internas en tu PC/Laptop
sudo dd if=~/path/del/archivo.iso of=/dev/sdb
~~~

Esperas a que termine de escribir y reinicias, yo lo hice al vuelo, pero es recomendable tener un respaldo de tus archivos por lo menos, ya que en mi caso lo que hice fue redimensionar y mover el inicio de la particion /home y por otro lado agrande la particion / del root del sistema, en mi caso aunque tenia cosas relativamente importantes me encomende a San Tux niño de Torlvards y le di asi sin miramientos.

Primero que nada, cuando arranque el sistema (Gparted Live) habra un icono con el nombre gparted, te va a desplegar tus dispositivos generalmente vas a modificar /dev/sda que es donde esta tu sistema instalado.

Debes asegurarte de que no hay ninguna particion montada mas que nada porque si influyes en esa particion no podras modificarla si esta montada, en mi caso fui poninedo en cola las tareas.

Primero redimencionar la particion que donara el espacio, mover los archivos hasta el nuevo inicio de la particion, esto dependera mucho del espacio utilizado y puede durar alrededor de media hora o quiza mas asi que o pones a calentar cafe o a enfriar cervezas.

Despues viene hacer crecer la particion root y hacer que tome el espacio donado de la particion anterior, una vez que tienes esto definido es hora de guardar los cambios y ejecutar, la gran ventaja de GParted es que lo hara todo, ordenara bloques y limpiara todo lo necesario para que tu informacion no sufra daños, aun asi recalco *lo mejor es tener respaldo*.

Una vez que termina todo el proceso es hora de entrar a tu sistema por medio de chroot en mi caso como tengo arch y tenia un ISO en mi multiboot pues reinicie y ahora arranque desde arch.

~~~bash
# Primero creamos puntos de montaje y montamos
mkdir /mnt/{boot, home}
mount /dev/sda3 /mnt # enter
mount /dev/sda1 /mnt/boot # enter
mount /dev/sda4 /mnt/home # enter
swapon /dev/sda2 #enter
arch-chroot /mnt # enter
~~~

La explicacion para lo que acabas de escribir es que `mkdir` crea los directorios (carpetas)