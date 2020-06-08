// 'use strict'

const NW_date = [];
const NW_Province = [];
const NW_Death = [];
nwProvinceChart();

async function nwProvinceChart() {
  await getNwChart();
  await getNwDeathStats();
  // const ctx = document.getElementById("nwChart").getContext("2d");
  // const myChart = new Chart(ctx, {
  //   type: "line",
  //   data: {
  //     labels: NW_date,
  //     type: "line",
  //     defaultFontFamily: "Montserrat",
  //     datasets: [
  //       {
  //         label: "TotalConfirmed Cases",
  //         data: NW_Province,
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
  //         data: NW_Death,
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

  var NW_lineChartData = {
    labels: NW_date,
    datasets: [{
      type: 'line',
      label: 'Confirmed Cases',
      id: "y-axis-0",
      backgroundColor: "rgba(220,53,69,0.75)",
      fill: false,
      // data: [1500, 2600, 4700, 5800]
      data: NW_Province,
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
      data: NW_Death,
          borderColor: "rgba(149, 192, 231, 0.75)",
          borderWidth: 1,
          pointStyle: "none",
          pointRadius: 1,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(49, 92, 231, 0.75)",
    }]
  };
  
  var ctx = document.getElementById("nwChart");
  // allocate and initialize a chart
  var ch = new Chart(ctx, {
    type: 'line',
    data: NW_lineChartData,
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
async function getNwChart() {
  const response = await fetch('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv');
  // const response = await fetch('test.csv');
  const data = await response.text();
  // console.log(data);
  const table = data.split('\n');
  // console.log(rows);
  table.forEach(row => {
    const columns = row.split(',');
    // console.log(columns);
    const nwDate = columns[0];
        NW_date.push(nwDate);
    const nwProvinceData = columns[9];
        NW_Province.push(nwProvinceData);
    
  });
}

// NW-2 - Deaths
async function getNwDeathStats() {
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
    const nwProvinceData = columns[9];
        NW_Death.push(nwProvinceData);
    
  });
}