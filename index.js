
const chai = "chai";
function receivesAFunction(callback){
    const spy = chai;

    return callback (spy);   
}
receivesAFunction(function(){return spy()});

function returnsANamedFunction()  {
    
    return function fn(){
        return fn=returnsANamedFunction();
    }
   
}
returnsANamedFunction()

 function returnsAnAnonymousFunction(){
     return function (){}
 }