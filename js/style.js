var total;
<<<<<<< HEAD
$('.field').change(function() {
}).trigger('change');

=======

$('.field').change(function() {

}).trigger('change');

>>>>>>> b13861edb2552d8bc98d08bf0f4c99418c652331
$('.add').click(function() {
  var target = $('.field', this.parentNode)[0];
  target.value = +target.value + 1;
});

$('.sub').click(function() {
  var target = $('.field', this.parentNode)[0];
  if (target.value > 0) {
    target.value = +target.value - 1;
  }
<<<<<<< HEAD
});
=======
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
>>>>>>> b13861edb2552d8bc98d08bf0f4c99418c652331
