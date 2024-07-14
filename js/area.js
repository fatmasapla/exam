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

//*     area     *//

window.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
  );
  const data = await res.json();
  console.log(data);
  const areaDiv = document.getElementById("area_content");
  console.log(areaDiv);
  let { meals } = data;
  console.log(meals);
  for (let i = 0; i < meals.length; i++) {
    console.log(meals[i]);
    if (!areaDiv) {
      console.error('Element with id "area" not found');
      return;
    }

    const areaaDiv = document.createElement("div");
    areaaDiv.className =
      "meals col-lg-4 col-md-6 col-sm-12 mt-4 position-relative";

    const areaInfo = `
                     <div class="overly">
                         <h3 class="head text-white">${meals[i].strMeal}</h3>
                     </div>
                     <img src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" />
                 `;
    areaaDiv.innerHTML += areaInfo;
    areaDiv.appendChild(areaaDiv);
  }

});
