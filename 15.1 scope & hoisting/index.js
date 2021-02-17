/*-----
Block 1
------*/
// funcA();//I can call the function from above -Global function
// var a = 1;//1 -If I'll put var a=1 above fun', the result will be 1 & 2 
function funcA() {
a = 1; //I'm remove var and I'm put above console, the result will be a=1, without var -global var  
console.log(a); //undefined
console.log(foo());//2

function foo() {
return 2;
  }
}

funcA();

/*-----
Block 2
------*/

var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;//this = prop, if I'll remove this the result will be 'John Doe'
}
}
};
console.log(obj.prop.getFullName());//'Aurelio De Rosa' -prop 
var test = obj.prop.getFullName();//undifind
console.log(test);

/*-----
Block 3
------*/
//var a=1//If I'll put var =a above fun', the result will be a=num', because it's a global fun'
function funcB() {
a = b = 0;//inner - a belongs to funcB, b=var (any)
a++;
return a;
}
funcB();
console.log(typeof a); //undefined
console.log(typeof b);//number

/*-----
Block 4
------*/

function funcC() {
    console.log("1");
    }
    funcC();
    function funcC() {
    console.log("2");
    }
    funcC();//The call always refer to the last function, because of that the result: 2, 2

/*-----
Block 5
------*/

function funcD1() {
    d = 1;
    }
    funcD1();
    console.log(d);
    function funcD2() {
     e = 1;//I remove var -it's inner block scope, because var -global 
    }
    funcD2();
    console.log(e);//undefind

/*-----
Block 6
------*/ 
var f = 1//I remove to above fun', because it's a global scope
function funcE() {
    console.log("Value of f in local scope: ", f);
    }
    console.log("Value of f in global scope: ", f);
    // var f = 1;//undefind
    funcE();