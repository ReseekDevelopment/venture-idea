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
