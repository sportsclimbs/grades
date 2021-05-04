

/* Open the sidenav */
function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
/* Close/hide the sidenav */
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

// To animate the hamburger

function hamburger(x) {
        x.classList.toggle("change");
    }