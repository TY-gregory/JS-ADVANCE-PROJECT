/// variable///

const btn = document.querySelector("#btn");

//// principal function///
async function fetchwcity() {
  try {
    let city = document.getElementById("city").value;
    let city_search = city.toLowerCase().replace(" ", "-");
    console.log(city_search);
    cleanPage();
    const response = await fetch(
      "https://api.teleport.org/api/urban_areas/slug:" +
        city_search +
        "/scores/"
    )
      .then((response) => response.json())
      .then((json) => {
        let classefetch = json;
        console.log(classefetch);
        var iCanvas = document.createElement("canvas");
        iCanvas.id = "graph";
        iCanvas.className = "tab";

        iCanvas.width = 400;
        iCanvas.height = 90;
        document.body.appendChild(iCanvas);
        var iDiv = document.createElement("div");
        iDiv.id = "ris";
        iDiv.className = "score";
        iDiv.innerHTML += classefetch.summary;
        iDiv.innerHTML +=
          "Total Score" +
          " : " +
          Math.round(classefetch.teleport_city_score * 100) / 100;
        document.body.appendChild(iDiv);
        x = Array(classefetch.categories.length);
        y = Array(classefetch.categories.length);
        for (let i = 0; i < classefetch.categories.length; i++) {
          x[i] = classefetch.categories[i].name;
          y[i] = classefetch.categories[i].score_out_of_10;
          var iDiv = document.createElement("div");
          iDiv.id = "ris" + i;
          iDiv.className = "score";
          iDiv.innerHTML +=
            classefetch.categories[i].name +
            " : " +
            `${Math.round(classefetch.categories[i].score_out_of_10)}/10`;
          document.body.appendChild(iDiv);
        }

        chart(x, y);
      });
  } catch (response) {
    if (!response.ok || response.status >= 404) {
      throw Error(alert(" PLEASE INSERT A CORRECT CITY"));
    }
    return response.json();
  }
}

///// graph function /////
function chart(x, y) {
  const ctx = document.getElementById("graph").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: x,
      datasets: [
        {
          label: "Scores",
          data: y,
          backgroundColor: [
            "#FF3E96",
            "#00FFFF",
            "#40E0D0",
            "#FF6103",
            "#00FF00",
            "#FFD700",
            "#FF00FF",
            "#DC143C",
            "#4B0082",
            "#2F4F4F",
            "#F5F5DC",
            "#DCDCDC",
            "#228B22",
            "#FFFF00",
            "#800080",
            "#BC8F8F",
            "#D2691E",
          ],
          borderColor: ["#000000"],
          borderWidth: 1,
        },
      ],
    },
  });
}
/// refresh function////
function cleanPage() {
  if (document.contains(document.getElementById("ris"))) {
    document.getElementById("ris").remove();
    if (document.contains(document.getElementById("totScore"))) {
      document.getElementById("totScore").remove();
    }
    if (document.contains(document.getElementById("graph"))) {
      document.getElementById("graph").remove();
    }
    for (i = 0; i < 20; i++) {
      if (document.contains(document.getElementById("ris" + i))) {
        document.getElementById("ris" + i).remove();
      }
    }
  }
}

//// add event ///
btn.addEventListener("click", fetchwcity);
