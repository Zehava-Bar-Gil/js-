'use strict';

/*--------------------------------------------------------------------------------------
 1. Create array containing jumps of acrobats, each 3 numbers representative 1 jumper.
 for example : [5,5,8,7,-1,5] represent 2 jumpers. (The -1 means that the jump not accept)

2. Create function “avgJumper” that return average for each jumper
example : [6,6] (the -1 is not includes on average).

3. Create function “bestAvgJump” return the best avg jump from all jumpers.

4. Create function “bestJump” return the best jump.
 ---------------------------------------------------------------------------------------*/

 const jumpers = [5,5,8,7,-1,5];

 const  jumps = () => {
     let arr = [];

     for (let i = 0; i < jumpers.length; i++) {
        arr.push(jumpers[i])
        if ((i+1) % 3 === 0) { 
        console.log(avg(arr))  //5,5,8 =>6 //5+5+8+7+5
        arr =[];
       }  
      
    }
 }

 const avg = (arr)=>{
     let x = 0, count1 =0;

     for(let i=0 ; i < arr.length ; i++){
         
         if(arr[i] !==-1){
            count1++;
            x += arr[i];
         }
     }
     if(count1 ===0) return -1;
     return x/count1;
 }

 jumps();