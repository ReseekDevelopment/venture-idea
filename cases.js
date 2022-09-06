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