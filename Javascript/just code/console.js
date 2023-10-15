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