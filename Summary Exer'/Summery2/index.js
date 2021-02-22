// .1 

const printToTen = () =>{
    
        for(let i=0 ; i<=10 ; i++){
            console.log(i);
        }       
    }
    printToTen();

//2. 
const printToTenRev = () =>{
    
    for(let i=10 ; i>-1 ; i--){
        console.log(i);
    }       
}
printToTenRev();

//3.
const  printToN = (n) =>{
    
    for(let  i=0 ; i<=n+1; i++){
        console.log(i);
    }       
}

printToN(20);

4//
// const printToTenIfRev = (n, isRev) =>{
//     console.log("isRev :",isRev===true)
    
//     if(isRev){
//         (let i=n ; i>-1 ; i--){
//         console.log(i);
//         }
//     } 
//     else{
//         printToN(n);
//     }      
// }

 //5 
    const printEven = () =>{
    
    for(let i=0 ; i<=31 ; i=i+2){
        // if (i % 2 === 0){
        console.log(i);
        }
    }       

printEven();

//6
// const printDevByN = (n,d) =>{
//     for(let i=0 ; i<=n+1 ; i+d){
//         // if (i % d === 0){
//         console.log(i);
//         }
//     }       


// printDevByN(70, 7);

//7
 const printArr =(arr) =>{
    for(let i=0 ; i < arr.length ; i++){
        console.log(arr[i])
    }
}

 
printArr([4, 10, 8, 7, 12]);

//8
const printArrDivByN = (arr,n) =>{
    for(let i=0 ; i < arr.length ; i++){
        if(arr[i] %n ===0){
            console.log(arr[i])
        }
    }
}

printArrDivByN([4, 10, 8, 7, 12]);

10// 
    const sumArr = (arr) =>{
    let sum = 0;
    for(let i=0 ; i < arr.length ; i++){
    sum = sum + arr [i]
    }
return sum;
}

console.log(sumArr([4, 10, 8, 7, 12]));

11//

const sumHalfArr = (arr) =>{
    let sum = 0;
    for(let i=0 ; i < arr.length/2 ; i++){
    sum = sum + arr [i]
    }
return sum;
}

console.log(sumHalfArr[4, 10, 8, 7, 12]);

12//

const maxVal = (arr) => {}
const x = 1234;

console.log(x % 10)//4
console.log((x / 10)%10)//3
console.log((x/100)%10)//2
console.log((x/1000))//1

13//
const sumOddArr = (arr) =>{
    let sum = 0;
    for(let i=0 ; i < arr.length ; i=i+2){
        if (arr[i] % 2 !==0){
            sum = sum + arr [i]
        }
    
    }
return sum;
}

console.log(sumOddArr([4, 10, 8, 7, 12]));

16// 
// const  maxSumDigit = (arr) =>{
//     let sum = 0;
//     for(let i=0 ; i < arr.length ; i++){

//     }
// }

20//



const missingNum = (numarr) => {
    for(let i = 1; i <= numarr.length; i++) {
        if(i - numarr[i-1] !== 0) {
          console.log('found it', i)
          break;
        } else if(i === numarr.length) console.log('found it', numarr.length + 1)
      }
    };
  
  console.log(missingNum([1,2,3,4,5,6,7,8,9,10,11,12,13,14]))