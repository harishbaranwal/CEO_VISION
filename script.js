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



// JavaScript For Loading More Contents



      document
  .getElementById("loadMoreBtn")
  .addEventListener("click", function () {
    var hiddenBoxes = document.querySelectorAll(".grid-1-box.hidden");
    var numToShow = 3;
    for (var i = 0; i < numToShow; i++) {
      if (hiddenBoxes[i]) {
        hiddenBoxes[i].classList.remove("hidden");
      }
    }
    var remainingHiddenBoxes = document.querySelectorAll(".grid-1-box.hidden");
    if (remainingHiddenBoxes.length === 0) {
      document.getElementById("loadMoreBtn").style.display = "none";
    }
  });




// JavaScript For Slide Image With Arrow

      let slideIndex1 = 0;
      let slideIndex2 = 0;

      let sliderIndex1 = 0;
      let sliderIndex2 = 0;

      function showSlide(sliderClass, index) {
        const slides = document.querySelectorAll("." + sliderClass + " img");

        if (index >= slides.length) {
          index = 0;
        } else if (index < 0) {
          index = slides.length - 1;
        }

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        slides[index].style.display = "block";

        if (sliderClass === "slider1") {
          sliderIndex1 = index;
        } else if (sliderClass === "slider2") {
          sliderIndex2 = index;
        } else if (sliderClass === "slide1") {
          slideIndex1 = index;
        } else if (sliderClass === "slide2") {
          slideIndex2 = index;
        }
      }

      function changeSlide(sliderClass, n) {
        if (sliderClass === "slider1") {
          showSlide("slider1", (sliderIndex1 += n));
        } else if (sliderClass === "slider2") {
          showSlide("slider2", (sliderIndex2 += n));
        } else if (sliderClass === "slide1") {
          showSlide("slide1", (slideIndex1 += n));
        } else if (sliderClass === "slide2") {
          showSlide("slide2", (slideIndex2 += n));
        }
      }

      showSlide("slider1", sliderIndex1);
      showSlide("slider2", sliderIndex2);
      showSlide("slide1", slideIndex2);
      showSlide("slide2", slideIndex2);

 
      
// JavaScript For Scroll The Slider Horizontally
const slider = document.querySelector(".image_slider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft; // Starting X-coordinate for the drag
  scrollLeft = slider.scrollLeft; // Current scroll position
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // Only run the following code if the mouse is down
  e.preventDefault(); // Prevent any default behavior
  const x = e.pageX - slider.offsetLeft; // Current X-coordinate for the drag
  const walk = (x - startX); // Distance moved during the drag
  slider.scrollLeft = scrollLeft - walk; // Set the new scroll position based on the distance moved
});