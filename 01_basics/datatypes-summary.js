// In JavaScript, data types are classified into two main categories: primitive and non-primitive (also known as reference) data types. Understanding the difference between these two is crucial for effective programming in JavaScript.

// ### Primitive Data Types

// Primitive data types are the most basic data types in JavaScript. They include:

// 1. **Number**: Represents both integer and floating-point numbers. Example: `42`, `3.14`.
// 2. **String**: Represents sequences of characters. Example: `"Hello, World!"`.
// 3. **Boolean**: Represents logical values `true` and `false`.
// 4. **Undefined**: Represents a variable that has been declared but not assigned a value.
// 5. **Null**: Represents the intentional absence of any object value.
// 6. **Symbol** (ES6): Represents a unique and immutable value often used as a key for object properties.
// 7. **BigInt** (ES11): Represents whole numbers larger than the safe integer limit for Numbers.

// #### Characteristics of Primitive Data Types:

// - **Immutability**: Once a primitive value is created, it cannot be changed. For example, when you manipulate a string, a new string is created rather than modifying the existing one.
// - **Storage**: Primitive values are stored directly in the location that the variable accesses.
// - **Comparison**: Primitive values are compared by their actual values.

// ### Non-Primitive Data Types

// Non-primitive data types, also known as reference data types, include:

// 1. **Object**: Represents collections of key-value pairs. It includes arrays, functions, and objects.
//    - **Array**: An ordered list of values.
//    - **Function**: A block of code designed to perform a particular task.
//    - **Date**: Represents dates and times.
//    - **RegExp**: Represents regular expressions.

// #### Characteristics of Non-Primitive Data Types:

// - **Mutability**: Non-primitive values can be modified. For example, properties of an object can be added, changed, or removed.
// - **Storage**: Non-primitive values are stored as references. When you assign or pass a non-primitive data type, you're working with a reference to the location where the data is stored, not the actual data itself.
// - **Comparison**: Non-primitive values are compared by reference, not by value. Two different objects with the same properties are not considered equal because they do not reference the same object in memory.

// ### Key Differences

// 1. **Immutability**:
//    - Primitive: Immutable (cannot be changed after creation).
//    - Non-Primitive: Mutable (can be changed after creation).

// 2. **Storage**:
//    - Primitive: Stored directly in the variable.
//    - Non-Primitive: Stored as a reference to the memory location.

// 3. **Comparison**:
//    - Primitive: Compared by value.
//    - Non-Primitive: Compared by reference.

// 4. **Memory**:
//    - Primitive: Typically use less memory and are faster to access.
//    - Non-Primitive: Use more memory and are slower to access due to indirection through references.

// ### Example:

// ```javascript
// // Primitive data types
// let a = 5;
// let b = a;
// b = 10;
// console.log(a); // Output: 5 (a is not affected by the change to b)

// let str1 = "hello";
// let str2 = str1;
// str2 = "world";
// console.log(str1); // Output: "hello" (str1 is not affected by the change to str2)

// // Non-primitive data types
// let obj1 = { key: "value" };
// let obj2 = obj1;
// obj2.key = "newValue";
// console.log(obj1.key); // Output: "newValue" (obj1 is affected by the change to obj2)

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is affected by the change to arr2)
// ```

// In summary, primitive data types are basic types that are immutable and stored directly by value, while non-primitive data types are more complex, mutable, and stored by reference. Understanding these differences is essential for effective JavaScript programming and can help prevent common bugs related to variable assignment and comparison.


/*primitive datatypes 
number string  boolean null undefined symbol(use me make speacial or unique identity for example for button) bigint
*/

const score = 100
const scorevalue = 100.3

const isLoggedin = false;
const outsideTemp = null;
let email;

const id = Symbol("123")
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 34254145184555442287n
console.log(typeof bigNumber)




/* non-primitive datatypes (refrence)
obeject, array, functions
 */
const heros =["shaktiman","nagraj" ,"doga"]

let myObj ={
    name:"uday dhanokar",
    age : 21,
}

let myfunction = function(){
    console.log("hi")
}

console.log(typeof scorevalue)
console.log(typeof myfunction)

console.log(typeof myObj)
console.log(typeof heros)

console.log(anotherId)

//**********************Memory***************************** */

// Stack(Primitive) | Heap (Non Primitive)

let value1 = "India"
let value2 = value1
 value2 = "Russia"
console.log(value1);
console.log(value2);

let obj1 ={
    name:"uday",
    email:"udaydhanokar@gmail.com"
}

 obj2 = obj1;
 obj2.email="udaydhanokar38@gmail.com";
 
 console.log(obj1)
 console.log(obj2)

 