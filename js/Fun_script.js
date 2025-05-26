
$(document).ready(function () {
  $("#toggleTextBtn").click(function () {
    $("#quoteBox").slideToggle("slow", function () {
      if ($(this).is(":visible")) {
        $.get("quote.txt", function (data) {
          $("#quoteBox").text(data);
        });
      }
    });
  });

  $("#toggleJokeBtn").click(function () {
    $("#jokeBox").slideToggle("slow", function () {
      if ($(this).is(":visible")) {
        $.get("joke.txt", function (data) {
          $("#jokeBox").text(data);
        });
      }
    });
  });

  $("#toggleImageBtn").click(function () {
    $("#funnyImage").fadeToggle("slow");
  });

  $(document).ready(function() {
  $(".toggle-text-btn").click(function() {
    $(".content-box").slideToggle(600);  // Smooth slideToggle animation for 600ms
  });
});

});
