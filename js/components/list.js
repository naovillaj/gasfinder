'use strict';

const List = (station) => {

  const divList = $("<div class='lista'></div>");
  const pName = $("<p id='name'>"+station.name+"</p>");
  const pAddress = $("<p id='address'>"+station.address+"</p>");
  const pDistrict = $("<p id='district'>"+station.district+"</p>");
  const flag = $("<i class='fa fa-map-o flag' aria-hidden='true'></i>")
  const hr = $("<hr>");

  divList.append(pName);
  divList.append(pAddress);
  divList.append(pDistrict);
  divList.append(flag);
  divList.append(hr);

    flag.on("click", (station) =>{
    $("#search-Section").empty();
    $("#list-Section").empty();
    sectionMap.append(initMap());
    sectionMap.append(Map(station));
  });
  return divList;
}

const AllStations = (update) => {
  const sectionList = $("<section id='list-Section'></section>");
  state.stations.forEach((station) =>{
    sectionList.append(List(station));
  });

  return sectionList;
}
