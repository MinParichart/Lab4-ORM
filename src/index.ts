// const add = (a : number ,b : number) => { 
//   return a + b; 
// }
// console.log((add(1,2))); 
// const result = add(1,2) + 0;
// console.log(result, 'type of result : ', typeof result); 


// const addxy = (x : number ,y : number) : string => { // บังคับให้คืนค่าเป็น string 
//   const resultxy = x + y 
//   // return x + y; // error
//   console.log(resultxy ," : ", typeof resultxy) // number
//   return  "string : " + resultxy.toString() ; // string
// }
// console.log((addxy(5,6))); 
// const resultxy = addxy(10,20) + 0;
// console.log(resultxy, 'type of result : ', typeof resultxy); 


const findMax = (numbers : number[]) : string => { 
  if (numbers.length === 0){ 
    return ''; 
  }

  let max = numbers[0]; 
  for ( let i = 0 ; i < numbers.length ; i++) { 
    if ( numbers[i] > max   ) { 
      max = numbers[i];
    }
  }
  return max.toString(); 
}

const nums = [3,8,1,2,10,2]; 
console.log((findMax(nums))); 