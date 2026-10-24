// Arrays in Javascripts
// Arrays can have all heteregenous values including number strings boolean arrays of values

let arr1= [10,20,30,"prajwal",true,10.39,[80,90]];
console.log(arr1[3]);
console.log(arr1[6][1]);

for(var i=0;i<arr1.length;i++)
    if(i==arr1.length-1){
        //condition for inner loop
       console.log(arr1[i][0]);
       console.log(arr1[i][1]);
       break;
    }
    else{
        console.log(arr1[i]);
    };

console.log("==========================");


// Array Operations

console.log("===========Array Operations ===============");

let arr2=[10,20,30,40];

arr2.push(47);

for (let index = 0; index < arr2.length; index++) {
   console.log( arr2[index]);
}
console.log("==========================");

arr2.pop();

for (let index = 0; index < arr2.length; index++) {
   console.log( arr2[index]);
}
console.log("==========================");

arr2.shift()

for (let index = 0; index < arr2.length; index++) {
   console.log( arr2[index]);
}
console.log("==========================");

arr2.unshift(45);

for (let index = 0; index < arr2.length; index++) {
   console.log( arr2[index]);
}

console.log("==========================");


// const arrays
console.log("======== Const Arrays Operation ==================");

const arr3=[10,30,50];
arr3.push(60);
arr3.push(75);

// We cant do arr3=[90,80,70]; reassignment
for (let index = 0; index < arr3.length; index++) {
   console.log( arr3[index]);
}
console.log("==========================");

// 2D Arrays 

console.log("============ 2D Arrays ==============");

let arr4 = [
[10, 20, 30],
[40, 50, 60],
[70, 80, 90]
];

for (let index = 0; index < arr4.length; index++) {
    for(let jndex=0;jndex<arr4[index].length;jndex++){
        console.log(arr4[index][jndex]);
    }
}
