function countHello(number){
    let count = 0;
   const interval = setInterval(()=>{
    count++;
    console.log("Hello", count);
    if(number === count){
         clearInterval(interval);
     }})
}
countHello(5);
