// 'use strict'

const WC_Date_Modal = [];
const WC_Province_Modal = [];
const WC_Death_Modal = [];
const WC_Deaths_Date = [];
wcProvinceChart();

async function wcProvinceChart() {
  await getWcChart();
  // await getWcDeathStats();
  const ctx = document.getElementById("wcChartModalConfirmed").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: WC_Date_Modal,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "TotalConfirmed Cases",
          data: WC_Province_Modal,
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
    // options: hrStats,
    options: {
      responsive: true,
    //   hover: {
    //     mode: 'label',
    //     titleFontSize: 4,
    // },
      tooltips: {
        mode: "index",
        titleFontSize: 14,
        titleFontColor: "#000",
        bodyFontColor: "#000",
        backgroundColor: "#fff",
        titleFontFamily: "Montserrat",
        bodyFontFamily: "Montserrat",
        cornerRadius: 1,
        intersect: true,
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          fontFamily: "Montserrat",
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
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
            ticks: {
              min: 0,
              max: 50000
            },
            gridLines: {
              display: true,
              drawBorder: true,
            },
            scaleLabel: {
              display: false,
              labelString: "Cases",
            },
          },
        ],
      },
       title: 
      {
        display: true,
        text: "Total Confirmed cases",
      },
    },
  });
};

wcProvinceDeathsChart();

async function wcProvinceDeathsChart() {
  // await getWcChart();
  await getWcDeathStats();
  const ctx = document.getElementById("wcChartModalDeaths").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: WC_Deaths_Date,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "TotalDeath Cases",
          data: WC_Death_Modal,
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
    // options: hrStats,
    options: {
      responsive: true,
    //   hover: {
    //     mode: 'label',
    //     titleFontSize: 4,
    // },
      tooltips: {
        mode: "index",
        titleFontSize: 14,
        titleFontColor: "#000",
        bodyFontColor: "#000",
        backgroundColor: "#fff",
        titleFontFamily: "Montserrat",
        bodyFontFamily: "Montserrat",
        cornerRadius: 1,
        intersect: true,
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          fontFamily: "Montserrat",
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
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
            ticks: {
              min: 0,
              max: 1000
            },
            gridLines: {
              display: true,
              drawBorder: true,
            },
            scaleLabel: {
              display: false,
              labelString: "Cases",
            },
          },
        ],
      },
       title: 
      {
        display: true,
        text: "Total Death cases",
      },
    },
  });
};



// Confirmed
async function getWcChart() {
  const response = await fetch('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv');
  // const response = await fetch('test.csv');
  const data = await response.text();
  // console.log(data);
  const table = data.split('\n');
  // console.log(rows);
  table.forEach(row => {
    const columns = row.split(',');
    // console.log(columns);
    const wcDate = columns[0];
        WC_Date_Modal.push(wcDate);
    const wcProvinceData = columns[10];
        WC_Province_Modal.push(wcProvinceData);
    
  });
}

// WC-4 -Deaths
async function getWcDeathStats() {
  const response = await fetch('https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_deaths.csv');
  // const response = await fetch('tests.csv');
  const data = await response.text();
  // console.log(data);
  const table = data.split('\n');
  // console.log(table);
  table.forEach(row => {
    const columns = row.split(',');
    // console.log(columns);
    const wcDeathsDate = columns[10];
        WC_Deaths_Date.push(wcDeathsDate);
    const wcProvinceData = columns[10];
        WC_Death_Modal.push(wcProvinceData);
    
  });
}
