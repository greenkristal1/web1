"use strict"
// function Calculator(){
// 	this.methods = {
// 		"+": (a, b) => a + b,
// 		"_": (a, b) => a - b,
// 	}
// 	this.calculate = function(str){
// 		let split = str.split(" ");
// 		let a = split[0], op = split[1], b = split[2];
// 		if(this.methods[op] && !isNaN(a) && !isNaN(b))
// 			return this.methods[op](a, b);
// 		else return NaN;
// 	}
// 	this.addMethod = function(name, func){
// 		this.methods[name] = func;
// 	};
// }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); 

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
alert(sayHiDeferred);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды