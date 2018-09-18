google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['% of Pop with Access', 'Urban', 'Rural' ],
        ['Water Source', 98, 64],
        ['Sanitation Facilities', 60, 5],
    ]);

    var options = {
        chart: {
            title: 'Access to Water and Sanitation in Djibouti',

        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: {format: 'decimal'},
        height: 280,
        colors: ['#1b9e77', '#d95f02']
    };

    var chart = new google.charts.Bar(document.getElementById('Sanitation'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

$(window).resize(function(){
  drawChart();
});
