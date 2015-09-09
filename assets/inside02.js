d3.xml("assets/inside02.svg", function(xml) {
  document.body.appendChild(xml.documentElement);
  var svg = d3.select("svg")

  svg.select("g#block").style('opacity','1')
    .transition().duration(3000).ease("linear").style('opacity','0')
  svg.select("g#inside").style('opacity','0')
    .transition().duration(2500).ease("linear").style('opacity','0')
    .transition().duration(5000).ease("linear").style('opacity','1')



  var wechat = svg.select("g#wechat");
  var weibo = svg.select("g#weibo");

  repeat_wechat();
  repeat_weibo();



  svg.select("g#step21").style('opacity','0')
    .transition().duration(7500).ease("linear").style('opacity','0')
    .transition().duration(2000).ease("linear").style('opacity','1');
  svg.select("g#step22").style('opacity','0')
    .transition().duration(7500+2000).ease("linear").style('opacity','0')
    .transition().duration(2000).ease("linear").style('opacity','1');
  svg.select("g#info2").style('opacity','0')
    .transition().duration(7500+2000*2).ease("linear").style('opacity','0')
    .transition().duration(2000).ease("linear").style('opacity','1');

  svg.select("g#step11").style('opacity','0')
    .transition().duration(7500+1500).ease("linear").style('opacity','0')
    .transition().duration(2000).ease("linear").style('opacity','1');
  svg.select("g#step12").style('opacity','0')
    .transition().duration(7500+1500+2000).ease("linear").style('opacity','0')
    .transition().duration(2000).ease("linear").style('opacity','1');
  svg.select("g#info1").style('opacity','0')
    .transition().duration(7500+1500+2000*2).ease("linear").style('opacity','0')
    .transition().duration(2000).ease("linear").style('opacity','1');

  function repeat_wechat() {
    wechat.style("opacity", "0.2")
    .transition().duration(2000).ease("bounce").style('opacity','1')
    .each("end", repeat_wechat);

  }
  function repeat_weibo(){

    weibo.style("opacity", "0.2")
    .transition().duration(2500).ease("linear").style('opacity','1')
    .each("end", repeat_weibo);
  }
});
