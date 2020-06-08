let deathCases = [];
let newDeathDate = [];

deathChartIt();

async function deathChartIt() {
  await getDeathStats();
  const death_ctx = document.getElementById("deathChart1").getContext("2d");
  const myChart = new Chart(death_ctx, {
    type: "line",
    data: {
      labels: newDeathDate,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "Total Covid-19 Deaths",
          data: deathCases,
          backgroundColor: "transparent",
          borderColor: "rgba(220,53,69,0.75)",
          borderWidth: 1,
          pointStyle: "none",
          pointRadius: 1,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(220,53,69,0.75)",
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
              labelString: "Number of deaths",
            },
          },
        ],
      },
      title: {
        // display: true,
        // text: "Total Confirmed cases",
      },
    },
  });
}

async function getDeathStats() {
  const death_data = await fetch(
    "https://disease.sh/v2/historical/South%20Africa"
  );
  const death_data_response = await death_data.json();

  // console.log(death_data_response);
  const deaths_results = death_data_response.timeline.deaths;
  // console.log(deaths_results);
  const numOfDeaths = Object.entries(deaths_results);
  // console.log(numOfDeaths);
  // // newBarValue for the diff function
  // // let newBarValue = [];
  for (var i = 0; i < numOfDeaths.length; i++) {
    deathCases.push(numOfDeaths[i][1]);
    //   // sorting and arranging the date from response
    var datex = numOfDeaths[i][0];
    date = new Date(datex).toUTCString();
    death_date = date.split(" ").slice(1, 4).join(" ");
    // console.log(death_date);
    newDeathDate.push(death_date);
  }
}
