function leapYear(year){
    if(year%100 !==0 && year%4==0){
        
        console.log("Your", year ,"is a leapYear");
    }else{
        console.log("Your", year ,"is not leapYear");
    }
    
}

leapYear(2024);
leapYear(2019);

