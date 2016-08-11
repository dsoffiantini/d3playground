angular.module("d3playground").controller("mainController", function($scope) {

  var barChartData = [3, 4, 9, 23, 78, 45];

  var x = d3.scaleLinear()
    .domain([0, d3.max(barChartData)])
    .range([0, 780]);

  d3.select(".bar-chart")
    .selectAll("div")
      .data(barChartData)
    .enter().append("div")
      .style("width", function(d) {
        return x(d) * 2 + "px";
      })
      .text(function(d) {
        return d;
      });



})
