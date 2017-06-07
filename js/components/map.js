'use strict';

const Map = (station) => {

  const divList = $("<div class='lista'></div>");
  const divMap = $("<div id='map'></div>")
  const pName = $("<p id='name'>"+station.name+"</p>");
  const pAddress = $("<p id='address'>"+station.address+"</p>");
  const pProducts = $("<p id='products'>"+station.products+"</p>");
  const hr = $("<hr>");

  divList.append(divMap);
  divList.append(pName);
  divList.append(hr);
  divList.append(pAddress);
  divList.append(pProducts);  

  

  return divList;
}

const initMap = (e) => {
	var map = new GMaps({
	  div: '#map',
	  lat: e.lat,
	  lng: e.long
	});

	map.addMarker({
		lat: e.lat,
	  	lng: e.long	  	
	});
}

const FindMap = (update) => {
  const sectionMap = $("<section id='sectionMap'></section>"); 
 


  return sectionMap;
}