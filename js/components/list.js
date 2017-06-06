'use strict';

const List = (update) => {
  const sectionList = $("<section id='List-Section'></section>");
  const rowList = $("<div class='row'></div>");
  // const divList = $("<div class='col s12'></div>");
  // const divFirst = $("<div id='name'></div>");
  // const divFirst = $("<div></div>");
  // const divFirst = $("<div></div>");

  state.stations.forEach(function(e){

  	const divList = $("<div class='col s12'></div>");
  	 const divFirst = $("<div id='name'></div>");

  	// divName.append(e.name + "<br>");
  	// divAddress.append(e.address + "<br>");
  	// divDistrict.append(e.district + "<br>");

  	divFirst.append(e.name + "<br>");
  	divFirst.append(e.address + "<br>");
  	divFirst.append(e.district + "<br>");

  	// divSecond.append(e.name);
  	// divSecond.append(e.address);
  	// divSecond.append(e.district);

  	// divThird.append(e.name);
  	// divThird.append(e.address);
  	// divThird.append(e.district);

  	divList.append(divFirst);
  	// divList.append(divAddress);
  	// divList.append(divDistrict);
  	rowList.append(divList);
  })

  sectionList.append(rowList);
  
  
  return sectionList;
}