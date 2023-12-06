$(document).ready(function () {
    $(".restart_1_2").click(function (event) {
      event.preventDefault();
      $(".result_1_2").html("노래 찾는 중....😎");
      $(".result_1_2_youtube").html("");
      $.ajax({
        type: "POST",
        url: "/restart_1_2",
        success: function (data) {
          $(".result_1_2").html(data[0]);
          const youtube_i = $('<i class="fa-brands fa-youtube"></i>');
          $(".result_1_2_youtube").append(youtube_i);
          $(".result_1_2_youtube").attr("href", data[1]);
        },
        error: function () {
          alert("Error submitting form.");
        },
      });
    });
  });