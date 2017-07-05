function createSVG() {
  mainSVG = d3.select('body').append('svg').attr('height', '100vh').attr('width', '100vw')
}

function createBlues() {
  for (i = 0; i <= 5; i++) {
    mainSVG.append('circle')
      .attr('r', 20)
      .attr('cx', Math.floor(Math.random() * window.innerWidth))
      .attr('cy', Math.floor(Math.random() * window.innerHeight))
      .attr('fill', '#00fff7')
      .attr('class', 'blue')
  }
}

function createReds() {
  for (i = 0; i <= 5; i++) {
    mainSVG.append('circle')
      .attr('r', 20)
      .attr('cx', Math.floor(Math.random() * window.innerWidth))
      .attr('cy', Math.floor(Math.random() * window.innerHeight))
      .attr('fill', '#ff00f6')
      .attr('class', 'red')
  }
}

function createVertLine() {
  mainSVG.append('line')
    .attr('x1', innerWidth/2)
    .attr('y1', 10)
    .attr('x2', innerWidth/2)
    .attr('y2', innerHeight-20)
    .attr('stroke', '#00ffc8')
    .attr('stroke-width', 3)
}

function createHorLine() {
  mainSVG.append('line')
    .attr('x1', 10)
    .attr('y1', innerHeight/2)
    .attr('x2', innerWidth - 20)
    .attr('y2', innerHeight/2)
    .attr('stroke', '#00ffc8')
    .attr('stroke-width', 3)
}

function styleRedCircles() {
  d3.selectAll('circle.red')
    .style('fill', '#00ffc8')
}

function styleBlueCircles() {
  d3.selectAll('circle.blue')
    .style('fill', '#ff764d')
}

createSVG()
createReds()
createBlues()
createVertLine()
createHorLine()
setTimeout(styleRedCircles, 2000)
setTimeout(styleBlueCircles, 2000)
