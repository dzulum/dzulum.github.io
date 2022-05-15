---
layout: tech
date: 2021-03-15 22:00:00 -0600
tags: tech
image: /images/2021-03-15-limpio.png
title: Configurando (ahora si) I3
---
# Configurando (ahora si) I3

Pues ahora si iniciamos a hacer la magia, en esta publicación voy a dejar mi configuración actual y los ajustes que he escrito en el archivo de configuración para lograr esto.

![Escritorio Limpio](/images/2021-03-15-limpio.png)

Vamos por partes, seguramente te llama la atención ese par de cosas semitransparentes de las orillas o las letras de colores de abajo, pues las "cosas" transparentes son ventanas de [conky](https://wiki.archlinux.org/index.php/Conky) y, sirven según la configuración que les des para monitorizar el sistema y sus recursos (izquierda) o para mostrar algún mensaje y/o información (derecha), lo que aparece en color verde del lado izquierdo es el nombre del espacio de trabajo, el que abre por defecto es el 1 y en este caso es donde están asignadas todas las ventanas de terminal, aunque las puedo mover entre espacios conforme lo requiera, solo las asigno ahí por comodidad, mas adelante veremos porque.

Seguramente también has visto que los fondos de pantalla no siempre son el mismo, bueno, primero que nada no pienses que ando por internet buscando que imagen robar para ponerla de ejemplo, mas bien consiste en un script muy sencillo en bash que se encarga de ir rotando las imágenes cada cierto tiempo.

Ahora, si eres detallista, sin duda te habrás percatado de dos iconos que no contrastan con la barra inferior, estos dos iconos que van justo en la esquina, uno es un bloc de notas para cuando estoy escribiendo ideas o cosas rápidas, el otro es un administrador de clipboard, digamos que puedes copiar muchas veces y ese programa se encarga de recordar lo que copiaste.

Los colores, bueno el naranja es monitor de procesador, el cyan de temperatura, morado de espacio libre en la partición de sistema, el verde pálido indica cuanto espacio libre tengo para mi usuario, el siguiente verde es el monitor de wifi, se pone rojo si esta desconectado, el siguiente es el monitor de volumen, muestra el porcentaje de volumen y se pone rojo si queda en mudo, el fondo lila es calendario y reloj.

Bien, eso fue una leve explicación de lo que viste en la imagen, ahora vamos a ver como es que funciona.

![I3 config](/images/2021-03-15-i3config-1.png)

Esto es parte de mi archivo de configuración ubicado en `/home/sicker/.config/i3/config`

~~~bash
# Usamos la tecla windows como modificador
# Para usar Alt como modificador seria Mod1
set $mod Mod4
# Configure border style <normal|1pixel|pixel xx|none|pixel>
new_window pixel 1
new_float normal
# Esconder bordes
hide_edge_borders none
# cambiar bordes
bindsym $mod+u border none
bindsym $mod+y border pixel 1
bindsym $mod+n border normal
# Fuente para los títulos, se usa en la barra si no hay otra definida.
font pango:Monospace 8
# This font is widely installed, provides lots of unicode glyphs, right-to-left
# text rendering and scalability on retina/hidpi displays (thanks to pango).
font pango:Devicons Regular 8
~~~

Como se puede apreciar en la imagen y en el texto lo primero que aparece es un comentario de que se hace y porque, `set $mod Mod4` hace que la tecla que se encargue de conmutar los modos de I3 de uso a comando.

Mas abajo se da la orden de que las nuevas ventanas tengan un borde de un pixel de ancho, que el tipo de las ventanas flotantes nuevas sea normal y algunas instrucciones para modificar los bordes, *bindsym* le informa a i3 que le daremos ordenes por medio de una combinación de teclas, por ejemplo `bindsym $mod+u border none` es la asignación de las teclas *Win+u* para que los bordes de la ventana cambien a 0, mas abajo están declaradas las fuentes y el tamaño a utilizar.

![Accesos directos](/images/2021-03-15-i3config-2.png)

~~~bash
#####################################
## Accesos Directos
#####################################

bindsym $mod+Shift+F2 exec spacefm
#bindsym $mod+Shift+F2 exec terminal -e 'ranger'
bindsym Print exec --no-startup-id scrot -t 20 '%T-%Y-%m-%d_$a_scrot.png' -e 'mv $f ~/Pictures/shots/'
bindsym Shift+Print exec --no-startup-id scrot -u -t 20 '%T-%d-%m-%Y-%a-%p-select.png' -e 'mv $f ~/Pictures/shots/'
bindsym $mod+F3 exec chromium

#Pantalla de bloqueo
exec --no-startup-id xautolock -time 10 -locker i3lock -i ~/.lock.png
bindsym $mod+l exec --no-startup-id i3lock -i ~/.lock.png
#Apagar
bindsym $mod+Shift+F10 exec poweroff
#programas que se ejecutan al iniciar sesion
#applet de red quitar numeral para usar
# exec --no-startup-id nm-applet
exec --no-startup-id conky
exec --no-startup-id conky -c ~/.conkyr
exec --no-startup-id sh ~/.custom/wallpaper.sh
exec --no-startup-id setxkbmap es
exec --no-startup-id picom -cCGfF -o 0.38 -O 200 -I 200 -t 0 -l 0 -r 3 -D2 -m 0.90
#exec --no-startup-id compton
exec --no-startup-id clipit
exec --no-startup-id dunst
exec --no-startup-id xpad
# Use pactl to adjust volume in PulseAudio.
set $refresh_i3status killall -SIGUSR1 i3status
~~~

En esta parte asignamos los programas que vamos a lanzar con los accesos que estamos indicando en la configuración, de inicio tenemos:

- spacefm *Administrador de archivos*
- scrot *Para tomar capturas de pantalla*
- Chromium *Navegador de internet*

Estan asignados respectivamente a las teclas:

- Win+Shift+F2
- ImpPnt o PrntScrn (imprimir pantalla)
- Win+F3

Después viene la pantalla de bloqueo la cual se ejecuta automáticamente a los diez minutos de no tener interacción con la pc, como todo esto es configurable, puede ser un minuto, una hora, tu tienes el control absoluto.

Y si quieres bloquear manualmente la pantalla también tenemos asignado un comando `$mod+l` *Win+l*, nota la diferencia, cuando se ejecuta un comando automáticamente al inicio de la sesión se declara por el comando `exec` y si lo vamos a lanzar nosotros se hace mediante `bindsym`.

El siguiente comando que lees es `$mod+Shift+F10` *Win+Shift+F10* este esta asignado para apagar el sistema.

Mas abajo tenemos los programas que se inician junto al sistema, como no estoy usando el **nm-applet** esta comentado por un numeral, como puedes observar cuando una linea inicia por el carácter del numeral la linea cambia de color, eso significa que es un comentario y no se ejecuta como una instrucción.

La lista de programas que inician junto a i3 son:

- conky (ventana izquierda)
- conky (ventana derecha)
- sh ~/.custom/wallpaper.sh (lanza el script de fondos de pantalla)
- setxkbmap es (pone el teclado en español)
- picom (para las transparencias)
- clipit (administrador de texto copiado)
- dunst (para las notificaciones mas adelante se usa)

Hasta aquí todo lo importante de ese texto.

![Audio y pantalla](/images/2021-03-15-i3config-3.png)

~~~bash
#audio
bindsym XF86AudioRaiseVolume exec "amixer sset Master 1dB+ && $refresh_i3status; notify-send 'Volume INC'"
bindsym XF86AudioLowerVolume exec "amixer sset Master 1dB- && $refresh_i3status; notify-send 'Volume DEC'"
bindsym XF86AudioMute exec "amixer sset Master toggle && $refresh_i3status; notify-send 'Volume Toggle'"

# controlar brillo de pantalla
bindsym XF86MonBrightnessUp exec "xbacklight -inc 10; notify-send 'Light up'"
bindsym XF86MonBrightnessDown exec "xbacklight -dec 10; notify-send 'Light down'"
~~~

En esta sección declaramos las teclas multimedia para aumentar, disminuir y enmudecer el audio respectivamente.

- XF86AudioRaiseVolume (Aumentar) vease el comando notify-send, ahí se usa dunst
- XF86AudioLowerVolume (Disminuir)
- XF86AudioMute (Enmudecer)

Justo despues de esto tenemos los controles de brillo de la pantalla.

- XF86MonBrightnessUp (Aumentar Brillo)
- XF86MonBrightnessDown (Disminuir Billo)

Un poco mas abajo tenemos un nuevo bloque de codigo e instrucciones, para mover ventanas, iniciar la terminal y forzar cierre de programas.

![Ventanas Flotantes y cierres](/images/2021-03-15-i3config-4.png)

~~~bash
# usa el modificador y el mouse para mover ventanas
floating_modifier $mod

# iniciar la terminal
bindsym $mod+Return exec i3-sensible-terminal

# cerrar la ventana activa
bindsym $mod+Shift+q kill
~~~

Como bien dice el texto usamos la tecla `Win` para arrastrar una ventana que este en modo flatante dando click y manteniendo mientras arrastramos.

Lo siguiente es la instrucción para abrir nuestra terminal usando `$mod+Return` o mejor dicho `Win+Enter` esto ejecutara cualquier terminal que hayas declarado o bien la que usa por default i3, en  mi caso aunque a veces uso lxterminal ya me empiezo a acostumbrar a xterm.

Por ultimo hay una linea que indica el acceso directo `$mod+Shift+q` `Win+Shift+q` simplemente va a cerrar la ventana que este en `Focus` al ejecutarse.

![Mover y apuntar](/images/2021-03-15-i3config-5.png)

Ahora viene la sección donde apuntamos y movemos las diferentes ventanas que podamos tener en un espacio de trabajo, a grandes rasgos mover las ventanas seria `Win+Shift+la tecla de dirección que quieras usar` y para apuntar `Win+Tecla de dirección a cual apuntar`

~~~bash
# menú de programas
bindsym $mod+d exec --no-startup-id rofi -show drun

# change focus
#bindsym $mod+j focus left
#bindsym $mod+k focus down
#bindsym $mod+l focus up
#bindsym $mod+semicolon focus right

# alternatively, you can use the cursor keys:
bindsym $mod+Left focus left
bindsym $mod+Down focus down
bindsym $mod+Up focus up
bindsym $mod+Right focus right

# move focused window
bindsym $mod+Shift+j move left
bindsym $mod+Shift+k move down
bindsym $mod+Shift+l move up
bindsym $mod+Shift+semicolon move right

# alternatively, you can use the cursor keys:
bindsym $mod+Shift+Left move left
bindsym $mod+Shift+Down move down
bindsym $mod+Shift+Up move up
bindsym $mod+Shift+Right move right

# split in horizontal orientation
bindsym $mod+h split h

# split in vertical orientation
bindsym $mod+v split v

# enter fullscreen mode for the focused container
bindsym $mod+f fullscreen toggle
~~~

La combinación interesante es `Win+d` que nos mostrara el menú desde donde podemos lanzar programas, se llama Rofi.

`$mod+h` o `Win+h` convertirá el layout en horizontal mientras `$mod+v` o `Win+v` convertirá el layout en vertical y finalmente `Win+f` convertirá una ventana a pantalla completa.

En la siguiente imagen vemos como se agrega el acceso directo para las funciones layout stacking `Win+s` layout tabbed `Win+w` y layout toggle split `Win+e` te recomiendo experimentar para que veas los cambios que ejecutan desde usar varias ventanas hasta usar una sola con varias pestañas y cada pestaña sea un programa diferente.

Después viene el floating toggle, intercambia entre modo ventana flotante `Win+Shift+space` focus mode toggle y focus parent, en realidad solo sirven para cambiar el modo de vista y aunque no los uso mucho a veces son muy útiles.

![Layouts](/images/2021-03-15-i3config-6.png)

![Declarando espacios de trabajo](/images/2021-03-15-i3config-7.png)

Aqui es donde esta lo mas interesante de la configuración, por lo menos para mi, como se puede observar en la imagen de arriba dice que se asignan los nombres de los espacios de trabajo y se asignan sus respectivos accesos directos.

~~~bash
# Define names for default workspaces for which we configure key bindings later on.
# We use variables to avoid repeating the names in multiple places.
set $ws1 "1: Terminal"
set $ws2 "2: WWW"
set $ws3 "3: Coding"
set $ws4 "4: Files"
set $ws5 "5: Writing"
set $ws6 "6: Design"
set $ws7 "7: Reading"
set $ws8 "8: Gaming"
set $ws9 "9: Multimedia"
set $ws10 "10: Varios"

# switch to workspace
bindsym $mod+F1 workspace number $ws1
bindsym $mod+F2 workspace number $ws2
bindsym F3 workspace number $ws3
bindsym $mod+F4 workspace number $ws4
bindsym $mod+F5 workspace number $ws5
bindsym $mod+F6 workspace number $ws6
bindsym F7 workspace number $ws7
bindsym F8 workspace number $ws8
bindsym F9 workspace number $ws9
bindsym F10 workspace number $ws10
~~~

Simplemente explicare esto:  
set $wsX "X: Nombre" es el formato donde X corresponde a un numero y nombre al nombre que quieres aplicar a tu espacio de trabajo, en mi caso tengo asignados espacios del 1 al 10 y se invocan con los accesos directos.

`bindsym FX` donde FX es una tecla del F1 al F10 pero escapando aquellas teclas que tienen funciones asignadas a otros programas, como F5 para refrescar sitios en internet, F2 para renombrar archivos en el Administrador de archivos etcétera, en esos casos  se usa `Win+FX`.

La siguiente sección de la configuración es para asignar accesos directos con los cuales mover los programas entre espacios de trabajo.

Todos están asignados a las teclas de numero mas la combinación de la tecla windows y Shift.

`Win+Shift+1` hasta `Win+Shift+0` Correspondiendo 1 al espacio 1 y 0 al espacio 10.

~~~bash
# move focused container to workspace
bindsym $mod+Shift+1 move container to workspace number $ws1
bindsym $mod+Shift+2 move container to workspace number $ws2
bindsym $mod+Shift+3 move container to workspace number $ws3
bindsym $mod+Shift+4 move container to workspace number $ws4
bindsym $mod+Shift+5 move container to workspace number $ws5
bindsym $mod+Shift+6 move container to workspace number $ws6
bindsym $mod+Shift+7 move container to workspace number $ws7
bindsym $mod+Shift+8 move container to workspace number $ws8
bindsym $mod+Shift+9 move container to workspace number $ws9
bindsym $mod+Shift+0 move container to workspace number $ws10
~~~

![Mover programas a otro espacio](/images/2021-03-15-i3config-8.png)

Y ahora, vamos a mostrar la magia de organizar todo como mejor te parezca y para eso vamos a asignar los programas por clase a cierto espacio de trabajo.

![Programas por espacio](/images/2021-03-15-i3config-9.png)
![Programas por espacio](/images/2021-03-15-i3config-10.png)

~~~bash
#Asignando programas a sus espacios y cambiando a la ventana recién abierta Terminales
 
assign [class="XTerm"] $ws1  
for_window [class="XTerm"] focus  
assign [class="Lxterminal"] $ws1  
for_window [class="Lxterminal"] focus 

#Internet ---

assign [class="Chromium"] $ws2  
for_window [class="Chromium"] focus  
assign [class="Google-chrome"] $ws2   
for_window [class="Google-chrome"] focus  
assign [class="gFTP"] $ws2  

#codigo --- 

assign [class="subl"] $ws3  
for_window [class="subl"] focus  
assign [class="Atom"] $ws3  
for_window [class="Atom"] focus  
assign [class="Electron"]  
$ws3 for_window [class="Electron"] focus  

#Archivos --- 

assign [class="Spacefm"] $ws4  
for_window [class="Spacefm"] focus  

#Escritura --- 

assign [class="ghostwriter"] $ws5  
for_window [class="ghostwriter"] focus  
assign [class="FocusWriter"] $ws5  
assign [class="calibre-edit-book"] $ws5
for_window [class="calibre-edit-ebook"] focus  
assign [class="Notes-Up"]  
$ws5 for_window [class="Notes-Up"] focus
assign [class="Leafpad"] $ws5  
for_window [class="Leafpad"] focus  

#Imagen --- 

assign [class="Gimp"] $ws6  
for_window [class="Gimp"] focus  
assign [class="Inkscape"] $ws6  
for_window [class="Inkscape"] focus  
assign [class="org.inkscape.Inkscape"]$ws6  
for_window [class="org-inkscape.Inkscape"] focus  
assign [class="krita"] $ws6  
for_window [class="krita"] focus  
assign [class="Gimagereader-gtk"] $ws6  
for_window [class="Gimagereader-gtk"] focus  
assign [class="Viewnior"] $ws6  
for_window [class="Viewnior"] focus

#Lectura --- 

assign [class="calibre"] $ws7  
for_window [class="calibre"] focus  
assign [class="calibre-ebook-viewer"] $ws7  
for_window [class="calibre-ebook-viewer"] focus  
assign [class="Evince"] $ws7  
for_window [class="Evince"] focus  

#juegos --- 

assign [class="mGBA"] $ws8 

#Multimedia ---

assign [class="mpv"] $ws9 
for_window [class="mpv"] focus

#programas que necesitan fix#

for_window [class="Inkscape"] move to workspace $ws6 workspace number $ws6  
for_window [class="org.inkscape.Inkscape"] move to workspace $ws6 workspace number $ws6
~~~

Bueno acá si es algo mas técnico 
para lograr esto, aunque créeme, no es nada del otro mundo y 
aprenderás mas cosas sobre los programas que tienes o 
tendrás instalados en tu equipo, como se observa tengo 
varios apartados, terminales, lectura, etc. Ahí es donde 
asignare cada programa según su uso para mas comodidad mía, 
en el espacio 1 terminales, 2 internet, 3 código, 4 archivos, 5 escritura, 6 diseño, 7 lectura, 8 juegos, 9 multimedia, 10 varios.

Cada programa se asigna de acuerdo al nombre de clase que tiene, `assign [class=""] $wsX` donde se debe rellenar el espacio entre comillas con el nombre de la clase del programa y $wsX sera el nombre del espacio de trabajo, algunos tienen debajo `for_window [class=""] focus` esta declaración se hace para que cuando ese programa se abra vayas directamente a el, luego hay programas que necesitan un pequeño fix donde se fuerza mover ventanas secundarias a el mismo espacio de trabajo que la ventana principal de ese programa, en el ejemplo se ve el caso con Inkscape.

![Reload, restart y salir](/images/2021-03-15-i3config-11.png)

En esta imagen se ven accesos directos para recargar el archivo de configuración de i3 `Win+Shift+c`, para reiniciar i3 `Win+Shift+r`, y para cerrar la sesión `Win+Shift+e`.

Mas abajo la configuración para el modo de redimensión de ventanas y su correspondiente acceso directo `Win+r`.

~~~bash
# reload the configuration file
bindsym $mod+Shift+c reload
# restart i3 inplace (preserves your layout/session, can be used to upgrade i3)
bindsym $mod+Shift+r restart
# exit i3 (logs you out of your X session)
bindsym $mod+Shift+e exec "i3-nagbar -t warning -m 'Estas a punto de cerrar sesion' -B 'Si, cerrar i3' 'i3-msg exit'"

# resize window (you can also use the mouse for that)
mode "resize" {
        # These bindings trigger as soon as you enter the resize mode

        # Pressing left will shrink the window’s width.
        # Pressing right will grow the window’s width.
        # Pressing up will shrink the window’s height.
        # Pressing down will grow the window’s height.
        bindsym j resize shrink width 10 px or 10 ppt
        bindsym k resize grow height 10 px or 10 ppt
        bindsym l resize shrink height 10 px or 10 ppt
        bindsym semicolon resize grow width 10 px or 10 ppt

        # same bindings, but for the arrow keys
        bindsym Left resize shrink width 10 px or 10 ppt
        bindsym Down resize grow height 10 px or 10 ppt
        bindsym Up resize shrink height 10 px or 10 ppt
        bindsym Right resize grow width 10 px or 10 ppt

        # back to normal: Enter or Escape or $mod+r
        bindsym Return mode "default"
        bindsym Escape mode "default"
        bindsym $mod+r mode "default"
}

bindsym $mod+r mode "resize"
~~~

Por ultimo declaramos donde y como se va a ver la barra y el acceso directo para mostrarla o no, `Win+m`.

Esta ultima parte solo la deje así, venia en la configuración inicial.

~~~bash
# Start i3bar to display a workspace bar (plus the system information i3status
# finds out, if available)
bar {
   colors {
        background #000000
        statusline #00ff00
        separator #00ff00

        # colour of border, background, and text
        focused_workspace       #00ff00 #000000 #00ff00
        active_workspace        #ffffff #4488ff #000000
        inactive_workspace      #ff0000 #000000 #ff0000
        urgent_workspace       #ff0000 #000000 #ff0000
    }
        status_command i3status
}
# hide/unhide i3status bar
bindsym $mod+m bar mode toggle

# Theme colors
# class                   border  backgr. text    indic.   child_border
  client.focused          #00dddd #000000 #44ff44 #00dddd
  client.focused_inactive #00dddd #000000 #44ff44 #00dddd
  client.unfocused        #00dddd #000000 #44ff44 #00dddd
  client.urgent           #00dddd #000000 #44ff44 #00dddd
  client.placeholder      #00dddd #000000 #44ff44 #00dddd 

  client.background       #000000

#############################
### settings for i3-gaps: ###
#############################

# Set inner/outer gaps
gaps inner 5
gaps outer -2

# Additionally, you can issue commands with the following syntax. This is useful to bind keys to changing the gap size.
# gaps inner|outer current|all set|plus|minus <px>
# gaps inner all set 10
# gaps outer all plus 5

# Smart gaps (gaps used if only more than one container on the workspace)
smart_gaps on

# Smart borders (draw borders around container only if it is not the only container on this workspace) 
# on|no_gaps (on=always activate and no_gaps=only activate if the gap size to the edge of the screen is 0)
smart_borders on

# Press $mod+Shift+g to enter the gap mode. Choose o or i for modifying outer/inner gaps. Press one of + / - (in-/decrement for 
# current workspace) or 0 (remove gaps for current workspace). If you also press Shift with these keys, the change will be global for all workspaces.
set $mode_gaps Gaps: (o) outer, (i) inner
set $mode_gaps_outer Outer Gaps: +|-|0 (local), Shift + +|-|0 (global)
set $mode_gaps_inner Inner Gaps: +|-|0 (local), Shift + +|-|0 (global)
bindsym $mod+Shift+g mode "$mode_gaps"

mode "$mode_gaps" {
        bindsym o      mode "$mode_gaps_outer"
        bindsym i      mode "$mode_gaps_inner"
        bindsym Return mode "default"
        bindsym Escape mode "default"
}
mode "$mode_gaps_inner" {
        bindsym plus  gaps inner current plus 5
        bindsym minus gaps inner current minus 5
        bindsym 0     gaps inner current set 0

        bindsym Shift+plus  gaps inner all plus 5
        bindsym Shift+minus gaps inner all minus 5
        bindsym Shift+0     gaps inner all set 0

        bindsym Return mode "default"
        bindsym Escape mode "default"
}
mode "$mode_gaps_outer" {
        bindsym plus  gaps outer current plus 5
        bindsym minus gaps outer current minus 5
        bindsym 0     gaps outer current set 0

        bindsym Shift+plus  gaps outer all plus 5
        bindsym Shift+minus gaps outer all minus 5
        bindsym Shift+0     gaps outer all set 0

        bindsym Return mode "default"
        bindsym Escape mode "default"
}
~~~

Es para configurar el modo gap, los espacios entre ventanas.

![Gaps](/images/2021-03-15-i3config-12.png)
![Gaps](/images/2021-03-15-i3config-13.png)
![Gaps](/images/2021-03-15-i3config-14.png)

Esto seguramente fue tedioso de leer para ti, imaginate cuanto fue para mi escribirlo... pero ya esta listo, en breve vamos a iniciar con los programas mencionados entre la configuración y algunos otros.