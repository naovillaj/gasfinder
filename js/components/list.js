'use strict';

// const List = (update) => {
//   const sectionList = $("<section id='List-Section'></section>");
//   const rowList = $("<div class='row'></div>");
//
//   state.stations.forEach(function(e){
//
//   	const divList = $("<div class='col s12'></div>");
//   	 const divFirst = $("<div id='name'></div>");
//
//   	divFirst.append(e.name + "<br>");
//   	divFirst.append(e.address + "<br>");
//   	divFirst.append(e.district + "<br>");
//
//   	divList.append(divFirst);
//   	rowList.append(divList);
//   })
//
//   sectionList.append(rowList);
//
//
//   return sectionList;
// }

const List = (station) => {

  const divList = $("<div class='lista'></div>");
  const pName = $("<p id='name'>"+station.name+"</p>");
  const pAddress = $("<p id='address'>"+station.address+"</p>");
  const pDistrict = $("<p id='district'>"+station.name+"</p>");
  const flag = $("<i class='fa fa-map-o flag' aria-hidden='true'></i>")

  // sectionList.append(divList);
  divList.append(pName);
  divList.append(pAddress);
  divList.append(pDistrict);
  divList.append(flag);
}

const AllStations = (update) => {
  const sectionList = $("<section id='list-Section'></section>");
  state.stations.forEach((station) =>{
    sectionList.append(List(station));
  });

  return sectionList;
}
