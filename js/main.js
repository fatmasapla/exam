

/* loading */

$(function(){
    $('.loader').fadeOut(1000, function(){
        $('.loading').slideUp(1000, function(){
            $('body').css('overflow', 'auto');
            $('.loading').remove();
        });
    });
});



/* /* nav */

$(document).ready(function() {
    $(".sidebar-toggle").click(function() {
        $(".nav-container").toggleClass("open-sidebar");
    });

    $(".slidebar ul li a").click(function(e) {
        // e.preventDefault();
        // 
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
}); 



document.addEventListener('DOMContentLoaded',async () => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(res => res.json())
        .then(data => {
            console.log(data.meals); 
            displayFoods(data.meals);
        });
});

const displayFoods = (foods) => {
    const foodsDiv = document.getElementById("food-items");
    foods.forEach((meal, idx) =>  {
        if (idx > 20){
            return;
        }
        const foodDiv = document.createElement('div');
        foodDiv.className = 'meals col-md-3 ';
        
        const foodInfo = `
        <h3 class="hidden">${meal.strMeal}</h3>

        <img class="w-100" src="https://www.themealdb.com/images/ingredients/${meal.strIngredient}.png" />
        `;

        
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
        console.log(idx);
    
    });

};















