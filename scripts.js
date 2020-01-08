
var selectedslide = 0;
var width;

function setup()
{
	document.querySelector(".wedge").style.height = document.querySelector(".nav").getBoundingClientRect().bottom + "px";
	carousel = document.querySelector(".carousel");
	panels   = carousel.children;
	width = panels[0].getBoundingClientRect().width + 1000;
	 document.querySelector(".left").disabled = true;
	panelsarr = Array.from(panels);
	panelsarr.forEach( generate);
}

function generate(panel, index)
{
	
	panel.style.left = index * width + "px";
}
  
 function fullimage()
 {
	var photo = animal.getAttribute("data-photo");
	
 }	 
  
  function minimalimage()
  {
	  
	  
  }
  
function moveslide(dir)
{   

	carousel = document.querySelector(".carousel");
	panels   = carousel.children;
	pos = selectedslide * -width
	
	if (dir == "left")
	{selectedslide--;
	
	var id = setInterval(lastslide, 1);
	function lastslide() {
    if (pos > selectedslide * -width) {
		
      clearInterval(id);
	 
    } else {
      pos = pos + 16;
     
      carousel.style.left = pos + 'px';
    }
  }
	}
	
	if (dir == "right")
	{selectedslide++;

	var id = setInterval(nextslide, 1);
	function nextslide() {
    if (pos < selectedslide * -width) {
      clearInterval(id);
	 
    } else {
      pos = pos - 16;
     
      carousel.style.left = pos + 'px';
    }
  }
	}
	if (selectedslide == 0)
	{
		 document.querySelector(".left").disabled = true;
		  document.querySelector(".left").style.display = none;
		  alert(selectedslide);
	}
	else{
		 document.querySelector(".left").disabled = false;
	}
	
	if (selectedslide == panels.length - 1)
	{
		 document.querySelector(".right").disabled = true;
		 
	}
	else{
		 document.querySelector(".right").disabled = false;
	}
}