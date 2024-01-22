// JavaScript For Hamburger

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  

// JavaScript For Advertisement Image Slider

  var slideshows = document.querySelectorAll(".images");

  slideshows.forEach(function (slideshow) {
    var indexValue = 0;

    function slideShow() {
      var img = slideshow.querySelectorAll("img");
      for (var x = 0; x < img.length; x++) {
        img[x].style.display = "none";
      }
      indexValue++;
      if (indexValue > img.length) {
        indexValue = 1;
      }
      img[indexValue - 1].style.display = "block";
    }

    setInterval(slideShow, 2500);
  });