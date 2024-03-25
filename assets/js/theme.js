function theme_set(toggled) {
  document.getElementById("style-light").disabled = toggled;
  document.getElementById("style-dark").disabled = !toggled;
  localStorage.setItem("theme-toggled", toggled ? "1" : "");
}

function theme_toggle() {
  theme_set(!document.getElementById("style-light").disabled);
}

theme_set(localStorage.getItem("theme-toggled"));

let preloader = document.getElementById("preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

var currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = "© "+ currentYear + " - www.raven3.com.ar";
