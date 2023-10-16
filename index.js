//Prompt the user for a list of integers separated by commas
const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');


// Complete the Numbers class below
// the constructor has already been provided
class Numbers{
  constructor(data){
    //data can either be a string or an array of numbers
    if(typeof data === 'string'){
      this.data = str.split(',').map(number => number*1);
    }
    else {
      this.data = data;
    }
  }
  count(){
    //return the count of numbers in data along with their indexes
    return this.data.length;
  }
  printNumbers(){
    //print the numbers in data 
    for(let i = 0; i < this.data.length; i++ ) {
      console.log([i], this.data[i]);
    }
  }
  odds(){
    //return the odd numbers in data
    // the remainder is equal to 1 of after the number is divided by 2 
    let odd = [];
    for (let i=0; i < this.data.length; i++){
      if(this.data[i]%2 != 0){
          odd.push(this.data[i]);
      }
    }
    return odd;
  }
  evens(){
    //return the even numbers in data
    // the remainder is equal to 0 of after the number is divided by 2 
    let even = [];
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]%2 == 0){
        even.push(this.data[i]);
      }
    }
    return even;
  }
  sum(){
    //return the sum of the numbers
    let sum = 0;
    for(let i = 0; i < this.data.length; i++) {
      sum = sum + this.data[i];
    }
    return sum;
  }
  product(){
    //return the product of the numbers
    /*let total = 1;
    for(let i = 0; i < this.data.length; i++) {
      total *= this.data[i];
    }
    return total;*/

    const initialValue = 1;
    const productTotal = this.data.reduce(
      (acc, number) => acc * number, 
      initialValue
    );
    return(productTotal);
  }
  greaterThan(target){
    //return the numbers greater than the target
  let greater = [];
  let count = 1;
  for(let i = 0; i < this.data.length; i++){
    if(target < this.data[i]){
      count ++;
      greater.push(this.data[i]);
    }
  }
  return greater;//this.data[i] >= target;
    
  }
  howMany(target){
    //return the count of a given number
    let count = 0;
    for(let i = 0; i < this.data.length; i++){
        if(this.data[i] === target){
            count++;
        }
    }
    return count;
  }
}

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count());//returns count of numbers
n1.printNumbers();//prints the number along with their indexes
console.log(n1.odds());//returns odd numbers
console.log(n1.evens());//returns even numbers
console.log(n1.sum());//returns sum of numbers
console.log(n1.product());//returns product of numbers
console.log(n1.greaterThan(3));//returns numbers greater than another number
console.log(n1.howMany(3));//return the count of a specific number

/*const ul = document.createElementNS("ul");
for (let element of this.data[i]){
  const li = document.createElement("li");
  li.innerText = element;
  ul.appendChild("li");
}

document.body.appendChild(ul);*/