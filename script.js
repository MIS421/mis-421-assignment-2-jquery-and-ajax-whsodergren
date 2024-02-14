var len;
var results = '';
let backgroundImages = ["https://images.unsplash.com/photo-1683009427666-340595e57e43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"];
console.log(backgroundImages);

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "4cfb30d5ced240b1b1f9b8b14f682b95");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function searchFunction() {
    apiSearch();
}

function changeBackground() {
    let randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = "url('" + backgroundImages[randomIndex] + "')";
}

function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    var formattedTime = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes;

    $('#time').text(formattedTime);

    $('#time').dialog();
}