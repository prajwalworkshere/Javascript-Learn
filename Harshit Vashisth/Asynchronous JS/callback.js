/// Call Back Functions 
// Function(function)
// Function taking function as a parameter

function func1(argm){
    console.log("Function 1 is executed");

    console.log("---Gap---");
    
    argm();
}

function func2(){
    console.log("Function 2 is executed");
}
// for exeuction
func1(func2);


// ======= Annonymous Function ==========//

// With Annonymous Function
// for exeuction 

func1(function(){
    console.log("Annonymous function is called inside function 1");

});

// ============================= Addition OF 2 Numbers Using Annoymous Callback  Fuctions============================= 

function takingAddingNos(num1,num2,callback){
    console.log(num1,num2);
    callback(num1,num2);
}
// Callback Function
takingAddingNos(3,4,()=>{
    console.log(3+4);
})


