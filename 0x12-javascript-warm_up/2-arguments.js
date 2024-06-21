#!/usr/bin/node
const args = process.agrv.splice(0, 2);
if(args === 0){
 console.log('No argument')
} 
else if(args < 2 ){
 console.log('Argument found');
} else{
 console.log('Arguments found');
}