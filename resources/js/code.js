$(document).ready(function() {
  // Switches code shown in panels
  $('#pill-c').click(function() {
    $('#pill-c').attr('class', 'active');
    $('#pill-go').attr('class', '');

    $('.code-go').hide();
    $('.code-c').show();
  });
  $('#pill-go').click(function() {
    $('#pill-c').attr('class', '');
    $('#pill-go').attr('class', 'active');

    $('.code-c').hide();
    $('.code-go').show();
  });
});