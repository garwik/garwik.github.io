var dataTableContainer = document.getElementById("g-table-container");
var fwdButton = document.getElementById("g-forwards");
var bckButton = document.getElementById("g-backwards");

var n = 4;
var curr = 0;
var spare = 0;

//go through array and display n images
function forward()
{
	let insert = "<table>";
	for(let i=0; i<n; i++)
	{
		if(curr >= data.length) 
		{
			spare = n-i;
			break;
		}
		insert += "<tr><td>";
		insert += "<a href=\"images/" + data[curr].link + ".png\" target=\"_blank\">";
		insert += "<img src=\"images/" + data[curr].link + ".png\">";
		insert += "</a>";
		insert += "<p>" + data[curr].name + "</p>";
		insert += "</td></tr>";
		curr++;
	}
	dataTableContainer.innerHTML = insert;
	
	(spare != 0 || curr == data.length) ? fwdButton.disabled = true : fwdButton.disabled = false;
	(curr == n) ? bckButton.disabled = true : bckButton.disabled = false;
}

function back()
{
	(spare != 0) ? curr -= n + spare : curr -= n*2;
	if(curr < 0)
	{
		curr = 0;
	}
	spare = 0;
	forward();
}


forward();