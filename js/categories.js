/* loading */

$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

/* nav */

$(document).ready(function () {
  $(".sidebar-toggle").click(function () {
    $(".nav-container").toggleClass("open-sidebar");
  });

  $(".slidebar ul li a").click(function (e) {
    // e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset()?.top(),
      },
      1000
    );
  });
});


//*     categories     *//


document.addEventListener('DOMContentLoaded', () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
          console.log(data.categories);
          const categoriesDiv = document.getElementById("categoriesss");
          console.log(categoriesDiv)
          let posts = data.categories;
          for (let post of posts) {
          if (!categoriesDiv) {
              console.error('Element with id "categories" not found');
              return;
          }


              const categoryDiv = document.createElement("div");
              categoryDiv.className = "meals col-lg-4 col-md-6 col-sm-12 mt-4 position-relative";

              const categoryInfo = `
                  <div class="overly">
                      <h3 class="head text-white">${post.strCategory}</h3>
                  </div>
                  <img src="${post.strCategoryThumb}" alt="${post.strCategory}" />
              `;

              categoryDiv.innerHTML += categoryInfo;
              categoriesDiv.appendChild(categoryDiv);
            }
      })
      .catch((error) => console.error("Error fetching categories:", error));
});












