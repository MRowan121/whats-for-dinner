var sides = [
    'Caeser Salad',
    'Coconut Rice',
    'Coleslaw',
    'Crispy Potatoes',
    'Garden Salad',
    'Garlic Butter Mushrooms',
    'Hush Puppies',
    'Miso Glazed Carrots',
    'Shrimp Summer Rolls',
    'Sweet Potato Tots'
];

var mains = [
    'BBQ Chicken Burgers',
    'Bibimbap',
    'Butternut Squash Soup',
    'Chicken Fried Rice',
    'Chicken Parmesean',
    'Empanadas',
    'Margarita Pizza',
    'Pineapple Chicken',
    'Ramen',
    'Shakshuka',
    'Sheet Pan Fajitas',
    'Spaghetti and Meatballs',
    'Thai Yellow Curry'
];

var desserts = [
    'Apple Pie',
    'Baklava',
    'Banana Bread',
    'Black Forest Cake',
    'Cheesecake',
    'Chocolate Cupcakes',
    'Croissants',
    'Eclairs',
    'Flan',
    'Funfetti Cake',
    'Key Lime Pie',
    'Lemon Meringue Pie',
    'Macarons',
    'Macaroons',
    'Pavlova',
    'Peach Cobbler',
    'Pumpkin Pie',
    'Tart Tatin'
];

var mealType;
var newMealType;
var foodChoice = document.getElementsByName("lets-cook-radio");
var foodName = document.querySelector(".food-name")
var foodButton = document.querySelector('.lets-cook-btn')
var cookpotImg = document.querySelector(".cookpot-img")
var randomFood = document.querySelector(".random-meal")
var clearContent = document.querySelector('.clear-btn');
var addRecipe = document.getElementById('header-btn')
var newRecipeForm = document.querySelector('.footer')
var newRecipeBtn = document.getElementById('new-recipe-btn')
var newRecipeType = document.getElementById('new-recipe-type')
var newRecipeName = document.getElementById('new-recipe-name')

foodButton.addEventListener("click", displayRandomFood);
clearContent.addEventListener("click",showImage);
addRecipe.addEventListener("click", showNewRecipeForm);
newRecipeBtn.addEventListener("click", displayCustomFood);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
};

function hideImage() {
    if(randomFood.classList.contains('hidden')) {
        cookpotImg.classList.toggle("hidden");
        randomFood.classList.toggle("hidden");
    };
};

function displayRandomFood() {
    for(var i = 0; i < foodChoice.length; i++) {
        if(foodChoice[i].checked && foodChoice[i].id === "entire-meal") {
            hideImage()
            foodName.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`;
        } else if(foodChoice[i].checked && foodChoice[i].id !== "entire-meal") {
            hideImage()
            mealType = eval(foodChoice[i].id)
            foodName.innerText = mealType[getRandomIndex(mealType)]+'!'
        };
    };
};

function showImage() {
    cookpotImg.classList.toggle("hidden");
    randomFood.classList.toggle("hidden");
};

function showNewRecipeForm() {
    newRecipeForm.classList.toggle("hidden");
};

function pushNewFood() {
    if(newRecipeType.value === 'Side') {
        sides.push(newRecipeName.value)
    } else if(newRecipeType.value === 'Main Dish') {
        mains.push(newRecipeName.value)
    } else if(newRecipeType.value === 'Dessert') {
        desserts.push(newRecipeName.value)
    }
};

function displayCustomFood() {
    hideImage();
    showNewRecipeForm();
    pushNewFood();
    foodName.innerText = newRecipeName.value +'!';
}

