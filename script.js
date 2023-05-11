function toggleNav() {
	// Accessibility
	var buttonToggle = document.getElementById("navBar").getAttribute("aria-expanded");
	buttonToggle = !buttonToggle;
	
	var nav = document.getElementById("navBar");
	if (nav.className === "closedNav") {
		nav.className = "";
	} else {
		nav.className = "closedNav";
	}
}