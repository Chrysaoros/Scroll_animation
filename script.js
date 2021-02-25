const divBoxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  // calculate bottom trigger point for the number of divs on page at once
  const triggerBottom = (window.innerHeight / 5) * 4;

  divBoxes.forEach((box) => {
    // element method, gets drawn element rectangle and its relative position in the window (from top -> top border)
    const boxTop = box.getBoundingClientRect().top;

    // if boxTop in px is less than the trigger point, show the div on screen
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

checkBoxes();
