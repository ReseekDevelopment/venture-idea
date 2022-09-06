// Faqs arrow

var item1 = document.getElementById("scroll-1");

var scrollItem= $('.faqs-wrapper.faqs-wrapp').width();

$(document).ready(function() {

    var resizeTimer;
    $(window).resize(function() {

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {

        scrollItem = $('.faqs-wrapper.faqs-wrapp').width();

      }, 200);

    });
  }); 
$('#right-button-1').on('click', function() {
     item1.scrollLeft += scrollItem;
});

$('#left-button-1').on('click',function() {
      item1.scrollLeft -= scrollItem;
});

// cases arrow

var item2 = document.getElementById("scroll-2");
var scrollItem2= $('.faqs-wrapper.cases').width();


$(document).ready(function() {

    var resizeTimer2;
    $(window).resize(function() {

      clearTimeout(resizeTimer2);
      resizeTimer2 = setTimeout(function() {

        scrollItem2 = $('.faqs-wrapper.cases').width();

      }, 200);

    });
  }); 

$('#right-button-2').on('click', function() {
     item2.scrollLeft += scrollItem2;
});

$('#left-button-2').on('click',function() {
      item2.scrollLeft -= scrollItem2;
});


var item3 = document.getElementById("scroll-3");
var scrollItem3= $('.publication-wppr').width();

$(document).ready(function() {

    var resizeTimer3;
    $(window).resize(function() {

      clearTimeout(resizeTimer3);
      resizeTimer3 = setTimeout(function() {

        scrollItem3 = $('.publication-wppr').width();

      }, 200);

    });
  }); 

$('#right-button-3').on('click', function() {
     item3.scrollLeft += scrollItem3;
});

$('#left-button-3').on('click',function() {
      item3.scrollLeft -= scrollItem3;
});