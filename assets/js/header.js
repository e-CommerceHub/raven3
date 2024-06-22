const header = [
    {
      img_logo: "assets/img/logo.png",
      nav_title_1: "Nosotros",
      nav_title_2: "Servicios Digitales",
      nav_title_3: "Servicios Marketing",
      nav_title_4: "Portfolio",
      service_d_1:"Sitios Web",
      service_d_2:"Tiendas Online",
      service_m_1:"Contenido para Redes",
      btn_contacto: "Contacto"
    },

  ];

  const headerContainer = document.getElementById("header-info");
  header.forEach((header) => {
    const postElement = document.createElement("div");
    postElement.className = "container d-flex align-items-center justify-content-lg-between varela";
    postElement.innerHTML = `
    <a href="index.html" class="logo me-auto me-lg-0"><img src="${header.img_logo}" alt="logo de raven3" class="img-fluid" width="100px" height="40px"></a>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto" href="#features">${header.nav_title_1}</a></li>
            
            <li class="dropdown">
              <a href="#"
                ><span id="service">${header.nav_title_2}</span>
                <i class="bi bi-chevron-down dropdown-indicator"></i
              ></a>
              <ul>
                <li>
                  <a href="sitios-web.html" style="color: black;">${header.service_d_1}</a>
                </li>
                <li>
                  <a href="tienda-online.html" style="color: black;">${header.service_d_2} </a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#"
                ><span id="service">${header.nav_title_3}</span>
                <i class="bi bi-chevron-down dropdown-indicator"></i
              ></a>
              <ul>
                <li>
                  <a href="redes.html" style="color: black;">${header.service_m_1}</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="nav-link scrollto" href="portfolio.html">${header.nav_title_4}</a>
            </li>
           
            <li>
              <a
                href="#projectos"
                class="nav-link scrollto"
                onclick="theme_toggle(); return false;"
                title="Change Theme"
                >&#127763;</a
              >
            </li>
            </ul>
          <i class="bi bi-list mobile-nav-toggle" id="burger" style="font-size: 30px !important;"></i>
        </nav>

        <a href="#contact" class="get-started-btn scrollto">Contacto</a>
    `;
    headerContainer.appendChild(postElement);
  });