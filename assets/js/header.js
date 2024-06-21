const header = [
    {
      title: "Los Secretos para una Tienda en Línea Exitosa",
      content: "En este post, exploraremos las claves para crear una tienda en línea exitosa que atraiga a tus clientes ideales y aumente tus ventas. Si estás pensando en lanzar una tienda virtual, sigue leyendo.",
      subtitle:"Los Secretos para una Tienda en Línea Exitosa",
      image: "../assets/img/blog/1.jpg",
      date: "06 - Junio - 2024"
    },

  ];

  const headerContainer = document.getElementById("header-info");
  header.forEach((header) => {
    const postElement = document.createElement("div");
    postElement.className = "container d-flex align-items-center justify-content-lg-between varela";
    postElement.innerHTML = `
    <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="logo de raven3" class="img-fluid" width="100px" height="40px"></a>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto" href="#features">Nosotros</a></li>
            
            <li class="dropdown">
              <a href="#"
                ><span id="service">Servicios Digitales</span>
                <i class="bi bi-chevron-down dropdown-indicator"></i
              ></a>
              <ul>
                <li>
                 
                  <a href="sitios-web.html" style="color: black;">Sitios Web</a>
                </li>
                <li>
                  <a href="tienda-online.html" style="color: black;">Tiendas Online </a>
                </li>
       
            
              </ul>
            </li>
            <li class="dropdown">
              <a href="#"
                ><span id="service">Servicios Marketing</span>
                <i class="bi bi-chevron-down dropdown-indicator"></i
              ></a>
              <ul>
                <li>
                  <a href="redes.html" style="color: black;">Redes</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="nav-link scrollto" href="portfolio.html">Portfolio</a>
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