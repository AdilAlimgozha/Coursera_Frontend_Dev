console.log('Hello world!')

var person = "John";
var greeting = "Hello"
console.log(greeting, person)
greeting = 'Hi'
person = 1
console.log(greeting, person)



var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: "+ petDog);
console.log("My pet cat's name is: "+ petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);
catSound = 'meow';
console.log(petCat, 'now says', catSound);



var age = 70;
if (age >= 65){
    console.log("You get your income from your pension");
}else if (age < 65 && age >=18){
    console.log("Each month you get a salary");
}else if (age < 18){
    console.log('You get an allowance');
}else{
    console.log("The value of the age variable is not numerical");
}




var day = 'Monday';
switch (day){
    case 'Monday':
        console.log("Gym");
        break
    case 'Tuesday':
        console.log("Acro");
        break
    case 'Wednesday':
        console.log("Gym");
        break
    case 'Thursday':
        console.log("Acro");
        break
    case 'Friday':
        console.log("Acro");
        break
    case 'Saturday':
        console.log("Gym");
        break
    case 'Sunday':
        console.log("Rest");
        break
    default:
        console.log('There is no such day');
}



var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}



function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if (match == word[i]){
            console.log("Found " + match + " at", i);
        }else{
            console.log("--No match found at", i);
        }
    }
}

letterFinder('test', 't');




var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);


console.log(Math.pow(2,5))


var a = [1, 2, 3, 4]
var b = [5, 6, 7, 8]
var c = a.concat(b)
console.log(c)
c.push(111)
c.pop()
console.log(c)




var clothes = [];
clothes.push('zara');
clothes.push('lolka');
clothes.push('ggwp');
clothes.push('cringe');
clothes.push('xui');

console.log(clothes);

clothes.pop();
clothes.push('poshel nah');

console.log(clothes[2]);

var favCar = {};
favCar.color = 'silver';
favCar.covertible = true;
favCar["lolka"] = 'poshel nahu'
console.log(favCar)

var factorial = function fac(n){
    if (n == 1){
        return n;
    }else{
        return n * fac(n-1);
    }
}
console.log(factorial(4));


var factorial = function fac(n){
    var f = (n == 1) ? n : n * fac(n-1);
    return f;
}
console.log(factorial(3))




console.log(a+b);
console.log("This line never reached");

try{
    console.log(a + b);
}catch(err){
    console.log(err);
    console.log('There was an error');
    console.log('The error saved in the error log');
}
console.log('My program does not stop');

try{
    throw new ReferenceError();
}catch(err){
    console.log(err);
    console.log('There was a Reference error');
}
console.log("My program does not stop");




var data = '{ "age": 30 }'; // данные неполны

try {

  var user = JSON.parse(data); // <-- выполнится без ошибок
  console.log( user.name ); // undefined

} catch (e) {
  // не выполнится
  console.log( "Извините, в данных ошибка" );
}


var data = '{ "age": 30 }'; // данные неполны

try {

  var user = JSON.parse(data); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные некорректны");
  }

  console.log( user.name );

} catch (e) {
  console.log( "Извините, в данных ошибка" );
}




function addTwoNums(a, b){
    try{
        if (typeof(a) != 'number'){
            throw new ReferenceError("the first argument is not a number");
        }else if (typeof(b) != 'number'){
            throw new ReferenceError("the second argument is not a number");
        }else{
            console.log(a + b);
        }
    } catch(err){
        console.log("Error!", err);
    }
}

addTwoNums(5, '5');
console.log('It still works');




function letterFinder(word, match) {
    try{
        if (word.length < 2){
            throw new ReferenceError('word length is less than 2');
        }else if (match.length > 1){
            throw new ReferenceError('match length is more than 1');
        }else if (typeof(match) != 'string' || typeof(word) != 'string'){
            throw new ReferenceError('type of match or word is not string');
        }else{
            for(var i = 0; i < word.length; i++) {
                if(word[i] == match) {
                    //if the current character at position i in the word is equal to the match
                    console.log('Found the', match, 'at', i);
                } else {
                    console.log('---No match found at', i);
                }
            }   
        }
    } catch(err){
        console.log('Error!', err)
    }
}
letterFinder([],[])
letterFinder('robot', 'o')



function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if (condition1 && condition2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }   
    }else{
        console.log('Please pass correct arguments to the function')
    }
}
letterFinder([],[])
letterFinder('robot', 'o')


throw new Error();
console.log('gg');




function addTwoNums(a, b) {
    console.log(a, b, a + b)
}


function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); 

addTwoNums(getNumber(), getNumber())



if (1 > 0){
    let x = 2;
    console.log(x)
}
console.log(x)






var a = [1, 2];
var b = [2, 3];

console.log(a+b)






class Teacher{
    greeting(){
        console.log("Hello, I am a teacher");
    }
}

class Math_teacher extends Teacher{
    subject(){
        super.greeting();
        console.log('Math');
    }
}

class History_teacher extends Teacher{
    subject(){
        super.greeting();
        console.log("History");
    }
}

var teacher = new Teacher();
var math_teacher = new Math_teacher();
var history_teacher = new History_teacher();

teacher.greeting();
math_teacher.subject();
history_teacher.subject();







class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.






class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //







function arrayDiff(a, b) {
  if (b.length != 0){
    let i = 0;
    
    while(i < b.length){
      let j = 0;
      while (j < a.length){
        if (a.legth >= j){
          break;
        }
        else if (b[i] == a[j]){
          console.log(b[i], a[j], b, a)  
          a.splice(j, 1);

        }else{
          j++;
        }
      }
      
      i++;
    }
    
    
    return a;
  }else{
    return a;
  }
}

console.log(arrayDiff([1,2, 3],[2, 3]))




function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  
  // usage example:
  var a = ['a', 1, 'a', 2, '1'];
  var unique = a.filter(onlyUnique);
  
  console.log(unique);











  class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!








function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();








console.log(`Hello,
World
!
`)






let a = [1, 2, 3, 4, 5];
console.log(...a);



let [] = a;
let [one, two, ...otherNum] = a;
console.log();

function addTaxPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}
console.log(addTaxPrices(1.1, 2, 3, 4, 5, 6))



function sortRestArgs(...theArgs) {
    const sortedArgs = theArgs.sort();
    return sortedArgs;
  }
  
console.log(sortRestArgs(5, 3, 7, 1));


let a = 10;
function func(){
    console.log(a);
}
func()