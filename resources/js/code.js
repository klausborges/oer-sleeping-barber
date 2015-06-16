$(document).ready(function() {
  $('#pill-c').click(function() {
    $('#pill-c').attr('class', 'active');
    $('#pill-go').attr('class', '');
    $('#pill-python').attr('class', '');

    $('.code-go,.code-python').hide();
    $('.code-c').show();
  });
  $('#pill-go').click(function() {
    $('#pill-c').attr('class', '');
    $('#pill-go').attr('class', 'active');
    $('#pill-python').attr('class', '');

    $('.code-c,.code-python').hide();
    $('.code-go').show();
  });
  $('#pill-python').click(function() {
    $('#pill-c').attr('class', '');
    $('#pill-go').attr('class', '');
    $('#pill-python').attr('class', 'active');

    $('.code-c,.code-go').hide();
    $('.code-python').show();
  });
});