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
var foodChoice = document.getElementsByName("lets-cook-radio");
var foodName = document.querySelector(".food-name")


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
};

function displayRandomFood() {
    for(var i = 0; i < foodChoice.length; i++) {
        if(foodChoice[i].checked) {
            mealType = eval(foodChoice[i].id)
            foodName.innerText = mealType[getRandomIndex(mealType)]
        };
    };
};