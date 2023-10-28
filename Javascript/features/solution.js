// Task 1
function logDairy(array = dairy){
    for (element of array){
        console.log(element);
    }
}

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
logDairy()


// Task 2
const animal = {
    canJump: true   
}; 
const bird = Object.create(animal);  
bird.canFly = true; 
bird.hasFeathers = true;

function birdCan(obj = bird){
    for (prop of Object.keys(obj)){
        console.log(`${prop}: ${obj[prop]}`)
    }
}

birdCan()

// Task 3
function animalCan(obj = bird){
    for (prop in obj){
        console.log(`${prop}: ${obj[prop]}`);
    }
}

animalCan()



