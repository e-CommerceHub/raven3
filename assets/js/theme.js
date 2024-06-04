function theme_set(toggled) {
  let styleLight = document.getElementById("style-light");
  let styleDark = document.getElementById("style-dark");
  if (styleLight) {
    styleLight.disabled = toggled;
  }

  if (styleDark) {
    styleDark.disabled = !toggled;
  }
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
