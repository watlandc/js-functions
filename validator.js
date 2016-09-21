// (function(window) {
  // })(window);


var validator = {};

/** 
* 1. Checks if the input parameter is an email address, consisting of three parts: An email address consists of two strings combined by an @ symbol.
*/

validator.isEmailAddress = function(input) {
  if (input.search("@") < 0 || input.search("@") == input.length - 1) {
    throw "Please provide a valid email address email@email.com"
  } return true;
}

/**
* 2. Checks if the input parameter is a valid phone number for your country.
*/

// sample input "555-555-5555"
validator.isPhoneNumber = function(input) {
  var arr = input.split("-");
  var str = arr.join("");
  if (str[0] === "1" || str.length !== 10) {
    throw "Please provide a valid 10 digit phone number";
  }
  return true;
}

/** 
* 3. Returns the input parameter text with all symbols removed. Symbols refer to any non-alphanumeric character. A character is considered alphanumeric if it matches one of the following: a—z, A—Z, or 0—9. Ignore whitespace.
 */

validator.withoutSymbols = function(input) {

  var alphaUpper = [65, 90];
  var alphaLower = [97, 122];
  var num = [48, 57];
  var result = [];

  for(var i = 0; i < input.length; i++) {
    var charCode = input.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122 || charCode >= 48 && charCode <= 57 || charCode === 32 || charCode === 44) {
      result.push(input[i]);
    }
  }
  return result.join("");
}

/**
* 4. Checks if the input parameter text is a valid date. For your purposes, a valid date is any string that can be turned into a JavaScript Date Object.
*/

validator.isDate = function(input) {
  if ( !(isNaN(Date.parse(input))) ) {
    return true;
  } throw "Please enter a valid date.";
}

/**
* 5. Checks if the input parameter is a date that comes after the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
*/

validator.isBeforeDate = function(input, reference) {

  for (var i = 0; i < arguments.length; i++) {
    validator.isDate(arguments[i]);
  }
  input = new Date(input);
  reference = new Date(reference);
  if(input < reference) {
    return true;
  }
  return false;
}

/**
* 6. Checks if the input parameter is a date that comes before the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
*/

validator.isAfterDate = function(input, reference) {

  if (validator.isBeforeDate(input, reference)) {
    return false;
  }
  return true;
}

/**
* 7. Checks if the input parameter is a date that comes before today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.
*/

validator.isBeforeToday = function(input) {

  validator.isDate(input);
  input = new Date(input);
  if (input < new Date()) {
    return true;
  } return false;
}

/**
* 8. Checks if the input parameter is a date that comes after today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.
*/

validator.isAfterToday = function(input) {
  if (validator.isBeforeToday(input)) {
    return false;
  } return true;
}

/**
 * 9. Checks the input parameter and returns true if it is an empty string–a string with no length or characters that is represented as "" or only contains whitespace(s).
*/

validator.isEmpty = function(input) {
  if ( !(typeof input === "string") ) {
    return false;
  } else if (input.trim().length === 0) {
    return true;
  } return false;
}

/**
* 10. Checks if the input text parameter contains one or more of the words within the words array. A word is defined as the following: having undefined, whitespace, or punctuation before and after it. The function should be case-insensitive.
*/

// sample input
var words = ["hi", "bye", "    "];

validator.contains = function(input, words) {

  for (var i = 0; i < words.length; i++) {

    if (typeof input == "undefined" && typeof words[i] == "undefined") {
      return true;
    }
    if ( typeof input !== "string" || typeof words[i] == "undefined" ) {
      continue;
    }
    if (input.toLowerCase().search(words[i].toLowerCase()) > -1) {
      return true;
    }
  }
  return false;
}

/**
* 11. Checks if the input text parameter does not contain any of the words within the words array. Use the “word” definition used in the above .contains description. The function should be case-insensitive. A function like this could be used for checking blacklisted words.
*/

validator.lacks = function(input, words) {
  if (validator.contains(input, words)) {
    return false;
  } return true;
}

/**
* 12. Checks that the input text parameter contains only strings found within the strings array. Note that this function doesn’t use a strong word definition the way .contains and .lacks does. The function should be case-insensitive.
*/

validator.isComposedOf = function(input, strings) {
 
  // remove symbols and whitespace from input
  var input = input.split(" ").join("").toLowerCase();
  input = validator.withoutSymbols(input);
  
  // array test whether input was made up entirely of string array elements
  var check = [];
  for (var i = 0; i < input.length; i++) {
    check[i] = false;
  }

  for (var i = 0; i < strings.length; i++) {

    function search(index) {
     
      // search each array string element within input
      var position = input.indexOf(strings[i].toLowerCase(), index);
      
      if (position > -1) {

        var j = 0;
        // strike out the input items that match the strings array element
        while ( (j < strings[i].length) && ( (j + position) < check.length) ) {
          check[position + j] = true;
          j++;
        }
        // since indexOf only finds the first match, recursively search for matches
        search(position + 1);
      }
    } search(0);
  } 

  // confirm if all array entries are true and print result
  for (var i = 0; i < check.length; i++) {
    if (check[i] === false) {
      return false
    }
  }
  return true;
}



/**
13. Checks if the input parameter’s character count is less than or equal to the n parameter.
*/

validator.isLength = function(input, n) {

  if (input.length <= n) {
    return true;
  } return false;
} 

/**
14. Checks if the input parameter’s character count is greater than or equal to the n parameter.
*/

validator.isOfLength = function(input, n) {
  if (input.length >= n) {
    return true;
  } return false;
}

/**
* 15. Counts the number of words in the input parameter. Refer to the definition of word used in the description of the .contains function above.
*/

validator.countWords = function(input) {

  if (input === "") {
    return 0;
  }
  var str = input.split(" ").join(" ");
  var newStr = str.split("-").join(" ");
  return newStr.split(" ").length;
}


/**
* 16. Checks if the input parameter has a word count less than or equal to the n parameter.
*/

validator.lessWordsThan = function(input, n) {

  if (validator.countWords(input) <= n) {
    return true;
  } return false;

}

/**
* 17. Checks if the input parameter has a word count greater than or equal to the n parameter.
*/

validator.moreWordsThan = function(input, n) {

  if (validator.countWords(input) >= n) {
    return true;
  } return false;

}

/**
* 18. Checks that the input parameter matches all of the following:

- input is greater than or equal to the floor parameter
- input is less than or equal to the ceil parameter.
 */

validator.isBetween = function(input, floor, ceil) {

  if (input >= floor && input <= ceil) {
    return true;
  } return false;

}

/**
* 19. Checks that the input parameter string is only composed of the following characters: a—z, A—Z, or 0—9. Unicode characters are intentionally disregarded.
*/

validator.isAlphanumeric = function(input) {

  for (var i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      return false;
    }
  }

  var str = validator.withoutSymbols(input);

  if (input.length === str.length) {
    return true;
  } return false;

}

/**
* 20. Checks if the input parameter is a credit card or bank card number. A credit card number will be defined as four sets of four alphanumeric characters separated by hyphens (-), or a single string of alphanumeric characters (without hyphens).
*/

validator.isCreditCard = function(input) {

  var num = validator.withoutSymbols(input);
  if (num.length === 16) {
    return true;
  } return false;

}

/**
* 21. Checks if the input string is a hexadecimal color, such as #3677bb. Hexadecimal colors are strings with a length of 7 (including the #), using the characters 0—9 and A—F. isHex should also work on shorthand hexadecimal colors, such as #333. The input must start with a # to be considered valid.
*/

validator.isHex = function(input) {


  var alphaUpper = [65, 70];
  var alphaLower = [97, 102];
  var num = [48, 57];
  var result = [];

  if (input[0] !== "#") {
    return false;
  } result.push("#");
  for(var i = 1; i < input.length + 1; i++) {
    var charCode = input.charCodeAt(i);
    if (charCode >= 65 && charCode <= 70 || charCode >= 97 && charCode <= 102 || charCode >= 48 && charCode <= 57) {
      result.push(input[i]);
    }
  }
  if (result.length === 7 || result.length === 4) {
    return true;
  } return false;
}

/**
* 22. Checks if the input string is an RGB color, such as rgb(200, 26, 131). An RGB color consists of:

- Three numbers between 0 and 255
- A comma between each number
- The three numbers should be contained within “rgb(” and “)“.

If you are unfamiliar, refer to the Introduction to CSS chapter for a more detailed description of the rgb color syntax.
*/

validator.isRGB = function(input) {

  if (input.slice(0, 4) !== "rgb(") {
    return false
  }
  var nums = input.slice(4, -1);
  var arr = nums.split(",");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 255 || arr[i] < 0) {
      return false;
    }
  }
  return true;

}

/**
* 23. Checks if the input string is an HSL color, such as hsl(122, 1, 1). An HSL color consists of:3

- Three numbers:
-- the first number, Hue, is between 0 and 360
-- the second and third numbers, Saturation and Lightness, are between 0 and 1
- A comma between each number
- The three numbers should be contained within “hsl(” and “)“.
*/

validator.isHSL = function(input) {

  if (input.slice(0, 4) !== "hsl(") {
    return false
  }
  var nums = input.slice(4, -1);
  var arr = nums.split(",");
  console.log(arr);
  if (arr[0] < 0 || arr[0] > 360) {
    return false;
  }
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] > 1 || arr[i] < 0) {
      return false;
    }
  }
  return true;
}

/**
* 24. Checks if the input parameter is a hex, RGB, or HSL color type.
*/

validator.isColor = function(input) {
  if (validator.isHex(input) || validator.isRGB(input) || validator.isHSL(input)) {
    return true;
  } return false;
}

/**
* 25. Checks if the input parameter has leading or trailing whitespaces or too many spaces between words. Leading refers to before while trailing refers to after. This function will help validate cases where extra spaces were added accidentally by the user.
*/

validator.isTrimmed = function(input) {
  
   if (input[0] === " " || input[input.length - 1] === " ") {
     return false;
   }
  
  var arr =  input.trim().split(" ");
 
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "") {
      return false;
    } 
  } return true;
}


