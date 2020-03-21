<script type="text/javascript" src="https://d3js.org/d3.v3.min.js"></script>
    <style>
	    
	    html, body {
		    margin: 0;
		    padding: 0;
		    height: 100%;
		    width: 100%;
	    }
	    
	    text {
		    font-family: arial;
		    font-size: 12px;
	    }
	    
	     
	    path.line {
		    fill: none;
		    stroke: red;
		    stroke-width: 3px;
	    } 
	    
		.axis path,
		.axis line {
		  fill: none;
		  stroke: slategray;
		  shape-rendering: crispEdges;
		}
    </style>
  </head>
  <body>
  
	<script type="text/javascript">
		
var parseDate = d3.time.format("%m/%d/%Y").parse;

var margin = {left: 50, right: 20, top: 20, bottom: 50 };

var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;


var max = 0;

var xNudge = 50;
var yNudge = 20;

var minDate = new Date();
var maxDate = new Date();




d3.csv("prices.csv")
    .row(function(d) { return { month: parseDate(d.month), price: Number(d.price.trim().slice(1))}; })
    .get(function(error, rows) { 
	    max = d3.max(rows, function(d) { return d.price; });
	    minDate = d3.min(rows, function(d) {return d.month; });
		maxDate = d3.max(rows, function(d) { return d.month; });		


		var y = d3.scale.linear()
					.domain([0,max])
					.range([height,0]);
		
		var x = d3.time.scale()
					.domain([minDate,maxDate])
					.range([0,width]);
		
		var yAxis = d3.svg.axis()
						.orient("left")
						.scale(y);
						
		var xAxis = d3.svg.axis()
						.orient("bottom")
						.scale(x);
		
		var line = d3.svg.line()
			.x(function(d){ return x(d.month); })
			.y(function(d){ return y(d.price); })
			.interpolate("cardinal");
		
		
		var svg = d3.select("body").append("svg").attr("id","svg").attr("height","100%").attr("width","100%");
		var chartGroup = svg.append("g").attr("class","chartGroup").attr("transform","translate("+xNudge+","+yNudge+")");
		
		chartGroup.append("path")
			.attr("class","line")
			.attr("d",function(d){ return line(rows); })		
		

		chartGroup.append("g")
			.attr("class","axis x")
			.attr("transform","translate(0,"+height+")")
			.call(xAxis);
			
		chartGroup.append("g")
			.attr("class","axis y")
			.call(yAxis);
	

		
	});
    

		
		
		
	</script>
