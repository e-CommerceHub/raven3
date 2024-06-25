const posts = [
    {
      title: "Los Secretos para una Tienda en Línea Exitosa",
      image: "../assets/img/blog/1.jpg",
      href:"blog-details.html"
    },
    {
      title: "Qué son las palabras clave y cómo usarlas en tu tienda online",
      image: "../assets/img/blog/2.jpg",
      href:"blog-details.html"
    },
    {
      title: "¿Cómo hacer publicidad en redes sociales? 10 claves para maximizar tus resultados",
      image: "../assets/img/blog/3.jpg",
      href:"blog-details.html"
    }
  ];

  const posts2 = [
    {
      title: "Los Secretos para una Tienda en Línea Exitosa",
      image: "../assets/img/blog/4.jpg",
      href:"blog-details.html"
    },
    {
      title: "Como Promocionar tu empresa en las fiestas",
      image: "../assets/img/blog/como-promocionar-tu-empresa-en-las-fiestas.jpg",
      href:"como-promocionar-tu-empresa-en-las-fiestas.html"
    },
    {
      title: "¿E-Commerce: ¿Cómo crear una tienda online?",
      image: "../assets/img/blog/e-commerce-como-crear-una-tienda-online-en-2020.jpg",
      href:"como-crear-una-tienda-online.html"
    }
  ];

  const blogPostsContainer = document.getElementById("blog-posts");
  if(blogPostsContainer){
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "col-lg-4 col-md-4 mx-1";
      postElement.id="PostCard";
      postElement.innerHTML = `
      <div class="single-blog mx-3">
        <div class="single-blog-img p-3">
          <a href="${post.href}"><img src="${post.image}" alt="" /></a>
        </div>
        <div class="blog-text">
          <h1 style="font-size: 18px;"><a href="${post.href}">${post.title}</a></h1>
        </div>
        <span>
          <a href="${post.href}" class="ready-btn">Leer más...</a>
        </span>
      </div>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }

  const blogPostsContainer2 = document.getElementById("blog-posts2");
  if(blogPostsContainer2){
    posts2.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "col-lg-4 col-md-4 mx-1";
      postElement.id="PostCard";
      postElement.innerHTML = `
      <div class="single-blog mx-3">
        <div class="single-blog-img p-3">
          <a href="${post.href}"><img src="${post.image}" alt="" /></a>
        </div>
        <div class="blog-text">
          <h1 style="font-size: 18px;"><a href="${post.href}">${post.title}</a></h1>
        </div>
        <span>
          <a href="${post.href}" class="ready-btn">Leer más...</a>
        </span>
      </div>
      `;
      blogPostsContainer2.appendChild(postElement);
    });
  }
  