$(function() {

  $('.js-check-all').on('click', function() {

  	if ( $(this).prop('checked') ) {
	  	$('th input[type="checkbox"]').each(function() {
	  		$(this).prop('checked', true);
        $(this).closest('tr').addClass('active');
	  	})
  	} else {
  		$('th input[type="checkbox"]').each(function() {
	  		$(this).prop('checked', false);
        $(this).closest('tr').removeClass('active');
	  	})
  	}

  });

  $('th[scope="row"] input[type="checkbox"]').on('click', function() {
    if ( $(this).closest('tr').hasClass('active') ) {
      $(this).closest('tr').removeClass('active');
    } else {
      $(this).closest('tr').addClass('active');
    }
  });

    

});



(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar-right').toggleClass('active');
  });

})(jQuery);



// Add active class to the current Sidebar Nav-item (highlight it)
var sidebar = document.getElementById("sidebarItems");
const listElement = sidebar.getElementsByClassName("nav-item");
for (var i = 0; i < listElement.length; i++) {
  listElement[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// var formButton = document.getElementById("formButton")
// var Buttons = formButton.getElementsByClassName("openerBtn");
// for (var i = 0; i < Buttons.length; i++) {
//     if(Buttons.)



//   Buttons[i].addEventListener("click", function() {
//     var currentBtn = document.getElementsByClassName("activeRow");
//     currentBtn[0].className = currentBtn[0].className.replace("activeRow","d-none");
//     this.className += "activeRow";
//     var hideRow = document.getElementsByClassName("hideRow");
//     hideRow[0].className = hideRow[0].className.replace("d-none", "");
   
     
//   });
// }




 
