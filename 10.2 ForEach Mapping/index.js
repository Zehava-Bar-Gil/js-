/*------------------------------------------------------
 Write a function called doubleValues which accepts an
 array and returns a new array with all the values in the
 array passed to the function doubled.
 ------------------------------------------------------*/
//  function doubleValues(array) {
//     return array.concat.apply([], array.map(function (twice) { return [twice, twice] }));
//  }
 
//  console.log(doubleValues(['Zehava' , 3 , 'bears']));

const mapdoubleValues = (arr)=>{
    return arr.map((val)=>{
        return val *2;
    })
}

console.log(mapdoubleValues ([1, 2,'Zehava' , 3 , 'bears']))
/*--------------------------------------------------------
Write a function called onlyEvenValues which accepts an
array and returns a new array with only the even values in
the array passed to the function.
---------------------------------------------------------*/

// const onlyEvenValues = (inputs) => inputs.filter( x => x % 2 === 0 );

// console.log(onlyEvenValues([5, 10, 15, 20, 25]))

    
// let arr = [5, 10, 15, 20, 25]


function onlyEvenValues(arr){
    const arr2 = [];
      arr.forEach((val) => {
        if(val % 2 === 0) arr2.push(val);
      });
      return arr2;
      
    }
    console.log(onlyEvenValues([5, 10, 15, 20, 25]))

/*---------------------------------------------------
Write a function called showFirstAndLast which accepts
an array as an argument and returns a new array with only
the first and last elements from the function’s argument
array. The returned array should only contain elements that
are strings.
---------------------------------------------------------*/

const showFirstAndLast = (arr) =>{
let FirstAndLast = [];
let temp = [];  
arr.forEach((element)=>{
    if(typeof element === "string"){
        temp.push(element)
     }
  })
  FirstAndLast.push(temp[0]);
  FirstAndLast.push(temp.pop())
  return FirstAndLast;
}

console.log(showFirstAndLast(['Zehava', 2, 'Bar', 4, 'Gil', 6, 'Web']));

/*----------------------------------------------------------
Write a function called vowelCount which accepts a
string as an argument. The function should return an object
which has the count of the number of vowel’s that are in
the string. The key should be the vowel and the value
should be the count. e.g. {a:3, o:2,u:4}.
Should not be case sensitive
--------------------------------------------------------*/
const vowelCount =(str) =>{
    //a, e. o, u, i
  let strArr = str.split('');
  let vowel = {a:0, e:0, o:0, u:0, i:0};
    strArr.forEach((ch) => {

        if(ch === 'a' || ch === 'e'|| ch === 'o' || ch === 'u' || ch === 'i')
    vowel[ch]++;
    })
    console.log(vowel)
}
    
vowelCount("abcdefghijklmnopqrstuvwxyz");

/*----------------------------------------------------
Write a function capitalize that takes a string as an
argument and will return the whole string capitalized
---------------------------------------------------*/

function capitalizeLetter(string) {
    return string.toUpperCase();
  }
  
  console.log(capitalizeLetter('zehava')); 

/*----------------------------------------------------------
Write a function called shiftLetters that takes a string as
an argument and return’s an encoded string with each
letter shifted down the alphabet by one
----------------------------------------------------------*/


  function shiftLetters(str){
    let wordList = str.split(" ");

    //console.log(wordList);

    wordList.forEach(function(word, index){
        wordList[index] = word[0].toUpperCase() + word.substring(1);
    })

    return wordList.join(' ');
  };

  let str = "zehava, how are you?";
  console.log(shiftLetters(str));

/*----------------------------------------------------------
Create a function called swapCase that takes a string as
an argument and returns a string that every other word is
capitalized. 
----------------------------------------------------------*/

function swapCase(string) {
    return string.toUpperCase();
  }
  
  console.log(swapCase('corn, pizza')); 

