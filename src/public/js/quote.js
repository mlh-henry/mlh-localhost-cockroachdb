// Once the page has loaded, execute this script
$(document).ready(function() {
  // This function updates the contents of an HTML tag with a quote.
  function updateQuote(data) {
    // Select the HTML tag with the ID "quote"
    var $quote = $("#quote");

    // Replace #quote's text with the new quote
    $quote.text(data.quote + '\n\n – ' + data.characters);
  }

  // Run the following function every 5 seconds
  setInterval(function() {
    // Fetch a new Quote and pass it to updateQuote
    $.get('/quote').done(updateQuote);
  }, 5000);
});
