'use strict';

/*----------------------------------------------------------
 to count over all the letters and return an object with the
 letter as the key and the letter count as the value
------------------------------------------------------------*/

const arr = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"]; 

function CountLetter(arr){

    let counter =0;
    let result_obj = {};
    let letter;
    let non_repeat_arr = [];
    let arr_cpy = arr.join('');         // merge the strings 
    arr_cpy = arr_cpy.toLowerCase();    // make it lower case              

    for (let i = 0; i < arr_cpy.length; ++i)
    {
        letter = arr_cpy[i]; 
                                                                 
        if (!(non_repeat_arr.includes(letter)) && letter != ' ')  // remove space 
        {     non_repeat_arr.push(letter);                        // add to the array the diffrent letter
              counter = 1;
                
            for (let j = i + 1; j < arr_cpy.length; ++j)
            {
                if (arr_cpy[j] == letter)
                {
                    ++counter;
                }
            }
        
            result_obj[letter] = counter;
        }
    }
    return (result_obj);
}

/*----------------------------------
This function find the maximum value 
-----------------------------------*/

function MaxValue(obj)
{   
    let max = 0;
    let index = 0;
    for (let i in obj)
    {
        if (obj[i] >= max)
        {
            max = obj[i];
            index = i;
        }
    }
    return (index);
}

/*---------------------  GeneralFunction  --------------------------*/

function GeneralFunction()
{
    'use strict';
    let res_obj = {};
    res_obj = CountLetter(arr);
    console.log(res_obj);

    let max_index = MaxValue(res_obj);
    console.log('The maximum value is: ' + res_obj[max_index]);

}; GeneralFunction();


