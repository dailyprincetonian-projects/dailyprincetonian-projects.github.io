var margin = {
  top: 30,
  right: 50,
  bottom: 10,
  left: 110
};

//Width and height
var width = 960 - margin.left - margin.right;
var height = 1000 - margin.top - margin.bottom;
var padding = 49;

//gridSize = Math.floor((width - (padding * 2)) / 24) // size of individual gridItem i.e the square which is drawn
/*
  To calculate the gridSize we take width and subtract padding * 2, why times 2 because padding is on both side of the square (the gridItem). Then we divide 
  it by 24
*/
buckets = 12;
//legendElementWidth = gridSize * 2
colors = ["rgb(250,250,250)", "#ffe8cc", "#ffd299", "#ffbb66", "#ffa532", "#ff8f00"]
days = ["Bergen", "Mercer", "Essex", "Warren", "Passaic", "Hudson", "Union"]
cases = [5, 457, 26, 22, 2, 1, 172, 8, 126, 16, 40, 147, 158, 119, 102, 95, 1, 51, 12, 124, 9]
times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"]

counties = ['Atlantic', 'Bergen', 'Burlington', 'Camden', 'Cape May', 'Cumberland', 'Essex', 'Gloucester', 'Hudson', 'Hunterdon', 'Mercer', 'Middlesex', 'Monmouth', 'Morris', 'Ocean', 'Passaic', 'Salem', 'Somerset', 'Sussex', 'Union', 'Warren']
dates = ["3/4", "3/5", "3/6", "3/7", "3/8", "3/9", "3/10", "3/11", "3/12", "3/13", "3/14", "3/15", "3/16", "3/17", "3/18", "3/19", "3/20", "3/21", "3/22"]

var svg = d3.select('.card')
  .append('svg')
  .attr('height', height + margin.top + margin.bottom)
  .attr('width', width + margin.left + margin.right)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)


//var dayScale = d3.scaleLinear().domain([7, 1]).range([height, 0]);
var dayScale = d3.scaleBand()
  .domain(counties)
  .range([height, 0])
  .padding(0.4);

var weekdayScale = d3.scaleBand()
  .domain(counties)
  .range([height, 0])
  .padding(0.4);

var casesScale = d3.scaleBand()
  .domain(cases)
  .range([height, 0])
  .padding(0.4);

var dayAxis = d3.axisLeft().ticks(19).scale(weekdayScale)
svg.append('g').attr('class', 'xAxis').call(dayAxis)
var dayAxis2 = d3.axisRight().tickValues(cases).scale(weekdayScale)
svg.append('g').attr('class', 'xAxis').attr("transform", "translate(" + width/2 + " ,0)").call(dayAxis2)
// ^ y axis
// var timeScale = d3.scaleLinear().domain([1, 24]).range([0, width])


var timeScale = d3.scaleBand()
  .domain(d3.range(1,20,1))
  .range([0, width/2])
  .padding(0.1)

var dateScale = d3.scaleBand()
  .domain(dates)
  .range([0, width/2])
  .padding(0.1)

var dateAxis = d3.axisTop().scale(dateScale).ticks(0)
svg.append('g').attr('class', 'yAxis').call(dateAxis)
// x^ axis

d3.csv("pancakes.csv", function(data) {

colorScale = d3.scaleQuantile().domain([0, buckets - 1, d3.max(data, d => d.cases)]).range(colors);
colorScale = d3.scaleThreshold().domain([1,5,25,125,625]).range(colors);
  
svg.selectAll('.squares')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => {
    return timeScale(d.day);
  })
  .attr('y', d => {
    return dayScale(d.county);
  })
  .attr('width', timeScale.bandwidth())
  .attr('height', dayScale.bandwidth())
  .style('fill', d => colorScale(d.cases))

});


