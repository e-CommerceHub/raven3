(function () {
  "use strict";

  // const cursor = document.querySelector('.cursor');
  // const links = document.querySelectorAll('nav ul li a');
  // const links2 = document.querySelectorAll('span');
  // const links3 = document.querySelectorAll('a');
  // const links4 = document.querySelectorAll('button');
  // const links5 = document.querySelectorAll('ul li');
  // const links6 = document.querySelectorAll('h4');
  // const links7 = document.querySelectorAll('i');

  // document.addEventListener('mousemove', (e) => {
  //   let leftPosition = e.clientX + 4;
  //   let topPosition = e.clientY + 4;
  //   cursor.style.left = leftPosition + 'px';
  //   cursor.style.top = topPosition + 'px';
  // });

  // links.forEach((link) => {
  //   link.addEventListener('mouseenter', () => {
  //     cursor.classList.add('large');
  //   });
  // });
  // links.forEach((link) => {
  //   link.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('large');
  //   });
  // });
  // links2.forEach((link) => {
  //   link.addEventListener('mouseenter', () => {
  //     cursor.classList.add('large');
  //   });
  // });
  // links2.forEach((link) => {
  //   link.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('large');
  //   });
  // });
  // links3.forEach((link) => {
  //   link.addEventListener('mouseenter', () => {
  //     cursor.classList.add('large');
  //   });
  // });
  // links3.forEach((link) => {
  //   link.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('large');
  //   });
  // });
  // links4.forEach((link) => {
  //   link.addEventListener('mouseenter', () => {
  //     cursor.classList.add('large');
  //   });
  // });
  // links4.forEach((link) => {
  //   link.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('large');
  //   });
  // });
  // links5.forEach((link) => {
  //   link.addEventListener('mouseenter', () => {
  //     cursor.classList.add('large');
  //   });
  // });
  // links5.forEach((link) => {
  //   link.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('large');
  //   });
  // });
  // links6.forEach((link) => {
  //   link.addEventListener('mouseenter', () => {
  //     cursor.classList.add('large');
  //   });
  // });
  // links6.forEach((link) => {
  //   link.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('large');
  //   });
  // });
  // links7.forEach((link) => {
  //   link.addEventListener('mouseenter', () => {
  //     cursor.classList.add('large');
  //   });
  // });
  // links7.forEach((link) => {
  //   link.addEventListener('mouseleave', () => {
  //     cursor.classList.remove('large');
  //   });
  // });

  var currentYear = new Date().getFullYear();
  document.getElementById("copyright").innerHTML =
    currentYear +
    " © Copyright <strong><span>Agencia raven3</span></strong>. Todos los derechos reservados. Argentina, Buenos Aires.";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  //

  // function to remove scroll Y when clicking the burguer
  // on('click', '.bi-list', function (e) {
  //   let burger = select('#burger');
  //   if(burger.classList.contains('bi-list')){
  //     document.body.style.overflowY = 'hidden';
  //   }else{
  //     document.body.style.overflowY = 'visible';
  //   }
  // });
  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
    let burger = select("#burger");
    if (burger.classList.contains("bi-list")) {
      document.body.style.overflowY = "visible";
    } else {
      document.body.style.overflowY = "hidden";
    }
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Mute Button & AUDIO PLAYER
   */
  // const audioPlayer = document.getElementById("audio-player");
  // const muteButton = document.getElementById("mute-button");

  // Function to toggle mute/unmute
  // function toggleMute() {
  //   if (audioPlayer.muted) {
  //     audioPlayer.muted = false;
  //     muteButton.textContent = "🔊"; // Speaker icon
  //   } else {
  //     audioPlayer.muted = true;
  //     muteButton.textContent = "🔇"; // Muted speaker icon
  //   }
  // }

  // Event listener for mute button click
  // muteButton.addEventListener("click", toggleMute);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  //

  var form = document.getElementById("my-form");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);

    form.querySelector(".loading").classList.add("d-block");
    form.querySelector(".error-message").classList.remove("d-block");
    form.querySelector(".sent-message").classList.remove("d-block");

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        form.querySelector(".loading").classList.remove("d-block");
        if (response.ok) {
          form.querySelector(".sent-message").classList.add("d-block");
          form.reset();
        } else {
          displayError(form, "Oops! There was a problem in your form");
        }
      })
      .catch((error) => {
        displayError(form, error);
      });
  }

  if (typeof form != "undefined") {
    form.addEventListener("submit", handleSubmit);
  }

  function displayError(thisForm, error) {
    thisForm.querySelector(".loading").classList.remove("d-block");
    thisForm.querySelector(".error-message").innerHTML = error;
    thisForm.querySelector(".error-message").classList.add("d-block");
  }
})();
