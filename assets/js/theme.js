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
  let styleLight = document.getElementById("style-light");

  if (styleLight) {
    theme_set(!styleLight.disabled);
  }
}

theme_set(localStorage.getItem("theme-toggled") === "1");

let preloader = document.getElementById("preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
