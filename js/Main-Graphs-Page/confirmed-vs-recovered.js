const xlabels = [];
const ylabels = [];
let ylabels1 = [];

chartIt();

async function chartIt() {
  await getAll();
  await getRecoveredStats();
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels,
      type: "line",
      defaultFontFamily: "Montserrat",
      datasets: [
        {
          label: "TotalConfirmed Cases",
          data: ylabels,
          backgroundColor: "transparent",
          borderColor: "rgba(220,53,69,0.75)",
          borderWidth: 1,
          pointStyle: "none",
          pointRadius: 1,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(220,53,69,0.75)",
        },
        {
          label: "Total Recovered",
          data: ylabels1,
          backgroundColor: "transparent",
          borderColor: "rgba(49, 92, 231, 1)",
          borderWidth: 1,
          pointStyle: "none",
          pointRadius: 1,
          pointBorderColor: "transparent",
          pointBackgroundColor: "#315ce7",
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
}

async function getAll() {
  const response = await fetch(
    "https://api.covid19api.com/total/country/south-africa/status/confirmed"
  );
  const data = await response.json();
  // console.log(data);
  for (var i = 0; i < data.length; i++) {
    var date = data[i].Date;
    date = new Date(date).toUTCString();
    date = date.split(" ").slice(0, 4).join(" ");
    var year = date;
    xlabels.push(year);
    var cases = data[i].Cases;
    ylabels.push(cases);
    // console.log(year, cases);
    // console.log(data);
  }
  // console.log(data.length);
}
// console.log(xlabels);

async function getRecoveredStats() {
  const response = await fetch(
    "https://disease.sh/v2/historical/South%20Africa?lastdays=all"
  );
  const data1 = await response.json();
  const results = data1.timeline.recovered;
  // console.log(results);
  const entries = Object.entries(results);
  // console.log(entries);
  // newBarValue for the diff function
  // let newBarValue = [];
  for (var i = 0; i < entries.length; i++) {
    ylabels1.push(entries[i][1]);
    // sorting and arranging the date from response
    var date = entries[i][0];
    date = new Date(date).toUTCString();
    date = date.split(" ").slice(1, 4).join(" ");
    newSideDate.push(date);
  }

  // ylabels1.push(val);
}

