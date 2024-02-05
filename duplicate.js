const names=['abul','babul','kabul','abul','babul'];

const numbers=[1,5,61,5,87,1,61];

function noDuplicate(array){
    const uniqe=[];
    for(const item of array){
        if(uniqe.includes(item)==false){
            uniqe.push(item);
        }
    }
    return uniqe;
}
const unique=noDuplicate(names);
console.log(unique);