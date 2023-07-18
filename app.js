const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


// Doughnut Chart
var xValues2 = ["Sold", "Produced"];
var yValues = [10000, 4000];
var barColors = [
  "#1e7145",
  "#000000"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
//   options: {
//     title: {
//       display: true,
//       text: "World Wide Wine Production 2018"
//     }
//   }
});

// BAR CHART
var xValues3 = ["M", "T", "W", "Th", "F", "S"];
var yValues3 = [160,280, 120, 210, 250, 60];
var barColors = [
  "#5ea18a",
  "#4cb266",
  "#40bf4c",
  "#4fb06b",
  "#57a87a",
  "#669999"
];

new Chart("myChart3", {
  type: "bar",
  data: {
    labels: xValues3,
    datasets: [{
      backgroundColor: barColors,
      data: yValues3
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
    }
  }
});