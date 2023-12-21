document.getElementById("playButton").addEventListener("click", function() {
  // Play the audio
  var audio = document.getElementById("myAudio");
  audio.play();
  let slideIndex = 0;

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Adjust the delay time for each slide
    let delayTime;
    switch (slideIndex) {
      case 1:
        delayTime = 500; // 2 seconds for the first slide
        break;
      case 2:
        delayTime = 4500; // 4 seconds for the second slide
        break;
      case 3:
        delayTime = 12000; // 6 seconds for the third slide
        break;
      case 4:
        delayTime = 1400; // 6 seconds for the third slide
        break;
      case 5:
        delayTime = 6200; // 6 seconds for the third slide
        break;
      case 6:
        delayTime = 3800; // 6 seconds for the third slide
        break;
      case 7:
        delayTime = 3600; // 6 seconds for the third slide
        break;
      case 8:
        delayTime = 3800; // 6 seconds for the third slide
        break;
      case 9:
        delayTime = 3800; // 6 seconds for the third slide
        break;
      case 10:
        delayTime = 3800; // 6 seconds for the third slide
        break;
      case 11:
        delayTime = 3800; // 6 seconds for the third slide
        break;
      case 12:
        delayTime = 3800; // 6 seconds for the third slide
        break;
      default:
        delayTime = 3800; // Default to 2 seconds
    }

    setTimeout(showSlides, delayTime);
  }

  // Start the slideshow
  showSlides();
  var mac = document.getElementById("mac");
  mac.style.display = "none";
  var steph = document.getElementById("steph");
  steph.style.display = "block";
  var but = document.getElementById("playButton");
  but.style.display = "none";

  // Run your JavaScript function or code here
  // For example, you can add a console log statement
  console.log("Button clicked!");
});
