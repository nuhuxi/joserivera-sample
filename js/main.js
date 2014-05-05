		var doughnutData = [
				{
					value: 85,
					color:"#1ca026"
				},
				{
					value : 15,
					color : "#eef2f2"
				},
				

			];

	var myDoughnut = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);
