// for(let i of [1,2,3,4,5,6,7,8,9,10]) console.log(i);

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number(12345678910));

// function getSum(arr1, arr2){
//     let sum = 0;
    
//     for (let i=0; i < arr1.length; i++){
//     sum += arr1[i];
//     }
//     for (let i=0; i < arr2.length; i++){
//     sum += arr2[i];
//     }
  
//     return sum
//     }
  
//     getSum([1,2,3] , [5,66,23]);

// console.log(
//     [1,2,3].reduce(function(acc, val) { return acc + val; }, 0)
//   )
  
//   console.log(
//     [].reduce(function(acc, val) { return acc + val; }, 0)
//   )

// let numArray = [140, 10, 99];
// numArray.sort(function(a, b) {
//   return b-a;
// });

// console.log(numArray);

// new Array(100).fill().map((_, i) => console.log(i + 1));

// let numbers = [1, 4, 5];

// const multi = arr => {
//     let mul = 1;
//     for (let i = 0; i < arr.length; i++) {
//         console.log( arr[i]*10)
//         mul *= arr[i];
//     }
//     return mul;
// }

// console.log(multi(numbers));


// const
//     data = { 0: 0, 1: -1, 2: 2, 3: -1 },
//     result = Object.assign({}, Object.values(data).filter(v => v >= 0));

// console.log(result);

// let removeNegative = (arr) => {return arr.filter(x => x <0)
// }
// arr1 =(1, -2, 10, 4)

// console.log(removeNegative(arr1));

// const pos = (arr) =>{
//     return arr.filter(x =>{
//         return x>0
//     }).sort(x =>{(a,b)
//         return (a-b)
//     })
// }

// console.log(pos([2,-4, 5, -1]));

console.log(Math.max(1, 3, 2));

// let array = [ 56, 32, 5, 89, 32];
// let largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         let largest=array[i];
//     }
// }

// console.log(largest);

// let array = [3 , 6, 2, 56, 32, 5, 89, 32, 9], largest;
// array.sort(function(a, b) {
//    largest = a < b ? a: b;
// });
