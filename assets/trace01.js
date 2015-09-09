d3.xml("assets/trace01.svg", function(xml) {
  document.body.appendChild(xml.documentElement);
  var svg = d3.select("svg");
  var car = svg.select("g#car");
  var man = svg.select("g#man");

  for (var i = 1; i <= 5; i++) {
      svg.select("g#pos"+i).attr('opacity','0')
      .transition().duration(2200*(i-1)).ease("linear").attr('opacity','0')
      .transition().duration(2000).ease("linear").attr('opacity','1')
  }

  man.attr('transform','translate(-350,200)')
  .transition().duration(2000).ease("linear").attr('transform','translate(200,550)')
  .transition().duration(2000).ease("linear").attr('transform','translate(-350,800)')
  .transition().duration(2000).ease("linear").attr('transform','translate(-750,620)')
  .transition().duration(500).ease("linear").attr('transform','translate(-1000,750)')
  .transition().duration(1500).ease("linear").attr('transform','translate(-600,950)')
  .transition().duration(2000).ease("linear").attr('transform','translate(-900,1100)')


  for (var i = 1; i <= 11; i++) {
      svg.select("g#step"+i).attr('opacity','0')
      .transition().duration(10000+500*(i-1)).ease("linear").attr('opacity','0')
      .transition().duration(500).ease("elastic").attr('opacity','1')
  }

});
