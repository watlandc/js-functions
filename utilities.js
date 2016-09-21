// (function(window) {
// })(window);

var utilities = {};


/**
 * 1. Write a function that operates similarly to .forEach. Your function should iterate and call the callback parameter for each element or property of a list at the interval specified by the n parameter. It should not call callback on values greater than the list’s number of elements.
*/

utilities.by = function(list, n, callback) {

  for (var i = n-1; i < list.length; i += n) {
    callback(i, list);
  }
}

var log = function(index, list) {
  console.log(list[index]);
}

/**
* 2. Write a function that will create an array of all the keys of an object. Remember that a key is the name of an object’s property. You can observe the syntax below:
*/

utilities.keys = function(object) {

  var arr = [];
  for (key in object) {
    arr.push(key);
  }
  return arr;
}

/**
* 3. Write a function that will create an array of all the values of an object. Remember that a value is the stored data at a specific key of an object. You can observe the syntax below:
*/

utilities.values = function(object) {

  var arr = [];
  for (key in object) {
    arr.push(object[key]);
  }
  return arr;
}

/**
* 4. Write a function that will create an array of all the keys and values of an object in the order of [key, value, key, value] for as many key/value pairs as exist in the object.
*/

utilities.pairs = function(object) {

  var arr = [];
  for (key in object) {
    arr.push(key);
    arr.push(object[key]);
  }
  return arr;
}

/**
* 5. Write a function that returns a randomly re-arranged copy of the elements in its parameter array.
*/

utilities.shuffle = function(array) {

  var arr = [];
  var result = [];

  for (var i = 0; i < array.length; i++) {
    arr.push( [array[i], Math.random()] );
  }
  arr.sort(function(a, b) {
    return a[1] - b[1]; 
  });
  for (var i = 0; i < array.length; i++) {
    result.push(arr[i][0]);
  }
  return result;
}

/**
* 6. Write a function that will return the plural of a word depending on the value of the n parameter. If n is 1, return the non-plural word (parameter word); otherwise, add an “s” to the plural word. If the pluralWord parameter is provided, instead of adding an “s,” return the pluralWord.
*/

utilities.pluralize = function(n, word, pluralWord) {

 if (pluralWord !== undefined) {
    return pluralWord;
  } else if (n !== 1) {
    return word + "'s";
  } else {
    return word;
  }

}


/**
* 7. Write a function for converting a camelCase string to a dashed string. Camel case presents words with no spaces separating them and with each word’s first letter capitalized except the first word, which is lower case.
*/

utilities.toDash = function(str) {

  var arr = str.split("");
  var newArr = [];

  for (var i = 0; i < str.length; i++) {
    
    if (arr[i] === arr[i].toUpperCase()) {
      newArr.push("-");
    }
    newArr.push(arr[i]);
  }
  return newArr.join("").toLowerCase();
}



/**
* 8. Write a function for converting a dashed string to a camelCase string.
*/

utilities.toCamel = function(str) {

  var arr = str.split("");
  var newArr = [];

  for (var i = 0; i < str.length; i++) {
    
    if (arr[i-1] === "-") {
      continue;
    } 
    if (arr[i] === "-") {
      newArr.push(arr[i+1].toUpperCase());
    } 
    if (arr[i] !== "-") {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
}

/**
* 9. Write a function that searches all values of the parameter obj and returns “true” if any are equal to the search parameter. Otherwise has should return “false.”
*/

// sample input
var data = {
 type: "transformer",
 index: 19,
 siblings: 19,
 access: "full"
};

utilities.has = function(obj, search) {

  for (key in obj) {
    if (obj[key] === search) {
      return true;
    } return false;
  }
}


/**
* 10. Write a function that returns a new object by picking all key/value pairs from the parameter obj. The keys that are picked will be determined by the array parameter keys.
*/

utilities.pick = function(obj, keys) {

  var result = {};

  for(key in obj) {
    
    for (var i = 0; i < keys.length; i++) {

      if (key === keys[i]) {
        result[key] = obj[keys[i]];
      }
    } 
  }
  return result;
}



