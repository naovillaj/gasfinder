'use strict';

const filterByDistrict = (stations,query) => {

  state.stations.forEach(function(e){
    if(e.district.toLowerCase() == query.toLowerCase()){
      $("#list-Section").empty();

      const filterList = $("<div class='filter-List'></div>");
      const textList = $("<div class='text-List'></div>");
      const flag = $("<i class='fa fa-map-o flag' aria-hidden='true'></i>")

      textList.html("<strong>"+e.name+"</strong><br>" + e.address+"<br>" + e.district);
      filterList.append(textList);
      $("#list-Section").append(textList);
      $("#list-Section").append(flag);

    }
  })
	
}
