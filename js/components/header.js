'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const rowTitle = $("<div class='row'></div>")
  const divTitle = $("<div class='col s10 left-align'></div>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  divTitle.append(title);
  divTitle.append(icon);
  rowTitle.append(divTitle);

  header.append(rowTitle);

  return header;
}
