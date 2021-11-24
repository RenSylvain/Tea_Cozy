

/* 
This doesn't work, but I am leaving it here to show I tried to make a 
Hamberguer icon. First I would of had to remove the nav menu when the window was
500px in length. And then replaced it with a Hamburger menu. But I figured it'd
be better to just be happy with what I accomplished and move onto next section:


let removeNav = function (){
	let navObj = document.getElementById('navMenu');
	let windowWidth = window.innerWidth;

	if(windowWidth < 500){
		navObj.parentNode.removeChild(navObj);
	}

}

window.addEventListener('resize', removeNav);


ps. I couldn't get this javascript code to work anyway.
*/