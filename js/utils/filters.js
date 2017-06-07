'use strict';

const filterByDistrict = (stations,query) => {

  state.stations.forEach(function(e){
    if(e.district.toLowerCase() == query.toLowerCase(){
      $(#list-Section).empty();

      const filterList = $("<div class='filter-List'></div>");
      const textList = $("<div class='text-List'></div>");

      textList.text(e.name + e.address + e.district);
      filterList.append(textList);
      $("#List-Section").append(textList);
    })
  })
	// const vInput = $(#input).val();

}
