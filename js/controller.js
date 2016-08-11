angular.module("d3playground").controller("mainController", function($scope) {

  var barChartData = [3, 4, 9, 23, 78, 45];

  var x = d3.scaleLinear()
    .domain([0, d3.max(barChartData)])
    .range([0, 500]);

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

    //reads csv and logs x and y values

    d3.csv("data.csv", type, function (arrayOfObjects) {
      arrayOfObjects.forEach(function (data){
        console.log(data.x + ", " + data.y);
      })
    })

    //parses strings into numbers

    function type(data) {
      data.x = parseFloat(data.x);
      data.y = +data.y;
      return data;
    }

  var ordinalScale = d3.scaleOrdinal()
      .domain(["A", "B", "C"])
      .range(["Apple", "Banana", "Coconut"])

    var svg = d3.select(".chart2").append("svg");
        svg.attr("width", 250);
        svg.attr("height", 250)

    var rect = svg.append("rect")
      .attr("x", 100)
      .attr("y", 100)
      .attr("width", 50)
      .attr("height", 50)
;


})
