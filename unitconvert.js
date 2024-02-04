function inchToFeet(inch){
    const feet =inch/12;

    return feet;
}
const feet=inchToFeet(120);
console.log(feet);

//we can do it differently 

function inchToFeet2(inch){

    const feet=inch/12;
    const onlyfeet=parseInt(feet);
    console.log(onlyfeet);
    const inche=inch%12;
    const result=onlyfeet + " feet " + inche + " inch ";
    return result;    
}
const finalResult=inchToFeet2(75);
console.log(finalResult);