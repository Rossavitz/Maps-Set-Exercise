new Set([1,1,2,2,3,4])
// returns {1,2,3,4}

[...new Set("referee")].join("")
// returns "ref"

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// {array(3) => true, array(3) => false}

function hasDuplicate(arr) {
  let s = new Set(arr);
  if (arr.length !== s.size) {
    return true;
  } else return false;
}

const vowels = "aeiou";
function checkVowels(letter) {
  return vowels.includes(letter);
}
function vowelCount(string) {
  const stringMap = new Map();
  for (let char of string) {
    let lowerCase = char.toLowerCase();
    if (checkVowels(lowerCase)) {
      if (stringMap.has(lowerCase)) {
        stringMap.set(lowerCase, stringMap.get(lowerCase) + 1);
      } else {
        stringMap.set(lowerCase, 1);
      }
    }
  }
  return stringMap;
}
