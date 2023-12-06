$(document).ready(function () {
    $(".restart_1_1").click(function (event) {
      event.preventDefault();
      $(".result_1_1").html("오늘 할만한 거 찾는 중...🤔");
      $.ajax({
        type: "POST",
        url: "/restart_1_1",
        success: function (data) {
          $(".result_1_1").html(data);
        },
        error: function () {
          alert("Error submitting form.");
        },
      });
    });
  });