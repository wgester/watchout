$(document).ready(function(){

  var container = d3.select(".container");

  var gameBoard = container.selectAll('svg').data(["svg"]).enter().append('svg');

  var enemies = gameBoard.selectAll('circle').data(d3.range(50)).enter().append('circle')

  var setEnemies = function(){

    enemies.data(_.map(d3.range(50), function(){return [Math.random()*600, Math.random()*400];}))
      .transition()
      .duration(1000)
      .attr('cx', function(datum){return datum[0];}) // Might need jquery
      .attr('cy', function(datum){return datum[1];})
      .attr('r', 10);
  }

  setInterval(setEnemies, 1000);

});