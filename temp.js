// let a=5;
// let b=7;
// console.log(a, b);

// a=b;
// b=a;
// console.log(a , b);

// let a=5;
// let b=7;

// let temp=a;
// a=b;
// b=temp;
// console.log(a, b);

let x=5;
let y=7;
console.log(x, y);

[x, y]=[y, x];
console.log(x, y);

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },100);
}
console.log(Math.pow(2,3));
