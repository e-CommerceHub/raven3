(function () {
  "use strict";
  var currentYear = new Date().getFullYear();
  document.getElementById("copyright").innerHTML =
    currentYear +
    " © Copyright <strong><span>Agencia raven3</span></strong>. Todos los derechos reservados. Argentina, Buenos Aires.";

  const backButton = document.getElementById("backearth");
  backButton.addEventListener("click", () => {
    window.location.href = "https://raven3.com.ar";
  });
})();
