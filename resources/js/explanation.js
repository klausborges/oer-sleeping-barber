$(document).ready(function() {
  var translation = {
      pt: {
        header: "Explicação"
      },
      en: {
        header: "Explanation"
      }
  };

  $('h1').text(translation['en']['header']);
});