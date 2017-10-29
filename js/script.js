var menuButton = document.querySelector(".main-nav__toggle");

menuButton.classList.remove("main-nav__toggle--closed");

menuButton.addEventListener("click", function(e){
	e.preventDefault();
	menuButton.classList.add("main-nav__toggle--closed");
  /*alert("ok");*/
})
