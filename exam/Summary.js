'use strict';

/*--------------------------------------------------------
1. Write an action that gets numbers from 0-100 inclusive
---------------------------------------------------------*/

// first option:

// const func = () =>{
//        //1    2 until 100-101/<=100  4 val+1
//     for(let val=0 ; val<101 ; val++){
//         console.log(val);//3
//     }       
// }

// console.log(func());

// 0->100

const func = ()=>{ 
    //1    2 until 100-101/<=100  4 val+1
    for(let val=0 ; val<101 ; val++){
       if(val %2 ==0){
        console.log(val);//3   
       }
    }  
      
}


    
