---
layout: default
title: Galerias (Indice)
---

### Galerias Disponibles:
<div class="sociales">
{% for gallery in site.data.galleries %}
- [{{ gallery.description }}]({{ gallery.id }})
{% endfor %}
</div>