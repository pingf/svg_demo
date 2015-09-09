d3.xml("assets/crossing_road01.svg", function(xml) {
  document.body.appendChild(xml.documentElement);
  var svg = d3.select("svg")
  car = svg.select("g#car")//.selectAll('path');
  detector1 = svg.select("g#detector1")//.selectAll('path');
  detector2 = svg.select("g#detector2")//.selectAll('path');
  detector3 = svg.select("g#detector3")//.selectAll('path');

  car
  .transition().duration(8000).ease('linear').attr('transform','translate(500,-250)')
  .transition().duration(5000).ease('linear').attr('transform','translate(1200,-630)')


  detector1
  .transition().duration(10000).style('opacity','0');


  detector2.style('opacity','0')
 .transition().duration(2000).style('opacity','0')
 .transition().duration(10000).style('opacity','1')
 .transition().duration(1000).style('opacity','0');


  detector3.style('opacity','0')
 .transition().duration(8000).style('opacity','0')
 .transition().duration(5000).style('opacity','1');
});
