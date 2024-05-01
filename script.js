let dayNight = document.querySelector(".dayNight");

let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

//using the typed js library for the typing animation
let typingEffect = new Typed("#text", {
  strings: ["Prasad", "Developer", "Tech Enthusiast", "Learner"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});
