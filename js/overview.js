window.onload = function () {
  CanvasJS.addColorSet("greenShades",
    [//colorSet Array

      "#D5E6F8",
      "#0074E5",
      "#0081FF",
      "#0062C3",


    ]);

  var chart = new CanvasJS.Chart("chartContainer", {

    animationEnabled: true,
    colorSet: 'greenShades',
    title: {

      horizontalAlign: "left"
    },

    data: [{
      type: "doughnut",
      startAngle: 260,
      innerRadius: 20,
      dataPoints: [
        { y: 90 },
        { y: 90 },
        { y: 90 },
        { y: 90 }

      ]
    }]
  });
  chart.render();

  var chart = new CanvasJS.Chart("columnchart_material", {
    animationEnabled: true,
    colorSet: 'greenShades',

    axisY: {
      title: "Stakeholders",
      titleFontColor: "#4F81BC",
      lineColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      tickColor: "#4F81BC"
    },
    dataPointWidth: 15,

    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "column",
      name: "Proven Oil Reserves (bn)",
      legendText: "Proven Oil Reserves",
      showInLegend: true,
      dataPoints: [
        { label: "sun-sat", y: 266.21 },
        { label: "sun-sat", y: 302.25 },
        { label: "sun-sat", y: 157.20 },

      ]
    },
    {
      type: "column",
      name: "Oil Production (million/day)",
      legendText: "Oil Production",
      axisYType: "secondary",
      showInLegend: true,
      dataPoints: [
        { label: "sun-sat", y: 10.46 },
        { label: "sun-sat", y: 2.27 },
        { label: "sun-sat", y: 3.99 },

      ]
    },
    {
      type: "column",
      name: "Oil Production (million/day)",
      legendText: "Oil Production",
      axisYType: "primary",
      showInLegend: true,
      dataPoints: [
        { label: "Sun-sat", y: 5.46 },
        { label: "sun-sat", y: 2.27 },
        { label: "Sun-sat", y: 3.99 },

      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

}