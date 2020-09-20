// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  	['',''],
  	['', 1],
  	['', 2],
  	['', 3],
  	['', 4],
  	['', 6],
  	['', 10],
  	['', 16],
  	['', 25],
  	['', 40],
  	['', 63],
  	['', 100],
  	['', 158],
  	['', 251],
  	['', 398],
  	['', 631],
  	['', 1000]
	]);

  // Optional; add a title and set the width and height of the chart
  var options = {
  	chartArea:{left:0,top:0,width:'100%',height:'100%'},
  	vAxis:{gridlines:{count:0}, textPosition:'none'},
  	legend:{position:'none'}
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.AreaChart(document.getElementById('bigGraph'));
  chart.draw(data, options);
}

function changeDisp(){
	
}