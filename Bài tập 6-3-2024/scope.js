var saybye = function(name){
    var text = 'Bye, ' + name;
    return () =>{
        console.log(text)
    }
}
saybye('Me');
var calledMe = saybye('me');
calledMe();

//curry
function add(a,b,c) {
    return a+b+c;
}
console.log(add(1,2,3));
function addCurries(a) {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}
console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);
console.log(ad3)

//this
var student = {
    name: 'Mai Ha Thi',
    getName: function() {
        console.log(this.name);
        return this.name;
    }
};
var _deStudent = student.getName();

//scope chain 
function step1 () {
    console.log(te);
}

function step2 () {
    var te = 2;
    step1();
}
step2();
var te = "Global variables";

//fix scope chain
function step1(te) {
    console.log(te);
}

function step2() {
    var te = 2;
    step1(te);
}
step2();

//call, apply
function sayHello() {
    console.log("Hello, " + this.name);
}

function sayGoodbye() {
    console.log("Goodbye, " + this.name);
}
var person1 = { name: "sôn lì" };
var person2 = { name: "man đần" };

sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);


//Closures
function outerF() {
    var x = "Hello";
    function innerFsetX() {
        x += " world";
    }
    innerFsetX();
    return x;
}
console.log(outerF()); 


//lexical scope
var myFunction = function () {
    var name = 'Ha Thi';
    var myOtherFunction = function () {
        console.log('i am ' + name);
    };
    console.log(name);
    myOtherFunction();

};
myFunction();

//class
class square {
    constructor(width){
        this.width = width;
    }
    getArea(){
        console.log(`Square of this ${this.width * this.width}`);
        return this.width * this.width;
    }
}
class cube extends square {
    constructor(width){
        super(width);
    }
    squareArea = this.getArea();
    getVolume(){
        console.log(`Volume of this ${this.squareArea * this.width}`);
        return this.squareArea * this.width;
    }
}
var myCube = new cube(5);
myCube.getVolume
