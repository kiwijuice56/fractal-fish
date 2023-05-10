function toggleNav() {
  var x = document.getElementById("navBar");
  if (x.className === "closed") {
    x.className = "";
  } else {
    x.className = "closed";
  }
}