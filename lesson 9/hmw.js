// string

// 1
// ==========

function check(str1, str2) {
  if (str1.includes(str2)) {
    console.log("they match");
  } else {
    console.log("they do not match");
  }
}

(check("hello world", "world"));

// 2
// ==========
function getCount(str) {
  let result = str;
  for(i=0; i < str.length; i++){
    let letter = str[i];
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] =1;
    }
  }
  return result
}
// const result = getCount("webbrain");
// console.log(result); // { w: 1, e: 1, b: 2, r: 1, a: 1, i: 1, n: 1 }

getCount("webbrain")

// 3
// ==========
function truncate(str,n) {
  if (str.length > n) {
    return str.slice(0, n);
  } else {
    return str;
  }
}

truncate("webbrain")
// 4
// console.log();/
// slice

function getCurrency(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(char)) {
      result += char;
    }
  }
  return result;
}

// const result = getCurrency("$1200");
// console.log(result); // "1200"

// 5
// =========
function isLetter(char) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z")
  );
}

function countChars(str) {
  let numbers = 0;
  let letters = 0;
  let characters = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(char)) {
      numbers++;
    } else if (isLetter(char)) {
      letters++;
    } else {
      characters++;
    }
  }

  return {
    numbers,
    letters,
    characters
  };
}

const result = countChars("webbrain @!#n_2020");
console.log(result);
// {numbers: 4, letters: 7, characters: 5}
