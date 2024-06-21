const posts = [
    {
      title: "Los Secretos para una Tienda en Línea Exitosa",
      content: "En este post, exploraremos las claves para crear una tienda en línea exitosa que atraiga a tus clientes ideales y aumente tus ventas. Si estás pensando en lanzar una tienda virtual, sigue leyendo.",
      subtitle:"Los Secretos para una Tienda en Línea Exitosa",
      image: "../assets/img/blog/1.jpg",
      date: "06 - Junio - 2024"
    },
    {
      title: "Post Title 2",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      subtitle:"post title 2 little longer",
      image: "../assets/img/blog/2.jpg",
      date: "2016-03-05"
    },

  ];

  const blogPostsContainer = document.getElementById("blog-posts");
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "col-md-12 col-sm-12 col-xs-12";
    postElement.innerHTML = `
      <div class="single-blog">
                <div class="single-blog-img">
                  <a href="blog-details.html">
                    <img src="${post.image}" alt="" />
                  </a>
                </div>
                <div class="blog-meta">
                
                  <span class="date-type">
                    <i class="bi bi-calendar"></i>${post.date}
                  </span>
                </div>
                <div class="blog-text">
                  <h4>
                    <a href="#">${post.title}</a>
                  </h4>
                  <p>
                  ${post.content}
                  </p>
                </div>
                <span>
                  <a href="blog-details.html" class="ready-btn"
                    >Read more</a
                  >
                </span>
              </div>
    `;
    blogPostsContainer.appendChild(postElement);
  });

  const lefPostContainer = document.getElementById("left-blog-posts");
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