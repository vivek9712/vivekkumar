Highcharts.chart("container", {
    data: {
      table: "datatable",
      startRow: 1,
      startColumn: 0,
      endColumn: 1
    },
    chart: {
      type: "spline"
    },
    title: {
      text: "Demographics of Japan 1935–2020"
    },
    subtitle: {
      text:
        "Source: <a href='https://en.wikipedia.org/wiki/Demographics_of_Japan' target='_blank'>Wikipedia</a>"
    },
    yAxis: {
      title: {
        text: "Values in thousands"
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      title: {
        text: null
      }
    },
    tooltip: {
      pointFormat: "Population: <b>{point.y}k</b>"
    }
  });