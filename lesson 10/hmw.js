// array

// 1 ==========
let ar = [1,2,3];
// console.log(eval(ar.join('+')));

// 2 ==========

// let name = ['webbrain', 'academy'] // char sanog'ini topish kerak
function getCount(name) {
  let count = 0;
  for(i = 0; i < name.length; i++) {
    count += name[i].length;
  }
  return count;
}
getCount(['webbrain', 'academy'])


// 3 ==========
// comparison


function compare(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }
  let i = 0;
  while (i < ar1.length) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
    i++;
  }
  return true;
}

// let ar1 = [1,2];
// let ar2 = [1,2];
console.log(compare([1,2],[1,2]));


// 4 =========


// function camelize(str) {
//   let res = '';
//   let capitalize = false;
//   for(let i = 0; i <str.length; i++) {
//     if (str[i] === '-') {
//       capitalize = true;
//     } else if(capitalize){
//       res += str[i].toUpperCase();
//       capitalize = false;
//     } else {
//       res += str[i]
//     }
//   }
//   return res;
// }

// console.log(camelize("background-color"));
