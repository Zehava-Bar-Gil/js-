/*--------------------------------------------------------
Write a function that has one argument, a positive integer.
Lets call it N.
The function should console log a step shape.
With N levels using the # character. Make sure the step has
spaces on the right hand side if empty!
---------------------------------------------------------*/

const argument = (n)=>{
    for(let i=1 ; i <=n ; i++){
        let str = '';
        for(let j=1; j<=n ; j++){
            if(j<=i){

                str +='#';
            }
            else{
                str +='&';
            }
        }
        console.log(str)
    }
}

argument(20);