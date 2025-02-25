console.log("Hello, TypeScript with Node.js!");

let x : number | string = 10; 
// x = 'hello'; // x is a string
x = 5; // x is a number

if (typeof x === 'string'){ 
  console.log('x is a string'); 
} else if (typeof x === 'number'){ 
  console.log('x is a number')
} else { 
  console.log('x is neither a string nor a number'); 
}

