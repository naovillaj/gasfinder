'use strict';

const Stations = (update) => {
  const sectionSearch = $("<section id='search-Section'></section>");
  const rowSearch = $("<div class='row'></div>")
  const divSearch = $("<div class='input-field col s10'></div>")
  const lupa = $('<i class="fa fa-search" aria-hidden="true"></i>')
  const input = $("<input id='searcher' type='text' placeholder='Ingresa tu distrito a buscar'>");

  divSearch.append(lupa);
  divSearch.append(input);
  rowSearch.append(divSearch);

 sectionSearch.append(rowSearch);

  return sectionSearch;
}