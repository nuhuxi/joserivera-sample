//this is the function for the chartjs donut charts

function mygraph(elementID, percentGreen, percentWhiteSpace) {
var doughnutData = [
				{
					value: percentGreen,
					color:"#65ad7d"  //color green
				},
				{
					value : percentWhiteSpace,
					color : "#ffffff"  //color white
				},
				
			];

	var myDoughnut = new Chart(document.getElementById(elementID).getContext("2d")).Doughnut(doughnutData);
	
	
	}
	

	
	

