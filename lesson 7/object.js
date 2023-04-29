// homework

// let obj = {
//   a: 1,
//   b: 2,
// }
// function Calculator() {
//   this.read = function() {
//     this.a = prompt(0);
//     this.b = prompt(0);
//   }
//   this.sum = function() {
//     return this.a + this.b;
//   }
//   this.mul = function() {
//     return this.a * this.b;
//   }
// }

// let calculator = new Calculator()
// calculator.read();
// alert(calculator.sum())
// alert(calculator.mul());

// =====================
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() {
//     console.log((this.step));
//   }
// }

// ladder.up().up().down().showStep().down().showStep();

// ====================
let obj = {};
let name = "webbrain";
function A() {
  return name;
}
function B() {
  return name;
}
let a = new A();
let b = new B();
console.log(a == b);
