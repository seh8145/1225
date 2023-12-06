$(document).ready(function () {
    $(".restart_1_3").click(function (event) {
      event.preventDefault();
      $(".result_1_3").html("인근 관광지 색출 중...🥳");
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          let latitude = position.coords.latitude; // 위도
          let longitude = position.coords.longitude; // 경도
  
          // 위치 정보를 사용하여 Ajax 요청을 수행하고, 위치를 요청에 넣어줍니다.
          $.ajax({
            type: "POST",
            url: "/restart_1_3",
            data: {
              latitude: latitude,
              longitude: longitude,
            },
            success: function (data) {
              $(".result_1_3").html(data);
            },
            error: function () {
              alert("Error submitting form.");
            },
          });
        });
      } else {
        $(".result_1_3").html("위치정보를 불러올 수 없습니다 🤔");
      }
    });
  });