// homework

// =================
// let user = {
//   name: "John",
//   surname: "Smith",
// };

// user.name = "Pete";
// delete user.name;

// console.log(user);


// =================
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let res = 0;
// for(key in salaries){
//   res += salaries[key];
// }

// console.log(res);

// =================
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for(key in obj) {
//     if(typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// // console.log(menu.width + menu.height + menu.title);
// console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

// ================
// let s = 12;
// let obj = {
//   x: 23,
//   y: 2,
//   z: 55,
// }

// function calc(s, obj) {
//   let res = 0;
//   for(key in obj) {
//     let v = obj[key];
//     let difference = (s > v) ? (s - v) : (v - s)
//     res += difference;
//   }
//   return res;.
// }
// let distance = calc(s, obj);
// console.log(distance);

// ================
let obj = {name: "webbrain"}

function count(obj) {
  let vowels = 0;
let consonants = 0;
let vowelChars = ['a', 'e', 'i', 'o', 'u'];

for(key in obj){
  let value = obj[key].toString().toLowercase();
  for(i = 0; i < value.length; i++) {
    let char = value[i];
    if (vowelChars.includes(char)) {
      vowels++;
    } else if (char >= 'a' && char <= 'z') {
      consonants++;
    }
  }
}
 return {vowels, consonants}
}

// let counts = count(obj);
// console.log(counts);
