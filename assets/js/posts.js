const posts = [
    {
      title: "Los Secretos para una Tienda en Línea Exitosa",
      content: "En este post, exploraremos las claves para crear una tienda en línea exitosa que atraiga a tus clientes ideales y aumente tus ventas. Si estás pensando en lanzar una tienda virtual, sigue leyendo.",
      subtitle:"Los Secretos para una Tienda en Línea Exitosa",
      image: "assets/img/blog/1.jpg",
      date: "2016-03-05",
      href:"blog-details.html"
    },
    {
      title: "Qué son las palabras clave y cómo usarlas en tu tienda online",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      subtitle:"post title 2 little longer",
      image: "assets/img/blog/2.jpg",
      date: "2016-03-05",
      href:"blog-details.html"
    },
    {
      title: "¿Cómo hacer publicidad en redes sociales? 10 claves para maximizar tus resultados",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      subtitle:"post title 2 little longer",
      image: "assets/img/blog/3.jpg",
      date: "2016-03-05",
      href:"blog-details.html"
    },

  ];

  const blogPostsContainer = document.getElementById("blog-posts");
  if(blogPostsContainer){
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "col-lg-4 col-md-4 col-xs-12";
      postElement.innerHTML = `
      <div class="single-blog mx-3">
        <div class="single-blog-img">
          <a href="blog-details.html"><img src="${post.image}" alt="" /></a>
        </div>
        <div class="blog-meta">
          <span class="date-type"><i class="bi bi-calendar"></i>${post.date}</span>
        </div>
        <div class="blog-text">
          <h1 style="font-size: 18px;"><a href="#">${post.title}</a></h1>
        </div>
        <span><a href="${post.href}" class="ready-btn">Read more</a></span>
      </div>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
  

  const lefPostContainer = document.getElementById("left-blog-posts");
  if(lefPostContainer){
    posts.forEach((post) => {
      const postElement2 = document.createElement("div");
      postElement2.className = "recent-single-post";
      postElement2.innerHTML = `
          <div class="post-img">
            <a href="#">
              <img src="${post.image}" alt="" />
            </a>
          </div>
          <div class="pst-content">
            <p>
              <a href="#">
                ${post.subtitle}</a
              >
            </p>
          </div>
      `;
      lefPostContainer.appendChild(postElement2);
    });
  }
  