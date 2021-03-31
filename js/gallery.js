var dataTableContainer = document.getElementById("g-table-container");

console.log(dataTableContainer);

var insert = "<table>";


for(let i=0; i<data.length; i++)
{
	insert += "<tr><td>";
	insert += "<img src=\"images/" + data[i].link + ".png\">";
	insert += "<p>" + data[i].name + "</p>";
	insert += "</td></tr>";
}

dataTableContainer.innerHTML = insert;