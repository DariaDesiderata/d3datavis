let angularData = {}
let height = 800,
    width = 800,
    padding = 100

let chart = d3.select(".chartArea")
    .append('svg')
    .attr('height', height)
    .attr('width', width)

d3.csv('../angularGeoMap.csv', (error, data) => {
   dots = chart.selectAll('circle')
              .data(data)
              .enter()
              .append('circle')

   dots.attr('r', function(d) {return d.angular2})
       .attr('cx', function(d) {return Math.max(0 + padding, Math.random() * width - padding)})
       .attr('cy', function(d) {return Math.max(0 + padding, Math.random() * height - padding)})
       .attr('stroke', 'red')
       .attr('fill', function(d) {return "hsl(" + Math.random() * 360 + ", 100%, 50%)"})
})
