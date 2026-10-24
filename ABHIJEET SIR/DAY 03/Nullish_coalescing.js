/*
1.2 Nullish coalescing (??)
Syntax:- 
let result = leftValue ?? rightValue;
Definition: The nullish coalescing operator returns the right-hand value only when the left-hand value is null or undefined.
 */


let obj=null;
let obj1=undefined;
let obj2="Due to LHS Value is null/undefined stored this";
let obj3=0;

let result1=obj??obj2;
let result2=obj1??obj2;
let result3=obj3??obj2;

console.log(result1);
console.log(result2);
console.log(result3);

/*
1.2 Logical OR (||)
Definition: The logical OR operator returns the right-hand operand if the left-hand operand is falsy. Otherwise, it returns the left-hand operand.

let result = leftValue || rightValue;

falsy values:-

null
undefined 
0
false
""  => null strings
*/

let result4=obj||obj2;
let result5=obj1||obj2;
let result6=obj3||obj2;

console.log(result4);
console.log(result5);
console.log(result6);
