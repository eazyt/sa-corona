// 'use strict'

const LP_Date_Modal = [];
const LP_Province_Modal = [];
const LP_Death_Modal = [];
lpProvinceChart();

async function lpProvinceChart() {
  await getLpChart();
  // await getLpDeathStats();
  const ctx = document.getElementById("lpChartModalConfirmed").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: LP_Date_Modal,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "TotalConfirmed Cases",
          data: LP_Province_Modal,
          backgroundColor: "transparent",
          borderColor: "rgba(220,53,69,0.75)",
          borderWidth: 1,
          pointStyle: "none",
          pointRadius: 1,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(220,53,69,0.75)",
        },
      ],
    },
    options: {
      responsive: true,

      tooltips: {
        mode: "index",
        titleFontSize: 8,
        titleFontColor: "#000",
        bodyFontColor: "#000",
        backgroundColor: "#fff",
        titleFontFamily: "Montserrat",
        bodyFontFamily: "Montserrat",
        cornerRadius: 3,
        intersect: true,
      },
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          fontFamily: "Montserrat",
        },
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: false,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              drawBorder: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Cases",
            },
          },
        ],
      },
      title: {
        display: false,
        text: "Total Confirmed cases",
      },
    },
  });
};


lpProvinceDeathChart();

async function lpProvinceDeathChart() {
  // await getLpChart();
  await getLpDeathStats();
  const ctx = document.getElementById("lpChartModalDeath").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: LP_Date_Modal,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "TotalDeath Cases",
          data: LP_Death_Modal,
          backgroundColor: "transparent",
          borderColor: "rgba(49, 92, 231, 0.75)",
          borderWidth: 1,
          pointStyle: "none",
          pointRadius: 1,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(49, 92, 231, 0.75)",
        }         
      ],
    },
    options: {
      responsive: true,

      tooltips: {
        mode: "index",
        titleFontSize: 8,
        titleFontColor: "#000",
        bodyFontColor: "#000",
        backgroundColor: "#fff",
        titleFontFamily: "Montserrat",
        bodyFontFamily: "Montserrat",
        cornerRadius: 3,
        intersect: true,
      },
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          fontFamily: "Montserrat",
        },
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            scaleLabel: {
              display: false,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              drawBorder: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Cases",
            },
          },
        ],
      },
      title: {
        display: false,
        text: "Total Confirmed cases",
      },
    },
  });
};


// Confirmed
async function getLpChart() {
  const response = await fetch('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv');
  // const response = await fetch('test.csv');
  const data = await response.text();
  // console.log(data);
  const table = data.split('\n');
  // console.log(rows);
  table.forEach(row => {
    const columns = row.split(',');
    // console.log(columns);
    const lpDate = columns[0];
        LP_Date_Modal.push(lpDate);
    const lpProvinceData = columns[6];
        LP_Province_Modal.push(lpProvinceData);
    
  });
}

// Limpopo-8 - Deaths
async function getLpDeathStats() {
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
    const limpProvinceData = columns[6];
        LP_Death_Modal.push(limpProvinceData);
    
  });
}