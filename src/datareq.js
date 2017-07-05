let angularData = {}
let height = 800,
    width = 800,
    padding = 100

let chart = d3.select(".chartArea")
    .append('svg')
    .attr('height', height)
    .attr('width', width)

// set yScale to be anywhere within the predefined height less padding
let yScale = d3.scaleLinear()
                    .range([height-padding, 0+padding])

d3.csv('../angularGeoMap.csv', (error, data) => {

// set yDomain to be max and min values of the data set
  yDomain = d3.extent(data, (element) => {
    return parseInt(element.angular2)
  })

// map yScale to yDomain
  yScale.domain(yDomain)

  dots = chart.selectAll('circle')
              .data(data)
              .enter()
              .append('circle')

  dots.attr('r', function(d) {return d.angular2})
      .attr('cx', function(d) {return Math.max(0 + padding, Math.random() * width - padding)})
      .attr('cy', (d) => {return yScale(d.angular2)}) // map data to yScale. So larger items will appear towards the larger side of the yDomain
      .attr('stroke', 'red')
      .attr('fill', function(d) {return "hsl(" + Math.random() * 360 + ", 100%, 50%)"})
})
