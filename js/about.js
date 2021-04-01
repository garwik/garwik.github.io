var twt = document.getElementById("twt");
var mail = document.getElementById("mail");
var write = document.getElementById("social-prev");

function preview(event)
{
	if(event.target == twt)
	{
		write.innerHTML = "twitter";
	}
	else
	{
		write.innerHTML = "mail me";
	}
}
function unPreview(event)
{
	write.innerHTML = "";
}

twt.addEventListener("mouseover", preview);
twt.addEventListener("mouseout", unPreview);
mail.addEventListener("mouseover", preview);
mail.addEventListener("mouseout", unPreview);