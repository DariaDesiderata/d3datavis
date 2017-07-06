let angularData = {}
let height = 800,
    width = 800,
    padding = 100

// helper function to sort data
function compare(a, b) {
  return a.country > b.country ? 1 : -1
}

const chart = d3.select(".chartArea")
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')

// set yScale to be anywhere within the predefined height less padding
const yScale = d3.scaleLinear()
                    .range([height-padding, 0+padding])

// set xScale to be anywhere within the predefined width less padding
const xScale = d3.scaleLinear()
                    .range([width-padding, 0+padding])
d3.csv('../angularGeoMap.csv', (error, data) => {

  if(error) throw error

  data.sort(compare)
  // set yDomain to max and min values of the dataset
  yDomain = d3.extent(data, (element) => {
    return parseInt(element.angular2)
  })

  // set xDomain to min and max values of the length of the dataset
  xDomain = d3.extent(data, (element, index) => {
    return index
  })

  // scale domains
  yScale.domain(yDomain)
  xScale.domain(xDomain)

  // set up x and y axis
  const xAxis = d3.axisBottom(xScale)
  const yAxis = d3.axisLeft(yScale)
  xAxis.tickValues(data.country)

  chart.append("g")
      .attr("transform", `translate(0, ${height-30})`)
      .classed('x axis', true)
      .call(xAxis)

  chart.append("g")
        .attr('transform', 'translate(25, 10)')
        .classed('y axis', true)
        .call(yAxis)

  dots = chart.selectAll('circle')
              .data(data)
              .enter()
              .append('circle')

  dots.attr('r', function(d) {return d.angular2})
      .attr('cx', (d, i) => {return xScale(i)})
      .attr('cy', (d) => {return yScale(d.angular2)}) // map data to yScale. So larger items will appear towards the larger side of the yDomain
      .attr('stroke', 'red')
      .attr('fill', function(d) {return "hsl(" + Math.random() * 360 + ", 100%, 50%)"})
})
