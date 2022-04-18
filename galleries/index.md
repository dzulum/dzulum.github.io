---
layout: default
title: Galerias (Indice)
---
  <div class="sociales">
      <h1>Galerías Disponibles</h1>
<ul>
{% for gallery in site.data.galleries %}
<li><a href="{{ gallery.id }}">{{ gallery.description }}</a></li>
{% endfor %}
</ul>
</div>