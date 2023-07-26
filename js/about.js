var discord = document.getElementById("discord");

function preview(event)
{
	if(event.target == discord)
	{
		discord.innerHTML = "@garwik";
	}
}
function unPreview(event)
{
	discord.innerHTML = "discord";
}

discord.addEventListener("mouseover", preview);
discord.addEventListener("mouseout", unPreview);
