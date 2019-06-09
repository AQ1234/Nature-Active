

function myFunction2() {
    var x = document.getElementById("js--main-nav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}
