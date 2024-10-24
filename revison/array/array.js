// push-last add
let arr1=[];
for(let i=1;i<=10;i++){
    arr1.push(i)
}
arr1.push(11,12,13);
console.log(arr1);

// unshift-first add
let arr2=[];
for(let i=1;i<=10;i++){
    arr2.unshift(i);
}
arr2.unshift(11);
console.log(arr2);

// splice-remove 
let arr3=[1,2,3,4,5];
arr3.splice(2,2);
console.log(arr3);

// splice-add
let arr4=[1,2,3];
arr4.splice(1,0,4,5)
console.log(arr4);

// pop-last remove
let arr5=[1,2,3,4,5];
arr5.pop();
console.log(arr5);

// shift-firat remove
let arr6=[1,2,3,4,5]
arr6.shift();
console.log(arr6);

// slice-bich wala chye to
let arr7=[1,2,3,4,5];
let arr8=arr7.slice(1,3);
console.log(arr8);

// concat-arr ne murch krva
let arr9=[1,2,3,4,5];
let arr10=[6,7,8,9,10];
let arr11=arr9.concat(arr10);
console.log(arr11);

// sort
let arr12=[1,9,3,7,5,6,2,4,8,10,0];
arr12.sort((a,b)=>a-b);
console.log(arr12);

// push & unshift
let arr=[];
for(let i=1;i<=10;i++){
    if(i%2==0){
        arr.push(i);
    }
    else{
        arr.unshift(i);
    }
}
console.log(arr);