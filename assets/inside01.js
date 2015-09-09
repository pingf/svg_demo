d3.xml("assets/inside01.svg", function(xml) {
  document.body.appendChild(xml.documentElement);
  var svg = d3.select("svg")

  car = svg.select("g#car")//.selectAll('path');
  car
  .transition()
  .duration(30000)
  .ease("linear")
  .attr('transform','translate(1000,0)')

  down = svg.select("g#down")//.selectAll('path');
  down
  .transition()
  .duration(20000)
  .ease("linear")
  .attr('transform','translate(-150,-150)')

  up = svg.select("g#up")//.selectAll('path');
  up
  .transition()
  .duration(20000)
  .ease("linear")
  .attr('transform','translate(220,-500)')


  l_1 = svg.select("g#l_1")//.selectAll('path');
  l_1
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')
  .transition()
  .duration(2000)
  .ease("linear")
  .attr('opacity','0')

  l_2 = svg.select("g#l_2")//.selectAll('path');
  l_2
  .attr('opacity','0')
  .transition()
  .duration(1800)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')
  .transition()
  .duration(2000)
  .ease("linear")
  .attr('opacity','0')

  l_3 = svg.select("g#l_3")//.selectAll('path');
  l_3
  .attr('opacity','0')
  .transition()
  .duration(3500)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')
  .transition()
  .duration(2000)
  .ease("linear")
  .attr('opacity','0')

  l_4 = svg.select("g#l_4")//.selectAll('path');
  l_4
  .attr('opacity','0')
  .transition()
  .duration(5200)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')
  .transition()
  .duration(2000)
  .ease("linear")
  .attr('opacity','0')

  l_info = svg.select("g#l_info")//.selectAll('path');
  l_info
  .attr('opacity','0')
  .transition()
  .duration(7000)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("linear")
  .attr('opacity','1')
  .transition()
  .duration(5000)
  .ease("linear")
  .attr('opacity','0')


  r_1 = svg.select("g#r_1")//.selectAll('path');
  r_1
  .attr('opacity','0')
  .transition()
  .duration(9000)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')

  r_2 = svg.select("g#r_2")//.selectAll('path');
  r_2
  .attr('opacity','0')
  .transition()
  .duration(11800)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')

  r_3 = svg.select("g#r_3")//.selectAll('path');
  r_3
  .attr('opacity','0')
  .transition()
  .duration(13500)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')

  r_4 = svg.select("g#r_4")//.selectAll('path');
  r_4
  .attr('opacity','0')
  .transition()
  .duration(15200)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')


  r_5 = svg.select("g#r_5")//.selectAll('path');
  r_5
  .attr('opacity','0')
  .transition()
  .duration(17000)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("bounce")
  .attr('opacity','1')


  r_info = svg.select("g#r_info")//.selectAll('path');
  r_info
  .attr('opacity','0')
  .transition()
  .duration(18500)
  .ease("bounce")
  .attr('opacity','0')
  .transition()
  .duration(2000)
  .ease("linear")
  .attr('opacity','1')
});
