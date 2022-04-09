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