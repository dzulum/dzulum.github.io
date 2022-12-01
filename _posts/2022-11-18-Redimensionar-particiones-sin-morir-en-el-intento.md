---
layout: tech
tags: tech
date: 2022-11-18 23:22:00
title: Redimensionar particiones sin morir en el intento
---

Hace poco me encontre por ahí una laptop abandonada y sin dueño, decidí adoptarla, pero venia instalado por defecto Windows, no es que no me guste ese sistema, al contrario, lo amo, es el que me dio de comer por años y aun ahora a veces me da para algun café o algún antojo de la tienda de la esquina, asó que como buen linuxero que soy lo primero que hice fue instalarle ArchLinux, hasta ahi todo bien, regularmente no uso gran cantidad de herramientas y mucho menos aquellas que son pesadas.

Para mi un entorno de trabajo regular es, i3wm, pcmanfm, mocp, mpv, sublime, chromium y herramientas de compresión, alguna que otra cosilla como unrar o networkmanager y en esta blueman, porque trae bluetooth, hasta acá todo bien.

La situacion real de todo este asunto comenzo cuando me dispuse a seguir con las publicaciones sobre tecnologia y sobre todo en linux, en algun momento fui aun mas novato de lo que soy ahora, en ese entoncer me habia gustado tener un manual bien explicado (Antipendejos) para poder aventurarme mas rapido en el mundo de la terminal y el pingüino, asi que me instale algunas cosas para grabar la pantalla y editar video (Pronto abro YT) con la finalidad de hacer mini tutos, todo bien hasta que habia que actualizar.

No hay mucho que decir, la verdad me evite bastante con el hecho de tener una iso de archbang a la mano, aunque esto lo pude haber solucionado con un sistema live cualquiera, ahora te explico lo que hice.

Mi sistema esta configurado con las siguientes particiones, toma nota de las tuyas.

![Redimensionar Particiones]({{ site.baseurl }}/images/post/redimensionar1.png)

/dev/sda (Todo mi HDD)  
/dev/sda3 / (Root del sistema)  
/dev/sda1 /boot (Particion de arranque)  
/dev/sda2 /swap (Memoria de intercambio)  
/dev/sda4 /home (Todo el espacio restante para mis archivos)

De entrada debes saber que uso archlinux, asi que esto funciona con cualquier distribucion con la diferencia de entrar al chroot.

Asi que preparate para echarle polvos magicos y rezar mucho a san google, de entrada puedes usar cualquier live que tengas a mano con la condicion de que tenga preinstalado gparted, si no tienes un ISO te recomiendo ir directamente a la descarga de <a href="https://gparted.org/livecd.php" target="_blank">GParted Live</a> y rifarte como los grandes.

![Redimensionar Particiones]({{ site.baseurl }}/images/post/redimensionar2.png)

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
~~~

La explicacion para lo que acabas de escribir es que `mkdir` crea los directorios (carpetas) para montar en ellos las particiones, en la parte de arriba explique la tabla de particiones que usa mi sistema, debes asegurarte de cual es la tuya porque vamos a montar en el mismo orden las particiones en mi caso y para ejemplo primero `mount /dev/sda3 /mnt` recordemos que es la raiz de mi sistema, es donde estan los directorios de sistema /etc, /proc, /var etcetera, luego dentro de /mnt ya tenemos /boot ahi `mount /devsda1 /mnt/boot` que es donde esta la ubicacion de nuestro cargador de arranque en mi caso es grub, `/home` es donde estan todos los archivos personales de los usuarios, `swapon /dev/sda2` es la particion de intercambio del sistema, algunos ya no usan pero no esta de mas tener un poco, despues el `arch-chroot` que te deha actuar en el sistema como si estuvieras corriendo realmente ese y no uno en modo rescate o para reparar como en este caso.

Ahora viene la magia, vamos a actualizar grub para que nos reconozca los nuevos uid de las particiones, sino lo mas provable es que no arranque el sistema.

Inicialmente debemos restaurar la tabla de particiones sino de nada servira.

~~~bash
genfstab -U /mnt >> /mnt/etc/fstab #enter
arch-chroot /mnt # enter
~~~

~~~bash
grub-mkconfig -o /boot/grub/grub.cfg
~~~

Esta ultima linea es la que hace toda la magia.

Ahora desmonta `exit` para salir del chroot, luego desmontamos todo `umount /dev/sda{2, 4, 1, 3}` en orden inverso de como fueron montadas, `reboot` para reiniciar y ahora si, a esperar que hayas hecho todo bien.

## Recomendaciones Generales

Lee este post dos veces o mas, hasta que comprendas que estas haciendo, te recomiendo mucho que antes de intentar hacer algo de lo que leiste aqui descargues por lo menos el live de Gparted, de ser posible el de tu distribución linux y si de puera casualidad puedes emprime esta publicacion.

<a href="https://gparted.org/livecd.php" target="_blank">Descarga Gparted</a>  
<a href="arch-chroot" target="_blank">Descargar ArchLinux</a>  
<a href="https://archbang.org/links/" target="_blank">Descarga Archbang!</a> Te va a ahorrar la mitad del trabajo pues puedes hacer chroot sin reiniciar.  
<a href="https://www.ventoy.net/en/download.html" target="_blank">Descarga Ventoy</a> con esto se hacen los multiboot en linux sin mucho lio.

