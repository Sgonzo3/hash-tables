// Hash Tables

class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }
  hashFunc(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this.hashFunc(key);
    let arr = [key , value];
    console.log(this.keyMap[index]);

    if(this.keyMap[index] === undefined) {
      this.keyMap[index] = [arr];
    } else {
      this.keyMap[index].push(arr);
    }
  }
  get(key) {
    let index = this.hashFunc(key);
    return this.keyMap[index];
    for(let each of this.keyMap[index]){
      if(each[0] === key){
        return each[1];
      }
    }
    return undefined;
  }
}

let table1 = new HashTable(size = 53);
console.log(table1);

table1.set("color", "pink");
console.log(table1.get("color"));

// REACT = Read, Examples, Approach(Vocalize actions), Code, Test, Optimize

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same
function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  let freqObj = {}
  for (let i = 0; i < array1.length; i++) {
    let el = array1[i]
    if (freqObj[el]) {
      freqObj[el]++
    }
    else {
      freqObj[el] = 1
    }
    let el2 = array2[i];
    if (freqObj[el2]) {
      freqObj[el2]--
    }
    else {
      freqObj[el2] = -1
    }
  }
  for (let key in freqObj) {
    if (freqObj[key] !== 0) {
      return false
    }
  }
  return true
}

console.log(same("anagram", "nagaram"));
console.log(same("anagram", "nagarAm"));
