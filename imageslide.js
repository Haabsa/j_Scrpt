let slideIndex = 0;
showSlide();

function showSlide() {
  let i;
  let slide = document.getElementsByClassName("mySlide");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}
  slide[slideIndex-1].style.display = "block";
  setTimeout(showSlide, 2000);
}

  