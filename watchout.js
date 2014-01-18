$(document).ready(function(){

  var container = d3.select(".container");

  var gameBoard = container.selectAll('svg').data(["svg"]).enter().append('svg');

  var enemies = gameBoard
      .selectAll('circle')
      .data(d3.range(50))
      .enter()
      .append('circle')
      // .append('pattern')
      // .append('image')
      // .attr('xlink:href', './img/Shuriken.png')
      // .attr('x', 0)
      // .attr('y', 0)
      // .attr('width', 20)
      // .attr('height', 20);

  var userObject = container
    .selectAll('svg')
    .selectAll('rect')
    .data(['user'])
    .enter()
    .append('rect')
    .attr('fill', 'red')
    .attr('height', 15)
    .attr('width', 15)
    .attr('x', 300)
    .attr('y', 200);
    // .behavior.drag();

  var drag1 = d3.behavior.drag()
    .on("drag", function(d,i) {
        resetUser(d3.mouse(this));
    });

  var resetUser = function(coordinates){
    var x = coordinates[0];
    var y = coordinates[1];

    (x < 0) && (x = 8);
    (y < 0) && (y = 8);

    (x > 600) && (x = 600-7);
    (y > 400) && (y = 400-7);

    userObject.attr('x', x-8).attr('y', y-8);
  }

  drag1.call(userObject);

  var setEnemies = function(){

    gameBoard.selectAll('circle').data(_.map(d3.range(50), function(){return [Math.random()*600, Math.random()*400];}))
      .transition()
      // .style('opacity', '0')
      .duration(1000)
      .attr('cx', function(datum){return datum[0];}) // Might need jquery
      .attr('cy', function(datum){return datum[1];})
      .attr('r', 10);
  }

  setInterval(setEnemies, 1000);

});