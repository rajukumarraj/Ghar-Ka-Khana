function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-navbar") {
        x.className += " responsive";
    } else {
        x.className = "top-navbar";
    }
}