const myArr = [1 , 4 , ['dev' , 'lavish']  , ['dhiraj', 'adi']]
// const myArr = [1 , 4 , 'dev' , 'lavish'  , 'dhiraj', 'adi']

// console.log(myArr[2][0]);
// console.log(myArr[3][1]);

const arr = myArr.flat(Infinity)
// console.log(arr);


// splice and slice ke bare mai hota kya hai ye sab 

// slice 
const ar = ['hello' , 'world' , 'new' , 'jio' , 'heart']

const arrr = ar.slice(1 ,3)
// console.log(arrr);
console.log(ar)

//splice
const arrrr = ar.splice(0,4)
// console.log(ar.splice(0,3));
console.log(ar);


// slice mai change nhi hota original array
// splice mai ho jata hai 

