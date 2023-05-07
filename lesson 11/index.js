// arrays

function camelize(str) {
  let res = '';
  let capitalize = false;
  for(let i = 0; i <str.length; i++) {
    if (str[i] === '-') {
      capitalize = true;
    } else if(capitalize){
      res += str[i].toUpperCase();
      capitalize = false;
    } else {
      res += str[i]
    }
  }
  return res;
}

console.log(camelize("background-color"));
