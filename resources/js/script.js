
<<<<<<< Updated upstream
=======
/*Sticky nav */
window.onscroll = function() {myFunction()};


function myFunction() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    console.log(sticky);

    if (window.pageYOffset > sticky && window.pageYOffset> 670) {
        navbar.classList.add("sticky")
        console.log(sticky);
    } else {
        navbar.classList.remove("sticky");
    }
}

>>>>>>> Stashed changes

function myFunction2() {
    var x = document.getElementById("js--main-nav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}
<<<<<<< Updated upstream
=======


/*Scroll on buttons*/

>>>>>>> Stashed changes
