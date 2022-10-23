const burgerMenu = document.querySelector(".burger-container");
let isMenuOpen = false;

burgerMenu.addEventListener("click", () => {
	if (isMenuOpen == false) {
		burgerMenu.classList.add("expand");
		isMenuOpen = true;
		console.log("clicked");
	} else {
		burgerMenu.classList.remove("expand");
		isMenuOpen = false;
		console.log("clicked again");
	}
});
