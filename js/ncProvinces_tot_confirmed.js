// 'use strict'

const NC_Date = [];
const NC_Province = [];
const NC_Death = [];
ncProvinceChart();

async function ncProvinceChart() {
  await getNcChart();
  await getNcDeathStats();
  // const ctx = document.getElementById("ncChart").getContext("2d");
  // const myChart = new Chart(ctx, {
  //   type: "line",
  //   data: {
  //     labels: NC_Date,
  //     type: "line",
  //     defaultFontFamily: "Montserrat",
  //     datasets: [
  //       {
  //         label: "TotalConfirmed Cases",
  //         data: NC_Province,
  //         backgroundColor: "transparent",
  //         borderColor: "rgba(220,53,69,0.75)",
  //         borderWidth: 1,
  //         pointStyle: "none",
  //         pointRadius: 1,
  //         pointBorderColor: "transparent",
  //         pointBackgroundColor: "rgba(220,53,69,0.75)",
  //       },
  //       {
  //         label: "TotalDeath Cases",
  //         data: NC_Death,
  //         backgroundColor: "transparent",
  //         borderColor: "rgba(49, 92, 231, 0.75)",
  //         borderWidth: 1,
  //         pointStyle: "none",
  //         pointRadius: 1,
  //         pointBorderColor: "transparent",
  //         pointBackgroundColor: "rgba(49, 92, 231, 0.75)",
  //       }         
  //     ],
  //   },
  //   options: {
  //     responsive: true,

  //     tooltips: {
  //       mode: "index",
  //       titleFontSize: 8,
  //       titleFontColor: "#000",
  //       bodyFontColor: "#000",
  //       backgroundColor: "#fff",
  //       titleFontFamily: "Montserrat",
  //       bodyFontFamily: "Montserrat",
  //       cornerRadius: 3,
  //       intersect: true,
  //     },
  //     legend: {
  //       display: true,
  //       labels: {
  //         usePointStyle: true,
  //         fontFamily: "Montserrat",
  //       },
  //     },
  //     scales: {
  //       xAxes: [
  //         {
  //           display: true,
  //           gridLines: {
  //             display: false,
  //             drawBorder: false,
  //           },
  //           scaleLabel: {
  //             display: false,
  //             labelString: "Month",
  //           },
  //         },
  //       ],
  //       yAxes: [
  //         {
  //           display: true,
  //           gridLines: {
  //             display: true,
  //             drawBorder: true,
  //           },
  //           scaleLabel: {
  //             display: true,
  //             labelString: "Cases",
  //           },
  //         },
  //       ],
  //     },
  //     title: {
  //       display: false,
  //       text: "Total Confirmed cases",
  //     },
  //   },
  // });

  var NC_lineChartData = {
    labels: NC_Date,
    datasets: [{
      type: 'line',
      label: 'Confirmed Cases1',
      id: "y-axis-0",
      backgroundColor: "rgba(220,53,69,0.75)",
      fill: false,
      // data: [1500, 2600, 4700, 5800]
      data: NC_Province,
                borderColor: "rgba(220,53,69,0.75)",
          borderWidth: 1,
          pointStyle: "diamond",
          pointRadius: 2,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(220,53,69,0.75)",
    }, {
      type: 'line',
      label: 'Deaths Cases',
      id: "y-axis-1",
      backgroundColor: "rgba(49, 92, 231, 0.75)",
      fill: true,
      data: NC_Death,
          // backgroundColor: "transparent",
          borderColor: "rgba(149, 192, 231, 0.75)",
          borderWidth: 1,
          pointStyle: "none",
          pointRadius: 1,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(49, 92, 231, 0.75)",
    }]
  };
  
  var ctx = document.getElementById("ncChart");
  // allocate and initialize a chart
  var ch = new Chart(ctx, {
    type: 'line',
    data: NC_lineChartData,
    options: {
      title: {
        display: false,
        text: "Stats"
      },
      tooltips: {
        mode: 'label'
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: false,
        }],
        yAxes: [{
          stacked: true,
          position: "left",
          id: "y-axis-0",
        }, {
          stacked: false,
          position: "right",
          id: "y-axis-1",
        },
        ]
      }
    }
  });
};



// Confirmed
async function getNcChart() {
  const response = await fetch('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv');
  // const response = await fetch('test.csv');
  const data = await response.text();
  // console.log(data);
  const table = data.split('\n');
  // console.log(rows);
  table.forEach(row => {
    const columns = row.split(',');
    // console.log(columns);
    const ncDate = columns[0];
        NC_Date.push(ncDate);
    const ncProvinceData = columns[8];
        NC_Province.push(ncProvinceData);
    
  });
}

// NC-3 - Deaths
async function getNcDeathStats() {
  const response = await fetch('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_deaths.csv');
  // const response = await fetch('tests.csv');
  const data = await response.text();
  // console.log(data);
  const table = data.split('\n');
  // console.log(table);
  table.forEach(row => {
    const columns = row.split(',');
    // console.log(columns);
    // const ecDate = columns[0];
    //     EC_Date.push(ecDate);
    const ncProvinceData = columns[8];
        NC_Death.push(ncProvinceData);
    
  });
}