
      // block = d3.select("g#block").attr('cx',0).attr('cy',0);

d3.xml("crossing_road.svg", function(xml) {
  document.body.appendChild(xml.documentElement);
// });


//在 body 里添加一个 SVG 画布
var svg = d3.select("svg")





      block = svg.select("g#car")//.selectAll('path');

      // block.attr('cx',0).attr('cy',0)

  	  block.transition()
  		.duration(10000)
      .attr('transform','translate(500,-300)')


});
