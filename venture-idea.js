
<script>
const animationDuration = 3000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);

  const counter = setInterval(() => {
    frame++;

    const progress = easeOutQuad(frame / totalFrames);

    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const countupEls = document.querySelectorAll(".timer");


 $('#timer-wrapper').one('inview', function(event, isInView) {
  if (isInView) {
		countupEls.forEach(animateCountUp);
 }
});

</script>

<script>
	var item = document.getElementById("publication-wrapper");
  var interval = 150;

   $('#scroll-up').on('click', function() {
   item.scrollTop = item.scrollTop - interval
   });
   

	 $('#scroll-down').on('click',function() {
	 item.scrollTop = item.scrollTop + interval
   });
   
 </script>

<script>
//Cases
//on load case 1

	$('.cont-faq.img-case').eq(0).addClass('open-case');
	$('.faqs-item.case-item.first-case').eq(0).addClass('current');
  $('.arrow-case-ico').eq(0).addClass('open');
 	$('.faqs-item.case-item.first-case').eq(1).addClass('not-current');
  $('.faqs-item.case-item.first-case').eq(2).addClass('not-current');
  

// add  class on click
	$('.faqs-item.case-item.first-case').on('click', function() {
  
   if(!$(this).hasClass('current')){
  $('.arrow-case-ico').removeClass('open');
  $('.faqs-item.case-item.first-case').removeClass('current');
  $('.cont-faq.img-case').removeClass('open-case');
  let indexItem = $(this).index();
   $('.arrow-case-ico').eq(indexItem).addClass('open');
  $('.faqs-item.case-item.first-case').addClass('not-current');
  $('.cont-faq.img-case').eq(indexItem).addClass('open-case');
  $('.faqs-item.case-item.first-case').eq(indexItem).addClass('current');
  } else {
  $('.faqs-item.case-item.first-case').removeClass('current');
  $('.cont-faq.img-case').removeClass('open-case');
 	$('.faqs-item.case-item.first-case').removeClass('not-current');
  $('.arrow-case-ico').removeClass('open');
  }
  
});
// case 2
//on load case 2
	$('.cont-faq-2.img-case').eq(0).addClass('open-case');
	$('.faqs-item.case-item.second-case').eq(0).addClass('current');
  $('.arrow-case-ico-2').eq(0).addClass('open');
 	$('.faqs-item.case-item.second-case').eq(1).addClass('not-current');
  $('.faqs-item.case-item.second-case').eq(2).addClass('not-current');
  

	$('.faqs-item.case-item.second-case').on('click', function() {
  
  if(!$(this).hasClass('current')){
  $('.arrow-case-ico-2').removeClass('open');
  $('.faqs-item.case-item.second-case').removeClass('current');
  $('.cont-faq-2.img-case').removeClass('open-case');
  let indexItemCase = $(this).index();
  $('.arrow-case-ico-2').eq(indexItemCase).addClass('open');
  $('.faqs-item.case-item.second-case').addClass('not-current');
  $('.cont-faq-2.img-case').eq(indexItemCase).addClass('open-case');
  $('.faqs-item.case-item.second-case').eq(indexItemCase).addClass('current');
   } else {
  $('.faqs-item.case-item.second-case').removeClass('current');
  $('.cont-faq-2.img-case').removeClass('open-case');
  $('.faqs-item.case-item.second-case').removeClass('not-current');
  $('.arrow-case-ico-2').removeClass('open');
  }
  
});


</script>

<script>
//Faqs

 $('.faqs-item.first').on('click', function() {
 
 if(!$(this).hasClass('current-item')){
 
  $('.isolate-block.faqs-isolate.new-height').removeClass('open-faq');
  $('.question-cnt').removeClass('open');
  $('.faqs-item.first').addClass('not-current');
  $('.faqs-item.first').removeClass('current-item');
  $('.arrow-faqs-ico').removeClass('open');
  let indexItem2 = $(this).index();
  $('.faqs-item.first').eq(indexItem2).removeClass('not-current');
  $('.faqs-item.first').eq(indexItem2).addClass('current-item');
  $('.arrow-faqs-ico').eq(indexItem2).addClass('open');
  $('.isolate-block.faqs-isolate.new-height').eq(indexItem2).addClass('open-faq');
  $('.question-cnt').eq(indexItem2).addClass('open');

} else {
	$('.isolate-block.faqs-isolate.new-height').removeClass('open-faq');
  $('.question-cnt').removeClass('open');
   $('.faqs-item.first').removeClass('not-current');
  $('.faqs-item.first').removeClass('current-item');
  $('.arrow-faqs-ico').removeClass('open');
}
 /*else {
$('.faqs-item.faq').removeClass('current-faq');
 $('.isolate-block.faqs-isolate.new-height').removeClass('open-faq’);
  $('.question-cnt').removeClass('open');
}

*/
});


$('.faqs-item.second').on('click', function() {

	 if(!$(this).hasClass('current-item')){
   
  $('.isolate-block-2.faqs-isolate.new-height').removeClass('open-faq');
  $('.question-cnt-2').removeClass('open');
  $('.faqs-item.second').addClass('not-current');
  $('.faqs-item.second').removeClass('current-item');
  $('.arrow-faqs-ico-2').removeClass('open');
  let indexItem3 = $(this).index();
  $('.faqs-item.second').eq(indexItem3).removeClass('not-current');
  $('.faqs-item.second').eq(indexItem3).addClass('current-item');
  $('.isolate-block-2.faqs-isolate.new-height').eq(indexItem3).addClass('open-faq');
  $('.question-cnt-2').eq(indexItem3).addClass('open');
  $('.arrow-faqs-ico-2').eq(indexItem3).addClass('open');
  
} else {
	$('.isolate-block-2.faqs-isolate.new-height').removeClass('open-faq');
  $('.question-cnt-2').removeClass('open');
   $('.faqs-item.second').removeClass('not-current');
  $('.faqs-item.second').removeClass('current-item');
  $('.arrow-faqs-ico-2').removeClass('open');
}

});

$('.faqs-item.third').on('click', function() {
	 if(!$(this).hasClass('current-item')){
    $('.arrow-faqs-ico-3').removeClass('open');
  $('.isolate-block-3.faqs-isolate.new-height').removeClass('open-faq');
  $('.question-cnt-3').removeClass('open');
  $('.faqs-item.third').addClass('not-current');
  $('.faqs-item.third').removeClass('current-item');
  let indexItem4 = $(this).index();
  $('.faqs-item.third').eq(indexItem4).removeClass('not-current');
  $('.faqs-item.third').eq(indexItem4).addClass('current-item');
  $('.isolate-block-3.faqs-isolate.new-height').eq(indexItem4).addClass('open-faq');
  $('.question-cnt-3').eq(indexItem4).addClass('open');
  $('.arrow-faqs-ico-3').eq(indexItem4).addClass('open');
  
 } else {
	$('.isolate-block-3.faqs-isolate.new-height').removeClass('open-faq');
  $('.question-cnt-3').removeClass('open');
   $('.faqs-item.third').removeClass('not-current');
  $('.faqs-item.third').removeClass('current-item');
   $('.arrow-faqs-ico-3').removeClass('open');
}

});

</script>

<script>
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
</script>

<script>

var elm = document.getElementById('video-bg');
var elm1 = document.getElementById('video-bg-1');

var vid = elm.getElementsByTagName('video');
var vid1 = elm1.getElementsByTagName('video');

$('.mfp-bg.mfp-ready').on('click', function() {
var i; for (i = 0; i < vid.length; i++) { vid[i].play(); }
var i; for (i = 0; i < vid1.length; i++) { vid1[i].play(); }
});

</script>
 