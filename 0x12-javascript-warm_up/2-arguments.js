#!/usr/bin/node
const args = process.agrv.length;
if (args < 2) {
  console.log('No Argument');
} else if (args > 2) {
  console.log('Arguments found');
} else {
  console.log('Argument found');
}
