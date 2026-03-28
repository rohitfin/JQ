/**
 [
  [ 1,  2,  3],
  [ 8,  9,  4],
  [ 7,  6,  5]
]
  Array Methods, seal and freeze, Shallow copy, Deep copy, spread operator, rest operator, currying, Closure, recursion, call, apply, bind, debouncing, throttling, async await, try, catch, promise, promise all methods, promise chaining, event bulling, event capturing, event delegation, this keyword, class, prototype, inheritance, MAP, set, get, setter, getter, 
 */

import { users } from "./users-list.js";

var text = "Hello world!";
var even = [8, 4, 2, 10, 6, 18, 12];
var odd = [5, 7, 1, 3, 9];

var nested = [5, 2, [1, 5], [2, [6, [5, [55, [111]]]]], [4, 7, 8], 9];

var user = {
  fName: "Mike",
  lName: "Tyson",
  fullName: function () {
    console.log(this.fName + " " + this.lName);
  },
  address: {
    country: "India",
    state: "Maharashtra",
  },
};
var user2 = {
  fName: "Bruce",
  lName: "Lee",
  fullName: function () {
    console.log(fname + " " + lName);
  },
  address: {
    country: "Japan",
    state: "Hirosima",
  },
};

function Person(name, age, gender) {

  this.name = name,
  this.age = age,
  this.gender = gender,
  this.greet = function(){
    console.log("Hello " + this.name);
  }


}

const p1 = new Person("Rohit Yadav", 30, "Male");
// p1.greet();

Person.prototype.status = "No";

const p2 = new Person("Raja Ram", 1, "Male");
// p2.prototype.status = "Yes"

// console.log(p1);
// console.log(p2);

// console.log(Person.prototype);






var user3 = {
  fName: "Rohit",
  lName: "yadav",
};

function greet(city, country) {
  console.log(`Hello ${this.fName} from ${city}, ${country}`);
}

function fullName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Rohit Yadav");
    }, 2000);
  });
}

async function getName(){
  console.log(1);
  const name = await fullName();
  console.log("My name is ", name);
  console.log(2);
}

// getName();

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log(a / b);
  } catch (err) {
    console.log("Math Error:", err.message);
  }
}

// divide(10, 0);

let product = [ { id: 1, name: "Apple", price: 100 }, { id: 2, name: "Mango", price: 130 }, { id: 3, name: "Orange", price: 30 }, { id: 4, name: "Banana", price: 50 } ]

function addToCart(item, type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type == true) {
        let resp = {
          statusCode: 200,
          msg: "Add to cart successfully",
          data: item,
        };
        resolve(resp);
      } else {
        let resp = {
          statusCode: 400,
          msg: "Add to cart failed",
          data: item,
        };
        reject(resp);
      }
    }, 2000);
  });
}

function paymentSummary(item, type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type == true) {
        let resp = {
          statusCode: 200,
          msg: "payment made successfully",
          data: item,
        };
        resolve(resp);
      } else {
        let resp = {
          statusCode: 400,
          msg: "payment failed",
          data: item,
        };
        reject(resp);
      }
    }, 4000);
  });
}

function orderStatus(item, type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type == true) {
        let resp = {
          statusCode: 200,
          msg: "Order successfully",
          data: item,
        };
        resolve(resp);
      } else {
        let resp = {
          statusCode: 400,
          msg: "order failed",
          data: item,
        };
        reject(resp);
      }
    }, 3000);
  });
}

function dispatchStatus(item, type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type == true) {
        let resp = {
          statusCode: 200,
          msg: "Order Dispatch successfully",
          data: item,
        };
        resolve(resp);
      } else {
        let resp = {
          statusCode: 400,
          msg: "order dispatch failed",
          data: item,
        };
        reject(resp);
      }
    }, 1000);
  });
}

let selectedItem = product[1];
function processOrder() {
  addToCart(selectedItem, true)
    .then((cart) => {
      console.log("Cart : ", cart.msg);
      return paymentSummary(cart.data, true);
    })
    .then((pay) => {
      console.log("Payment summary : ", pay.msg);
      return orderStatus(pay.data, true);
    })
    .then((order) => {
      console.log("Order summary : ", order.msg);
      return dispatchStatus(order.data, true);
    })
    .then((dispatch) => {
      console.log("dispatch summary : ", dispatch.msg, dispatch.data);
    })
    .catch((err) => {
      console.log("Error : ", err);
    });
}

function getPromiseMethods() {
  Promise.all([
    addToCart(product, true),
    paymentSummary(product, true),
    orderStatus(product, true),
    dispatchStatus(product, true),
  ])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
// getPromiseMethods();

async function getPromise(){
  try {
    let cart = await addToCart(product, true);
    console.log("cart => ", cart);
    let payment = await paymentSummary(product, true);
    console.log("payment => ", payment);
    let order = await orderStatus(product, false);
    console.log("order => ", order);
    let dispatch = await dispatchStatus(product, true);
    console.log("dispatch => ", dispatch);

  } catch(e) {
    console.log("Error: => ", e);
  }
}
// getPromise();


let grand = document.getElementById("grandParent");
let parent = document.getElementById("parent");
let child1 = document.getElementById("child1");
let child1_1 = document.getElementById("child1-1");

grand.addEventListener("click", function(e){
  console.log("Grand : ", e.target.id);
}, true);

// parent.addEventListener("click", function(e){
//   console.log("Parent --- : ", e.target.id);
//   e.stopImmediatePropagation();
// }, false);
// parent.addEventListener("click", function(e){
//   console.log("Parent : -----------");
// });

// child1.addEventListener("click", function(e){
//   console.log("Child1 : ", e.target.id);
// }, false);

// child1_1.addEventListener("click", function(e){
//   console.log("Child1_1 : ", e.target.id);
// }, true);

// const person = {
//   fName: "Rohit",
//   lName: "Yadav",
//   fullName: function(){
//     console.log(this);
//   },
//   setFn: function(){
//     setTimeout(()=>{
//       console.log(this);
//     }, 3000)
//   },
//   greet: () =>{
//     console.log(this);
//   },
//   arrow: ()=>{
//         setTimeout(()=>{
//       console.log(this);
//     }, 300)
//   },
//   print(){
//     console.log(this);
//   }
// }

// console.log(
//   person.fName
// );
// let a = person.fullName();
// console.log(a);
// let b = person.setFn();
// console.log(b);
// let c = person.greet();
// console.log(c);
// let d = person.arrow();
// console.log(d);
// let e = person.print();
// console.log(e);

const user4 = {
  age: 25,
  inc() {
    return function() {
      console.log(this.age);
    };
  },
  inc2(){
  return () => console.log(this.age);
}
};

// user4.inc()(); 
// user4.inc2()(); 

function ab(){
  console.log(this);
}
// ab.bind({a:1})();









/*

// tell difference between b and c
let a = () => 123;
console.log(a());

let b = () => {ab: 1};
console.log(b());

let c = () => ({ab: 1});
console.log(c());

let d = () => {
  return {ab: 1}
};
console.log(d());


// Non-primitive is converted into primitive
console.log([] + [[]] + !![]) // "" + "" + !false ->( !false -> true )


function sum(a = 10, b= 10){
  return a + b;
}
console.log(sum());
console.log(sum(1, null));

const name = "Rohit";
age = 21;
console.log(delete name);
console.log(age);

for(var i = 0; i < 3; i++){
  var a = i;
  let b = i;
  setTimeout(() => {
    console.log( "i => ", i);
    console.log( "a => ", a);
    console.log("b => ", b);
  }, 200);
}

console.log([]);
console.log(![]);
console.log(false == []); // Become [] -> "" -> 0 and false -> 0
console.log(false == ![]);

let x = [1,2,3,4];
let [a, ...b] = x.reverse();
console.log(a);
console.log(b);



const a = {}
const b = {key: "bb"};
const c = {key: "cc"}

a[b] = 33;
a[c] = 22;
console.log(a[b]);
console.log(a[c]);


passing argument mandatory 
function check(){
  throw new Error("Param required")
}
function show(name  = check()){
  console.log("My name is "+name);
}
show();


Reference error - Block scope
function show(){
  {
    (function(){

      var a = 11;
      var b = 22;
    })()
  }
  console.log( a, b );
}
show();


const obj = {
  a: 1,
  b: 2,
  sum(){
    return this.a + this.b;
  }
}
const res = obj.sum.bind(obj);
console.log(res());

*/
