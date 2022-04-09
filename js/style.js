var total;

$('.field').change(function() {

}).trigger('change');

$('.add').click(function() {
  var target = $('.field', this.parentNode)[0];
  target.value = +target.value + 1;
});

$('.sub').click(function() {
  var target = $('.field', this.parentNode)[0];
  if (target.value > 0) {
    target.value = +target.value - 1;
  }
});

$('.owl-carousel').owlCarousel({
  loop:true,
  autoHeight:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
          loop:false
      }
  }
})
