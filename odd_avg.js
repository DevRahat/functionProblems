function oddAvg(numbers){
    const nums=[];
    let sum=0;
    for(const num of numbers){
        if(num%2 !==0){
            nums.push(num);
            
        }
    }
    
    for(const num of nums){
        sum=sum+num;
    }
    const counts=nums.length;
    const avg=sum/counts;
    return avg;
}

const numbers=[12,31,33,47,23,40];

const odds=oddAvg(numbers);

console.log(odds);