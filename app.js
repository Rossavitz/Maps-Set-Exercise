// const myMap = new Map();
// myMap.set(7, "seven");
// myMap.set("7", "seven string");

// const empty = [];
// myMap.set(empty, "empty array!");
// myMap.set(true, "trueeee");

// myMap.get(7);

// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;

// const funcCalls = new Map();
// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);

// funcCalls.set(add, 1);
// funcCalls.set(mult, 9);
//can use functions as keys for maps

// const bandData = [
//   [3, "3 Doors Down"],
//   ["Three", "Three Dog Night"],
//   ["Nine", "Nine Inch Nails"],
//   ["Four", "The Four Seasons"],
//   [41, "Sum 41"],
// ];

// const bandMap = new Map(bandData);
// [...bandMap] will give you the array back

// bandMap.set(182, "Blink-182").set("Twenty", "Matchbox Twenty");
//This will add both to bandMap - you can chain this together

// bandMap.has()   looks for that within the map

// bandmap.delete("twenty") will delete matchbox twenty

//bandMap.clear()  will remove all from within bandMap

// bandMap.forEach((val, key) => {
//   console.log(key + " => " + val);
// });

// for (let [key, value] of bandMap) {
//   console.log(key, " = ", value);
// }

const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]);
bannedHashTags.add("bestlife").add("selfie");

function filterHashTags(tags) {
  const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]);
  return tags.filter((tag) => !bannedHashTags.has(tag));
}

const susansTags = ["happymonday", "yolo", "winning", "sunset"];

const ages = [45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45];
[...new Set(ages)];

//sets remove duplicates...using ... will return the set back as an array without the dupliates
