/*------------------------------------*\
  #LOOPS
\*------------------------------------*/

/**
1. Write a program to print each number from 25 to 85 and whether it is odd or even. The sample output would be: 25 - odd, 26 - even, etc. Hint: Use a for loop.
*/


function forLoops1() {

  var evenOdd = null;
  for (var i = 25; i <= 85; i++) {
    if (i % 2 === 0) {
      evenOdd = "even";
    }
    else {
      evenOdd = "odd";
    }
    console.log(i + " - " + evenOdd);
  }

}

/**
* 2. Given a number, determine if it is a prime number or not. A prime number is a natural number * larger than 1 that is only divisible by 1 and itself. Hint: Use a for loop to try to divide the * number from 2 to that number.
*/

function forLoops2(num) {

  for (var i = 2; i <= num; i++) {
    if ( num % i === 0 && num !== i ) {
      return "not prime";
    } else {
      return "prime";
    }
  }
}

/**
* 3. Print all the prime numbers between 1 and 500. Hint: Use nested for loops.
*/

function fl3(number) {

  var primeNums = [];

  for (var i = 2; i < number; i++) {
    primeNums[i] = true;
  }

  var squareRoot = Math.sqrt(number);
  for (var i = 2; i < squareRoot; i++) {
    if (primeNums[i] === true) {
      for (var j = i * i; j < number; j += i) {
        primeNums[j] = false;
      }
    } 
  }
  for (var i = 2; i < number; i++) {
    if (primeNums[i] === true) {
      console.log(i);
    }
  }
}

/**
* 4. Print all the leap years between year 1000 and year 5000.
*/

function fl4() {

var startRange = 1000;
var endRange = 5000;
var leapYears = [];

  for (var i = startRange; i < endRange; i++) {

    if ( (i % 100 === 0) && (i % 400 === 0) ) {
      leapYears.push(i);
    } else if ( (i % 4 === 0) && (i % 100 !== 0) ) {
      leapYears.push(i);
    }
  }
  console.log(leapYears);
}

/**
* 5. Given an array and an item, write a program to determine whether or not the item exists in the array. The array contains items of different types. Sample input: [1, 7, "a", 9] and 7; Sample output: true.
*/

function fl5(response) {

  var item = response;
  var array = [6, 2, "hello"];

  for (var i = 0; i < array.length; i++) {

    if ( item === array[i]) {
      return "true";
    }
  }
  return "false";
}

/**
* 6. Write a program to calculate the product of the items of a number array. Sample input: [1, 7, -2, 9] and 7; Sample output: -126.
*/

function fl6() {
  var array = [6, 3, -2];
  var product = 1;

  for (var i = 0; i < array.length; i++) {

    product *= array[i];

  }
  console.log(product);
}

/**
* 7. Write a program to print the last 10 elements of an array. If the array size is less than 10, print the full array. Make sure you test your code with array size 10, less than 10, and greater than 10.
*/

function fl7() {
  
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var arrayTest = [6, 4, 10];

  for (var i = array.length - 10; i < array.length; i++) {
    if (i >= 0) {
      console.log(array[i]);
    }
  }
}





/*------------------------------------*\
  #THE-WHILE-LOOP
\*------------------------------------*/

/**
* 1. Print the first 100 numbers that are divisible by either 3 or 5, but not by both. Use the do...while loop to implement it.
*/


function wl1() {
  
var i = 1;

do {
  if ( ( i % 3 === 0 || i % 5 === 0 ) && !(i % 3 === 0 && i % 5 === 0 ) ) {
      console.log(i);
      
  }
  i++;
}
while (i < 100);

}


/**
* 2. Print the first 500 prime numbers. Hint: Use nested loops.
*/

/* while loop to find first n primes */

function wl22(n) {

  function isPrime(num) {
    // var squareRoot = Math.sqrt(num);
    if (num < 2) {
      return false;
    } 
    var i = 2;
    while ( i < num ) {
      if (num % i === 0) {
        return false;
      }
    i++;
    }
    return true;
  }

  var count = 0;
  var k = 0;
  while (count < n) {
    if (isPrime(k)) {
      console.log(k);
      count++
    }
    k++;
  }

}



/* while loops to find all primes < n */

function wl2(n) {

  var b = 2;
  var primeNums = [];
  while (b < n) {
    primeNums[b] = true;
    b++;
  }

  console.log(primeNums.length);

  var i = 2;
  var squareRoot = Math.sqrt(n);
  while ( i < squareRoot ) {
    var j = i * i;
    if (primeNums[i] === true) {
      while (j < n) {
        primeNums[j] = false;
        j += i;
      }
    }
    i++;
  }

  console.log(primeNums);
  
  var k = 2;
  while(k < n) {
    if (primeNums[k] === true) {
      console.log(k);
    }
    k++;
  }
}

/**
* 3. Print the first 20 leap years after the year 1000. Use either a while or a do...while loop.
*/


function wl3() {

  var i = 1000;
  var count = 0;

  while (count < 20) {
    if (i % 100 === 0 && i % 400 === 0) {
      console.log(i);
      count++;
    } else if (i % 4 === 0 && i % 100 !== 0) {
      console.log(i);
      count++;
    }
    i++;
  }
}



/**
* 4. Write a program to find the minimum and maximum value of a number array using a while or a do...while loop. Hint: Use a loop to iterate through each item of the array; at each iteration check if the current item is larger than the maximum up to that iteration- if so, update the maximum; use similar logic for canculating the minumum.
*/

function wl4() {

  var i = 0;
  var array = [3, 2, 1, 4, 5];
  var min = array[0];
  var max = array[0];

  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
    i++;
  }

  console.log(min);
  console.log(max);

}

/**
* 5. Given an array of numbers, print all the pairs of numbers in that array that sum to 10. For example, for the array [2, 4, 8, 7, 6] the output is: (2, 8), (4, 6). Hint: You need to use nested loops and check every item with the rest of the items.
*/

function wl5() {

  var array = [6, 2, 1, 4, 5];

  var i = 0;
  while (i < array.length) {
    var j = 0;
    while (j < array.length) {
      if ( (array[i] + array[j] === 10)  && (i !== j) && (j > i) ) {
        console.log(array[i] + ", " + array[j]);
      }
      console.log(j);
      j++;
    }
    i++;
  }
    
}





/*------------------------------------*\
  #ERROR-HANDLING-IN-JAVASCRIPT
\*------------------------------------*/


/**
* 1. The following code generates an error randomly, and as a result, the last line does not always print. How can you fix this code so that the last line always prints?
*/

function eh1() {
  
  try {
    if (Math.random() < 0.5) {
      console.log("print success");
    } else {
      throw "random error";
    }
  }
  finally {
    console.log("must print");
  }
}




/**
* 2. How would you rewrite the above code to print "print failure" in case of an error?
*/

function eh2() {
  
  try {
    
    if (Math.random() < 0.5) {
    console.log("print success");
    } else {
      throw "print failure";
    }
  }
  catch(err) {
    console.log("Following error occurred and handled: " + err);
  }
  finally {
    console.log("must print");
  }
  
}


/*------------------------------------*\
  #INTRODUCTION-TO-FUNCTIONS
\*------------------------------------*/


/**
* 1. Similar to the filter function discussed in this section, write a function that takes an array and a callback function. Apply the callback on each item of the array, create a new array with the modified values, and return it. The function has the following syntax: map(arr, callback). Here's an example:
*/


// callback function performs the for each operation
function map(arr, callback) {
  
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
 
var numbers = [1, 2, 3, 4];
// map function applies the callback function on each array item
var map1 = map(numbers, function(item) {
  return item * item;
});


/**
* 2. Given an array of numbers, determine if each number of the array is odd or even. Use the map function from the previous example to solve it. Sample input: [1, 4, 9, 16]; Sample output: ["odd", "even", "odd", "even"].
*/

var map2 = map(numbers, function(item) {
  if (item % 2 === 0 ) {
    return "even";
  } else {
    return "odd";
  }
})






/*------------------------------------*\
  # NUMBERS-IN-DEPTH
\*------------------------------------*/


/**
* 1. Without using Math.abs(), write a function that converts any number to a positive number.
*/

function n1() {
  
   var num = -3;

   if (num < 0) {
     console.log (-num);
   } else {
     console.log(num);
   }
}


/**
* 2. Using Math.random(), write a function that returns a random number between any 2 numbers. For example, random(-10, 99) returns a random number between -10 and 99.
*/

function n2() {

  var rand = Math.random();

  var a = -3;
  var b = 5;

  return Math.floor((b - a + 1) * rand) + a;

}


/**
* 3. Write a function that returns a integer number between any two numbers. For example, randomInt(-10, 99) returns a random integer, e.g., 77, between the numbers -10 and 99.
*/

function n3(a, b) {

  return Math.floor(Math.random() * (b - a + 1)) + a; 

}



/**
* 4. Write a function to get a random item from an array. Hint: Use the randomInt(...) from the previous exercise.
*/

function n4() {

  var arr = [2, 4, 6, 8, 10];

  return arr[n3( 0, arr.length )];

}

/**
* 5. Write a function to check if a number is a power of 2 or not. Hint: Use a loop to keep dividing the number by 2.
*/

function n5(num) {

  if (num < 4) {
    return "not a power of 2";
  }

  while (num >= 2) {
    num = num / 2;
    if (num === 2) {
      return "power of 2";
    }
  }
  return "not a power of 2";
}





/*------------------------------------*\
  # JAVASCRIPT-STRINGS-IN-DEPTH
\*------------------------------------*/


/**
* 1. Given a string, print the list of words in that string. Note that punctuations, such as dot(.), comma(,), etc., are not parts of a word. Sample Input: "JavaScript is awesome!"; Sample output: "JavaScript", "is", "awesome"
*/

function s1(sentence) {

  return sentence.split(" ");
}

/**
* 2. Write a function that returns the number of digits in an integer. Sample Input: 12456734; Sample output: 8
*/

function s2(num) {

  return num.toString().length;

}

/**
* 3. Write a function that removes all spaces from the beginning and the end of a string.
*/

function s3(str) {

  return str.trim();

}

/**
* 4. Given a string, abbreviate the last word of the string using the first letter and a dot(.). Sample Input: John Doe; Sample Output: John D.;
*/

function s4(str) {

  var arr = str.split(" ");
  var last = arr[arr.length - 1].charAt(0) + ".";

  arr[arr.length - 1] = last;
  arr = arr.join(" ");
  return arr;

}

/**
* 5. Write a function that masks an email address. If the length of the email address (before the @) is more than five, mask it by using only the first five letters, then an elipsis (...), then the @ symbol and the rest. If it is fewer than five, keep only the first letter of the email address before the elipsis. For example, johndoe@gmail.com is masked as johnd...@gmail.com, doe@gmail.com is masked as d...@gmail.com. */

function s5(email) {

  var atPosition = email.indexOf("@");
  
  if (atPosition > 5) {
    var slice = email.slice(5, atPosition);
    email = email.replace(slice, "...");
  } else {
    var slice = email.slice(1, atPosition);
    email = email. replace(slice, "...");
  }
  return email;
}


/**
* 6. Write a function to convert a string to its camel case. For example, "Hi there" should be converted to "hiThere."
*/

function s6(str) {

  var arr = str.split(" ");

  var lowerCase = arr[0];
  lowerCase = lowerCase.charAt(0).toLowerCase() + lowerCase.slice(1);
  arr[0] = lowerCase;

  for (var i = 1; i < arr.length; i++) {
    var upperCase = arr[i];
    upperCase = upperCase.charAt(0).toUpperCase() + upperCase.slice(1);
    arr[i] = upperCase;
  }

  arr = arr.join("");
  return arr;
}

/**
* 7. Write a function to convert a string to its underscore notation, where each word is lowercase and separated by underscore (_). For example, "Hi there" should be converted to "hi_there."
*/

function s7(str) {

  str = str.toLowerCase();
  str = str.replace(/ /g, "_");
  return str;
}

/**
* 8. Write a function to convert a camel case to the underscore notation. For example, "hiThere" should be converted to "hi_there."
*/


function s8(str) {

  var arr = [];
  var count = 0;

  // add upper case letters to array, account for extra underscore chars.

  for (var i = 0; i < str.length; i++) {

    if (str[i] === str[i].toUpperCase()) {
      arr.push(i + count);
      count++
    }
  }

  // add underscore for each upper case instance

  for (var j = 0; j < arr.length; j++) {
    str = str.slice(0, arr[j]) + "_" + str.slice(arr[j]); 
  }
  str = str.toLowerCase();
  return str;
}




/*------------------------------------*\
  # JAVASCRIPT-OBJECTS-IN-DEPTH
\*------------------------------------*/


/**
* 1. Create objects for three courses: Introduction to JavaScript, Introduction to CSS, and Introduction to HTML. Each course must have a duration, number of students, and the name of the instructor. What object creation method are you going to use and why? Print different properties of these objects.
*/

function o1() {

  function Course(course, instructor, duraction, headcount) {
    this.course = course;
    this.instructor = instructor;
    this.duration = duraction;
    this.headcount = headcount;
  }

  var javascript = new Course("Intro to JavaScript", "Bill", "1w", 50);
  var css = new Course("Intro to CSS", "Jen", "1w", 40);
  var html = new Course("Intro to HTML", "Megan", "2w", 60);

  console.log(javascript);
  console.log(Object.keys(javascript));

}

/**
* 2. Suppose you are designing software for a library. The library has a name, an address, lots of books, and customers who borrow books. Every book has a name, author name, and type. Every customer is required to provide a name, an email address, and his/her age to borrow books. Describe the data types you would use to design the library software.
*/

/*
Boolean - flag data (e.g. overdue)
Number - numeric data (e.g. age)
String - for all the textual data
Object - to store and associate data
*/

/**
* 3. Write a function merge(obj1, obj2) that merges the properties of two objects. If both objects have the same property pick the property of obj2. For example, merge({'a': 1, 'b': 2}, {'b': 3, 'c': 7}) results in {'a': 1,, 'b': 3, 'c': 7}
*/

function o3() {

  var obj1 = {
    'a': 1,
    'b': 2
  }
  var obj2 = {
    'b': 3,
    'c': 7
  }
  var result = {};

  function merge(obj1, obj2) {

    for (var i in obj1) {
      result[i] = obj1[i];
    }
    console.log(result);
    for (var j in obj2) {
      if (result[j] = obj2[j]) {
        result[j] = obj2[j];
      }
    }
    console.log(result);
  }
  return merge(obj1, obj2);

}

/**
* 4. Write a function called omit(object, props), which is the opposite of pick. It returns a new object with properties that are not in the props array. For example, omit({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])) returns {'b': '2'}.
*/

function o4() {
  
  var obj = {
    'a': 1,
    'b': 2,
    'c': 3
  }
  var arr = ['a', 'c'];
  
  function omit(object, props) {

    for (var i = 0; i < props.length; i++) {
      delete obj[props[i]];
    }
    return(object);
  }
  return omit(obj, arr);
}

/**
* 5. Write a function called values(object), which is similar to Object.keys(...), but it returns the list of values of the properties of the object. For example, values({'a': 1, 'b': 2}) results in [1, 2].
*/

function o5() {

  var result = [];
  var obj = {
    'a': 1,
    'b': 2
  }
  function values(object) {
    for (var i in object) {
      result.push(object[i]);
    }
    return result;
  }
  return values(obj);
}



/*------------------------------------*\
  # JAVASCRIPT-DATES-IN-DEPTH
\*------------------------------------*/

/**
* 1. Write a function to get the number of days in a month. The input of this function is a Date object and the output is a number.
*/

// example input date "2016-08-03"

function d1(d) {
  var d = new Date(d);
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}


/**
* 2. Write a function to get the month name of a date. Sample output: March
*/

function d2() {

  var d = new Date();
  var month = d.getMonth();

  function monthName() {
    
    switch(month) {
      case 0:
        return "January";
        case 1:
          return "February";
        case 2:
          return "March";
        case 3:
          return "April";
        case 4:
          return "May";
        case 5:
          return "June";
        case 6:
          return "July";
        case 7:
          return "August";
        case 8:
          return "September";
        case 9:
          return "October";
        case 10:
          return "November";
        case 11:
          return "December";
        default:
          return "wtf";
    }
  }
  return monthName(d);
}



/**
* 3. Write a function to add minutes to a date. The input of this function is a Date object and the output is also a Date object.
*/

function d3() {

  var d = new Date();

  function addMinutes(d) {
    return d.setMinutes(20).toString();
  }
  return addMinutes(d);
}



/**
* 4. Write a function to print the current day of the week. Sample output: Sunday
*/

// example input date "date1"

function d4(d) {
  
  var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return arr[d.getDay()];
}


/**
* 5. Write a function to calculate the last day of a month. The input of this function is a Date object and the output is a string representing the day, e.g., Sunday
*/

// example input date "date1"
var date1 = new Date("2016-07-03");

function d5(date) {

  var newDate = new Date(date);
  newDate.setDate(d1(newDate));
  return d4(newDate);
}

/**
* 6. Given an array of dates, find the most recent date.
*/

var arrayDates = [new Date("2016-03-03"), new Date("2016-07-03"), new Date("2016-07-20")];

function d6(arr) {

var currentDate = new Date();
var mostRecent = null;

  for (var i = 0; i < arr.length; i++) {
  
    if ( (arr[i] > arr[i - 1]) && (arr[i] < currentDate) ) {
      mostRecent = arr[i];
    }
  }
  if (mostRecent === null) {
    return "All dates are in the future";
  }
  return mostRecent;
}


/**
* 7. Write a function to count the number of days passed since the beginning of the current year.
*/

function d7() {

  var currentDate = new Date();
  var begDate = new Date(currentDate.getFullYear(), 0, 0);
  console.log(begDate);

  return Math.floor( (currentDate - begDate) / 1000 / 60 / 60 / 24 );

}

/**
* 8. Given the date of birth, write a program to calculate age.
*/

// Example: d8(new Date(1981, 01, 22));

function d8(dob) {

  return Math.floor( (new Date() - dob) / 1000 / 60 / 60 / 24 / 365 );

}


/*------------------------------------*\
  # JAVASCRIPT-ARRAYS-IN-DEPTH
\*------------------------------------*/


/**
* 1. Convert a 2D array to a 1D array. Sample Input: [[1 , 2, 3],[4 , 5, 6],[7 , 8, 9]]; Sample Output: [1 , 2, 3, 4 , 5, 6, 7 , 8, 9]. Hint: Use nested loops.
*/

var arr2d = [[1, 2, 10], [4, 5, 6], [7, 8, 9]];

function a1(arr) {

  var arr1d = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      arr1d.push(arr[i][j]);
    }
  }
  return arr1d;
}

/**
* 2. Write a program to shuffle an array. Hint: Use Math.random().
*/

var a2Array = [1, 2, 3, 4];

function a2(arr) {

  var randArray = [];
  for (var i = 0; i < arr.length; i++) {
    randArray.push( Math.floor( Math.random(arr[i]) * (arr.length) + 1) );
  }
  return randArray;
}


/**
* 3. Write a program that removes all the *falsy values* from an array. In JavaScript the following are considered falsy values: false, 0, "", null, undefined, and NaN. Hint: Use filter method described above.
*/



function a3(arr, callback) {

  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i]))  {
      result.push(arr[i]);
    }
  }
  return result;
}

var a3Array = [true, 10, false, 0, "", null, undefined, NaN];
var truthy = a3(a3Array, function(item) {
  return item != false && item !== null && item !== undefined && !(isNaN(item));
});


/**
* 4. Vector addition is when the corresponding members of two arrays are added. For example, the vector addition of [3, 5, 7] and [2, 1, 9] is [5, 6, 16]. Write a program to perform the vector addition of two arrays.
*/

var a4Array1 = [3, 5, 7];
var a4Array2 = [2, 1, 9];
var a4Result = a4(a4Array1, a4Array2);

function a4(a4Array1, a4Array2) {

  var result = [];

  for (var i = 0; i < a4Array1.length; i++) {
      result.push(a4Array1[i] + a4Array2[i]);
  }
  return result;
}

/**
* 5. Suppose a set is defined as an array with no duplicate element in it. Write a program to find the union of two sets. It should be noted that neither the input sets nor the output set is ordered. For example, the union of [1, 2, 3] and [2, 4] is [1, 2, 3, 4].
*/

function a5(arr1, arr2) {

  var result = arr1.concat(arr2);
  result.sort(function(a, b) { return a-b });

  for (var i = 0; i < result.length; i++) {
    if ( areEqual(result[i+1], result[i]) ) {
      result.splice(i, 1);
    }
  }
  return result;
}

function areEqual(item1, item2) {
  return item1 === item2;
}

var a5Array1 = [1, 2, 3];
var a5Array2 = [2, 4];
var a5Result = a5(a5Array1, a5Array2);

/**
* 6. Suppose a set is defined as an array with no duplicate element in it. Write a program to find the common items (known as an intersection) of two sets. It should be noted that neither the input sets nor the output set is ordered. For example, the intersection of [1, 2, 3] and [2, 4] is [2].
*/

function a6(arr1, arr2) {

  var array = arr1.concat(arr2);
  array.sort(function(a, b) { return a - b });
  result = [];

  for (var i = 0; i < array.length; i++) {
    if ( areEqual( array[i+1], array[i] ) ) {
      result.push(array[i]);
    }
  }
  return result;
}
var a6Result = a6(a5Array1, a5Array2);



/**
* 7. Suppose a set is defined as an array with no duplicate element in it. Write a program to find items that exist in the first array but do not exist in the second array (known as the difference). It should be noted that neither the input sets nor the output set is ordered. For example, the difference of [1, 2, 3] and [2, 4] is [1, 3].
*/

function a7(arr1, arr2) {

  var result = arr1;

  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (result[i] === arr2[j]) {
        result.splice(i, 1);
      }
    }
  }
  return result;
}

var a7Result = a7(a5Array1, a5Array2);

/**
* 8. In the US, a comma (,) is used as the thousand separator. For example, 3,398,763.89. Write a function that takes such strings and converts them to numbers. Write another function that takes a number and converts it to such a string.
*/

/* US number to string */

function addComma(n) {

  var str = n.toString().split("");
  var dotPosition = 0;

  for (var i = 0; i < str.length; i++) {
    if ( str[i] === "." ) {
      dotPosition = i;
    }
  }

  for (var j = dotPosition - 3; j >= 0; j -= 3) {
    str.splice(j, 0, ",");
  }
  // console.log(str);
  var result = str.join("");
  return result;
}
var a8ToString = addComma(1000000.22);

/* US string to number */


function removeComma(s) {
  var arr = s.split(",");
  var num = Number( arr.join("") );
  return num;
}
var a8ToNum = removeComma("1,000,000.22");


/**
* 9. In many European countries, the dot (.) is used as the thousand separator and a comma (,) is used as the decimal. For example, 3.398.763,89. Write a function that takes such strings and converts them to numbers. Write another function that takes a number and converts it to such a string.
*/

/* European number to string */

function a9A(n) {

  var str = n.toString().split("");
  var dotPosition = 0;

  for (var i = 0; i < str.length; i++) {
    if ( str[i] === "." ) {
      dotPosition = i;
    }
  }

  for (var j = dotPosition - 3; j >= 0; j -= 3) {
    str.splice(j, 0, ".");
  }
  str[str.length - 3] = ",";
  var result = str.join("");
  // result = result.replace(".", ",");
  return result;
}
var a9ToString = a9A(3398763.89);






/* European string to number */

function a9B(s) {
  
  var arr = s.split(".");
  var newString = arr.join("");
  var replace = newString.replace(",", ".");
  var num = Number(replace);
  return num;
}
var a9ToNum = a9B("3.398.763,89");