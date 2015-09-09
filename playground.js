
      // block = d3.select("g#block").attr('cx',0).attr('cy',0);

d3.xml("cross.svg", function(xml) {
  document.body.appendChild(xml.documentElement);
// });
  //画布大小
  	var width = 400;
  	var height = 400;

  	//在 body 里添加一个 SVG 画布
  	var svg = d3.select("svg")

  	var circle1 = svg.append("circle")
  					.attr("cx", 100)
  					.attr("cy", 100)
  					.attr("r", 45)
  					.style("fill","green");

  	//在1秒（1000毫秒）内将圆心坐标由100变为300
  	circle1.transition()
  		.duration(1000)
  		.attr("cx", 300);

  	var circle2 = svg.append("circle")
  					.attr("cx", 100)
  					.attr("cy", 200)
  					.attr("r", 45)
  					.style("fill","green");

  	//在1.5秒（1500毫秒）内将圆心坐标由100变为300，
  	//将颜色从绿色变为红色
  	circle2.transition()
  		.duration(1500)
  		.attr("cx", 300)
  		.style("fill","red");

  	var circle3 = svg.append("circle")
  					.attr("cx", 100)
  					.attr("cy", 300)
  					.attr("r", 45)
  					.style("fill","green");

  	//在2秒（2000毫秒）内将圆心坐标由100变为300
  	//将颜色从绿色变为红色
  	//将半径从45变成25
  	//过渡方式采用bounce（在终点处弹跳几次）
  	circle3.transition()
  		.duration(2000)
  		.ease("bounce")
  		.attr("cx", 300)
  		.style("fill","red")
  		.attr("r", 25);


      // block = svg.select("g#block")//.selectAll('path')
      //
      // // block.attr('cx',0).attr('cy',0)
      //
  	  // block.transition()
  		// .duration(2000)
  		// // .ease("bounce")
      // .attr('transform','translate(20,100)')
  		// // .style("fill","red")
  		// // .attr("r", 25);
      //
      // svg.node().appendChild(block);
});
