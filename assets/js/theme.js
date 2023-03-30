function theme_set(toggled) {
  document.getElementById("style-dark").disabled = toggled;
  document.getElementById("style-light").disabled = !toggled;
  localStorage.setItem("theme-toggled", toggled ? "" : "1");
}

function theme_toggle() {
  theme_set(!document.getElementById("style-dark").disabled);
}

theme_set(localStorage.getItem("theme-toggled"));
