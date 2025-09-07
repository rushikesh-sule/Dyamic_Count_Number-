/**
 * Q2) Dynamic Counter with Increment and Decrement Buttons 
A counter application where users can increment, decrement, or reset the count. 
   - create functions for increament(), decrement() and reset(). 
  - perform the operation on button click.
 */

  let count = 0;
   
  //increment fumction

  function increment(){
    count++;
    document.getElementById("counter").textContent = count ;

  }

  //decrement function

  function decrement (){
    count--;
    document.getElementById("counter").textContent = count ;


    

   
  }
  
  //reset function

   function reset(){
          count = 0;
          document.getElementById("counter").textContent = count ;
  
    }s