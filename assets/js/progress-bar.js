document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = `${scrollPercentage}%`;
  });