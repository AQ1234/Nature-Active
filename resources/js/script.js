/*Sticky nav */
window.onscroll = () => Sticky();

Sticky = () => {
    var navbar = document.querySelector(".header__navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky && window.pageYOffset> 670) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

 NavBarSticky = () => {
         var x = document.getElementById("js--main-nav");
         var sign = document.getElementById("js--nav-icon");
         if (x.className === "header__main-nav") {
             x.className += " responsive";

             setTimeout(() => {
                 sign.innerHTML = '<ion-icon name="close"></ion-icon>';
             }, 80);

         } else {
             x.className = "header__main-nav";

             setTimeout(() => {
                 sign.innerHTML = '<ion-icon name="menu"></ion-icon>';
             }, 80);
         } 
    }

/* Change content in offers */
window.onresize = function () {
    if (window.innerWidth <= 650) {
        document.getElementById("bushcraft").innerHTML = "<h3>Bushcrafting</h3>";
        document.getElementById("climb").innerHTML = "<h3>Incredible Climbing!</h3>";
        document.getElementById("fire").innerHTML = "<h3> lighting a fire!</h3>";
        document.getElementById("beach").innerHTML = "<h3>Walking on beach!</h3>";
    } else if (window.innerWidth > 650) {
        document.getElementById("bushcraft").innerHTML = "<h3>Bushcrafting</h3>-We will be fining the best forests in your life<br>-You will be having the best adventure <br>-We will survive...and many many more<br>";
        document.getElementById("climb").innerHTML = "<h3>Incredible Climbing!</h3>-We will be climbing in the beautiful mountains<br> -You will be training your muscles every day<br>-You will be stronger and more agility <br>";
        document.getElementById("fire").innerHTML = "<h3> lighting a fire!</h3>-We Light a fire on evening<br>-We are using only real wood<br>-You will find the best pleaces for bonfire<br>";
        document.getElementById("beach").innerHTML = "<h3>Walking on beach!</h3>-We will be walking everyday<br>-You will be walking across the beach from 5 a.m to 7 a.m<br>-You will have to walking not less than 45 minutes<br>";
    }
}

/*animations on scroll*/

  $('.customers-opinion--wp-1').waypoint(function(direction) {
        
        $('.customers-opinion--wp-1').addClass('animated fadeInUp');
    }, {
    
    offset: '50%'        
    });

    $('.section__featuers--header').waypoint(function(direction) {
        
        $('.section__featuers--header').addClass('animated fadeInLeft');
    }, {
    
    offset: '75%'        
    });
