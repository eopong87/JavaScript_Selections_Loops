console.log("Hello World!\n==========\n");

console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

console.log("EXERCISE 2:\n==========\n");
// Exercise 2 Section

for (let i = 1; i <= 100; i++) 
  if (1 % 3 == 0 && i % 5 == 0)  {
    console.log("FIZZBUZZ");
} else if ( i % 3 == 0)
    {
        console.log("FIZZ");
    }
    else if (i % 5== 0){
        console.log("BUZZ");
    }
    else {
        console.log(i);
    }


    //exercise 3 section
    
let number = 1;
while(number <= 100){
    if (number % 2 != 0) {
        console.log(number);
    }
    number ++;

}
/*let number = 1;
do{
  if (number % 2 !=0){
      console.log(number);
  }
  number ++;
}  
while (number <= 100);*/
    
    
    

    //exercices 4
    let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
    let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
    let isFound= false;
    for(let i = 1; i <=n; i++){
        if(i == value){
            console.log("Found Value!");
            isFound = true;
            break;
        }
        else 
        {console.log("Did not find value")
            isFound = false;

        }
    }
    if(isFound == false){
        console.log("Did not find value")
    }
    /*for (let i = 1; i <= n;){
        if(i== numberToFind){
            console.log(`found ${numberToFind}!`);
            break;
        }
        if(i== n){
      console.log(`did not find ${numberToFind} within 1-${n}...`);*/
    
    ////exercise 5
    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
    let end = Math.round(Math.random() * (1000 - 1) + 1);
    let start = Math.round(Math.random() * (10 - 1) + 1);

    console.log(start, end);

    for (let i =start; i<= end; i++){
        let output ="";
        
        if (i % fizzDivisor== 0){
            output +="FIZZ";
        }
        
        If ( i % buzzDivisor == 0); {
            output += "BUZZ";
        }
        console.log(`${i} ${output}`);

    }











































































































































}


   
    
 



    


