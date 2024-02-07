//Toán tử ba ngôi	
const x = 100;
const result = (x < 1000) ? "nho hon 1000" : "lon hon hoac bang 1000";
console.log(result);

//Shorthand Evaluated
const variable1 = "Hello World";
const variable2 = variable1 || "";
console.log(variable2);

//Variable declaration – If Comparison
let x, y, z = 3;
if (isTurnOn);

//For loop – For loop with decimal base
let sampleArr = [0,1,2,3,4];
for (let item in sampleArr){
    console.log(item);
};
for (let i = 0; i < 1e5; i++){
    console.log(i);
};

// Object property
const x = 1, y = 2;
const obj = {x,y};
console.log(obj);

//Arrow function
sayHello = name => console.log('Hello', name);
sayHello('Huy');

setTimeout(() => console.log('Loaded'), 2000);

list = [0,1,2,3,4];
list.forEach(item => console.log(item));

getValue = ratio => ratio * 6.9;
console.log(getValue(2));

//Set default value for parameter in function
getValue = (a, b = 3, c = 4) => (a * b + c );
console.log(getValue(2));

// Template list
const first = 'Quốc';
const last = 'Huy';
const welcome = `You have logged in as ${first} ${last} .`;
console.log(welcome);

// Destructuring Assignment	
import {action, service} from 'lib';
const {from, errors, entity, controller, component } = this.props;

//Spead Operator
const odd = [1, 3, 5];
const nums = [2, 4, 6].concat(odd);
console.log(nums);

const arr = [1, 2, 3, 4];
const arr2 = arr.slice(1, 3)
console.log(arr2)

const odd2 = [1, 3, 5];
const nums2 = [2, 4, 6, ...odd2];
console.log(nums2)

const arr3 = [1, 2, 3, 4];
const arr4 = [...arr3];
console.log(arr4)

const odd3 = [1, 3, 5];
const nums3 = [2,...odd3, 4, 6];
console.log(nums3)

//Constraint Param
mandatory = () => {throw new Error('Thiếu tham số!');}
sample = (param1 = mandatory()) => param1;
console.log(sample());

//Find() in arrays
employees = [{name:'Emp A', age: 25},
             {name:'Emp B', age: 28},
             {name:'Emp C', age: 35}]
const name = 'Emp A'
emp = employees.find (item => item.name === name)
console.log(emp)

//Object[key]
const rule = {
    firstName: { 
        required: true
    },
    lastName: {
    required: true
    }
}

const validate = (rule, values) => {
    for (prop in rule) {
        if(rule[prop].required) { 
            if(!values [prop]) {
                return false;
            }
        }
    }
    return true;
}
console.log(validate(rule, {firstName: 'Duy'})); 
console.log(validate(rule, {firstName: 'Duy', lastName: 'Buffet'})); 

//Bitwise NOT double
~~6.9 === 6