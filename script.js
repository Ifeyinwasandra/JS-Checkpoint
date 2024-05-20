//Question 1: String Manuipulation Functions;

// Reverse a String: Write a function that reverses a given string;

// "chinedu" ---> "udenihc"

// function reverseString(str){
//     // using the split method to separate the string in an array
//     var splitString = str.split("");

//     // Using the reverse() method to reserve the string in an array
//     var reversedString = splitString.reverse();
//     // console.log(reversedString);
//     // Using the join() method to join all the elementsof the array
//     var joinString = reversedString.join("");
//     return joinString;
//     // console.log(joinString);
// }

// console.log(reverseString('chinedu'));


// Count Characters:

// Create a function that counts the number of characters in a string.

// var data = [1,2,3,4,5,6,7,8,9];

// var count = 0;

// for (var i = 0; i < data.length; i++) {

//     count++;

// }

// console.log(count); 

// Capitalize Words:

// Implement a function that capitalizes the first letter of each word in a sentence.

// Using the slice method;

// function capitalizeSentences(text) { 
//     const sentences = 
//         text.split(/[.!?]/) 
//             .filter(sentence => 
//                 sentence.trim() !== ''); 
//     for (let i = 0; i < sentences.length; i++) { 
//         sentences[i] = 
//             sentences[i].trim()[0].toUpperCase() + 
//             sentences[i].trim().slice(1); 
//     } 
//     return sentences.join('. ') + '.'; 
// } 
// const inputText = "hello students. welcome to my web design."
// const result = capitalizeSentences(inputText); 
// console.log(result);

//Question 2: Array Functions;

// Find Maximum and Minimum: 

// Write functions to find the maximum and minimum values in an array of numbers.

// function getMin(arr , n) 
//     {
//         return Math.min.apply(Math,arr);
//     }

//     function getMax(arr , n) {
//         return Math.max.apply(Math,arr);
//     }

//     // Driver code
    
//         var arr = [ 54, 23, 5, 44, 109, 11, 65];
//         var n = arr.length;
//         console.log("Minimum element of array: " + 
//         getMin(arr, n));
//         console.log("Maximum element of array: "
//         + getMax(arr, n));

// Create a function that calculates the sum of all elements in an array.

// using for loop method.

// const arr = [12, 84, 5, 109, 24];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);


// Implement a function that filters out elements from an array based on a given condition.

// Using the filter method;

// const numArray = [1, 2, 3, 4, 5];

// const filteredArray = numArray.filter(num => num !== 3);

// console.log(filteredArray); 


// Question 3:Mathematical Functions:

// Write a function to calculate the factorial of a given number.

// Using For loop method;

// function factorial(n) 
//     { 
//         var res = 1, i; 
//         for (i = 2; i <= n; i++) 
//             res *= i; 
//         return res; 
//     } 
  
//         var num = 5; 
//         console.log("Factorial of " + num + " is " + factorial(5)); 


// Using for loop with a flag varibale method;

// function checkPrime(num) {
//     let i, coat = true;
//     for (i = 2; i <= num - 1; i++) {
//         if (num % i == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag == true)
//         console.log(num + " is prime");
//     else
//         console.log(num + " is not prime");
// }
// checkPrime(4);
// checkPrime(5);

// Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

// Using While loop;

// function fibonacci(num) {
//     if (num == 1)
//         return 0;
//     if (num == 2)
//         return 1;
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     let i = 2;
//     while (i < num) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//         i += 1;
//     }
//     return num2;
// }

// console.log("Fibonacci(5): " + fibonacci(15));
// console.log("Fibonacci(8): " + fibonacci(18));

// Using for loop method;

// function fibonacci(num) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     if (num === 1) {
//         return num1;
//     } else if (num === 2) {
//         return num2;
//     } else {
//         for (let i = 3; i <= num; i++) {
//             sum = num1 + num2;
//             num1 = num2;
//             num2 = sum;
//         }
//         return num2;
//     }
// }

// console.log("Fibonacci(5): " + fibonacci(5));
// console.log("Fibonacci(8): " + fibonacci(8));

  


