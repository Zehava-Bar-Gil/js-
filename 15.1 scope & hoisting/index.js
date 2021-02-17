/*-----
Block 1
------*/
var a = 1;
function funcA() {
console.log(a);
console.log(foo());
// var a = 1;
function foo() {
return 2;
}
}
funcA();

/*-----
Block 2
------*/

// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

/*-----
Block 3
------*/

// function funcB() {
// let a = b = 0;
// a++;
// return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);