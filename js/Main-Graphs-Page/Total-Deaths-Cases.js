let newSideBar = [];
let newSideDate = [];
myBarChart();

async function myBarChart() {
  await getBarStats();
  const ctx = document
    .getElementById("myBarChart")
    .getContext("2d");
  const myBarChart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: newSideDate,
      datasets: [
        {
          data: newSideBar[0],
          label: "Daily Deaths Cases",
          borderColor: "#458af7",
          backgroundColor: "#458af7",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: false,
        text: "World population per region (in millions)",
      },
    },
  });
}

async function getBarStats() {
  const response = await fetch(
    "https://corona.lmao.ninja/v2/historical/South%20Africa"
  );
  const data = await response.json();
  const results = data.timeline.deaths;
  const entries = Object.entries(results);
  // newBarValue for the diff function
  let newBarValue = [];
  for (var i = 0; i < entries.length; i++) {
    newBarValue.push(entries[i][1]);
    // sorting and arranging the date from response
    var date = entries[i][0];
    date = new Date(date).toUTCString();
    date = date.split(" ").slice(1, 4).join(" ");
    newSideDate.push(date);
  }
  // function to get the difference between consective numbers in an array
  function diff(ary) {
    var newA = [];
    for (var i = 1; i < ary.length; i++)
      newA.push(ary[i] - ary[i - 1]);
    return newA;
  }
  // newBar is an Array of cases per day
  const val = diff(newBarValue);
  // pushing newBar to Global variable to be accessed by chartjs
  newSideBar.push(val);
}

// console.log(newBar);
// console.log(newDate);