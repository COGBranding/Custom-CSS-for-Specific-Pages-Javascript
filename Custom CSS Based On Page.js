//custom CSS for specific pages
$(document).ready(function(){  
    if ( window.location.pathname == '/' ) {
      return
    } else {
        $("#header").css({"background-color": "#000", "color": "#fff"})
    }
  });
  