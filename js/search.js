

//*       Loading       *//

$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});


    //*     sidebar     *//

$(document).ready(function () {
  $(".sidebar-toggle").click(function () {
    $(".nav-container").toggleClass("open-sidebar");
  });

  $(".slidebar ul li a").click(function (e) {
    // e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });
})

           //*             Search          *//


/* Name */

const foodsDiv = document.getElementById("food-items");
const formName = document.querySelector("form.name");

formName.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target.name.value);

  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.name.value}`
  );
  let data = await res.json();
  const { meals } = data;
  console.log(data);

  while (foodsDiv.firstChild) {
    foodsDiv.removeChild(foodsDiv.firstChild);
  }

  if (meals) {
    for (let i = 0; i < meals.length; i++) {
      console.log(meals[i]);

      const mealDiv = document.createElement("div");
      mealDiv.className = "meals col-lg-4 col-md-6 col-sm-12 mt-4 position-relative2";

      const overlay = document.createElement("div");
      overlay.className = "overly";

      const heading = document.createElement("h3");
      heading.className = "head text-white";
      heading.textContent = meals[i].strMeal;

      overlay.appendChild(heading);

      const img = document.createElement("img");
      img.src = meals[i].strMealThumb;
      img.alt = meals[i].strMeal;

      mealDiv.appendChild(overlay);
      mealDiv.appendChild(img);

      foodsDiv.appendChild(mealDiv);
    }
  } else {
    const noResults = document.createElement("p");
    noResults.textContent = "";
    foodsDiv.appendChild(noResults);
  }
});

/* letter */

const foodsletter = document.getElementById("food-items");
const formletter = document.querySelector("form.letter");

formletter.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target.letter.value);

  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.letter.value}`
  );
  let data = await res.json();
  const { meals } = data;
  console.log(data);

  while (foodsletter.firstChild) {
    foodsletter.removeChild(foodsletter.firstChild);
  }

  if (meals) {
    for (let i = 0; i < meals.length; i++) {
      console.log(meals[i]);

      const mealDiv = document.createElement("div");
      mealDiv.className = "meal-item col-lg-12";

      const overlay = document.createElement("div");
      overlay.className = "overlay";

      const heading = document.createElement("h3");
      heading.className = "head text-white";
      heading.textContent = meals[i].strMeal;

      overlay.appendChild(heading);

      const img = document.createElement("img");
      img.src = meals[i].strMealThumb;
      img.alt = meals[i].strMeal;

      mealDiv.appendChild(overlay);
      mealDiv.appendChild(img);

      foodsletter.appendChild(mealDiv);
    }
  } else {
    const noResults = document.createElement("p");
    noResults.textContent = "";
    foodsletter.appendChild(noResults);
  }
});


