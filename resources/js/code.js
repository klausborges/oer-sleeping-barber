$(document).ready(function() {
  // Switches code shown in panels
  $('#pill-c').click(function() {
    $('#pill-c').attr('class', 'active');

    $('.code-c').show();
  });
});