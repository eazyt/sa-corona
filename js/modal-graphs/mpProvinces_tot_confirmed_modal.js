// 'use strict'

const MP_Date_Modal = [];
const MP_Province_Modal = [];
const MP_Death_Modal = [];
mpProvinceChart();

async function mpProvinceChart() {
  await getMpChart();
  // await getMpDeathStats();
  const ctx = document.getElementById("mpChartModalConfirmed").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: MP_Date_Modal,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "TotalConfirmed Cases",
          data: MP_Province_Modal,
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

mpProvinceDeathsChart();

async function mpProvinceDeathsChart() {
  // await getMpChart();
  await getMpDeathStats();
  const ctx = document.getElementById("mpChartModalDeaths").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: MP_Date_Modal,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "TotalDeath Cases",
          data: MP_Death_Modal,
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
async function getMpChart() {
  const response = await fetch('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv');
  // const response = await fetch('test.csv');
  const data = await response.text();
  // console.log(data);
  const table = data.split('\n');
  // console.log(rows);
  table.forEach(row => {
    const columns = row.split(',');
    // console.log(columns);
    const mpDate = columns[0];
        MP_Date_Modal.push(mpDate);
    const mpProvinceData = columns[7];
        MP_Province_Modal.push(mpProvinceData);
    
  });
}

// MP-6 - Deaths
async function getMpDeathStats() {
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
    const mpProvinceData = columns[7];
        MP_Death_Modal.push(mpProvinceData);
    
  });
}