<!-- Html Elements for Search buscador -->
<div id="search-container">
<input type="text" id="search-input" placeholder="Buscar...">
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>