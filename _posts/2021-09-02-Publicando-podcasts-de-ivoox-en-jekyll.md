---
layout: post
tags: tech audio dzulum
date: 2021-09-02 22:41:00
title: Publicando podcasts de iVoox en jekyll
---

# Publicando podcasts de iVoox en jekyll

Hoy voy a compartir algo que acabo de implementar aquí en mi blog, la publicacion de capítulos de podcasts alojados en [iVoox](https://ivoox.com) directo en tu blog hecho en [jekyll](https://jekyllrb.com), aunque yo tengo hospedado mi blog en [Github](https://github.com) esto funcionará aún si tienes tu blog alojado de manera independiente en otro servidor.

![Post de iVoox en Jekyll](/images/ivoox/ivoox-jekyll.png)

## Preparativos

Estos pasos no son tan difíciles como crees, lo primero es crear un archivo del tipo include para colocar el código inicial, segundo, hay que crear un post desde donde llamaremos nuestro archivo include con la información que debemos/queremos publicar, tercero, consiguiendo el ID del audio, cuarto, publicar así que, manos a la obra.

### 1. Creando el archivo include

En el directorio de includes de tu blog crea un archivo que contendrá código genérico administrado por iVoox, en mi caso lo llamaré `ivoox.html`

~~~html
<iframe id='audio_{{include.id}}' frameborder='0' allowfullscreen='' scrolling='no' height='200' style='width:100%;' src='https://mx.ivoox.com/es/player_ej_{{include.id}}_6_1.html'></iframe>
~~~

Ese código lo obtuve desde el sitio de iVoox en la sección de compartir.

El archivo que acabamos de crear y sin pasarle el ID luce así en nuestro navegador.

![Post de iVoox en Jekyll](/images/ivoox/ivoox.html.png)

![Post de iVoox en Jekyll](/images/ivoox/ivoox-codigo.png)

Como puedes ver quité el número que tiene en el codigo y lo sustituí por `{{include.id}}`, eso es lo que hará la magia, pues se lo vamos a pasar desde el archivo de la publicación.

### 2. Creando la publicación y llamando ivoox.html

Esta parte es simple, solo debemos crear nuestro archivo regular, como cada que creamos una publicación en nuestro blog.

~~~markdown
---
layout: post
tags: audio
date: 2021-09-02 02:30:01 -0600
title: La macabra historia de la familia Berlanga
---
![Play](/images/play.png)
{% include ivoox.html id='' %}

~~~

Como puedes ver en el contenido de tu archivo hay una linea `{% include ivoox.html id='' %}` y tenemos faltante el ID, bueno, es hora de ir a conseguir uno que nos agrade para publicar en nuestro blog, en mi caso no tengo un canal de podcast en ivoox pero quiero compartir un podcast que me gusta, asi que voy por mi ID.


### 3. Seleccionando el ID del audio en iVoox

¿Recuerdas el `{{include.id}}`? pues aquí lo vamos a definir.

![Seleccionando iVoox ID](/images/ivoox/ivoox-id.png)

En la imagen puedes ver que hay unos números seleccionados, bueno, ese es el ID del audio que vamos a publicar en nuestro blog.

Tu publicación debe quedar así.

~~~markdown
---
layout: post
tags: audio
date: 2021-09-02 02:30:01 -0600
title: La macabra historia de la familia Berlanga
---
![Play](/images/play.png)
{% include ivoox.html id='55032450' %}

~~~

### 4. Ahora lo publicamos

Simplemente hay que hace un push como siempre para desplegar el commit que enviará tu archivo include y tu nueva publicación logrando así la tarea prometida.

"Publicar podcast de iVoox en blog Jekyll"

![Post de iVoox en Jekyll](/images/ivoox/ivoox-jekyll.png)

Aquí el resultado [La macabra historia de la familia Berlanga](https://dzulum.tk/La-macabra-historia-de-la-familia-Berlanga/)