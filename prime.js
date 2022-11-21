const num =  parseInt(prompt("Enter a positive number: "));
const temp = num;
console.log(temp);
const isPrime = (num) => {
 
   let prime = true;
   for(let i = 2; i < num/2; i++){
      if(num % i === 0){
         prime = false;
         break;
      };
   };
   return prime;
}


const nextPrime = (num = 1) => {

   while(!isPrime(++num)){
   };
   return num;
};
if(isPrime(num)){
    console.log(`${num} is a prime number`);
}else{
  console.log("the given number is not prime")
}
console.log("the next prime number is ")
let number = nextPrime(num);
console.log(number);
console.log("the difference is")
let diff =  number - temp;
console.log(diff);