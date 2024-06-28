#!/usr/bin/node
const args = parseInt(process.argv[2]);
let x = args[0];
console.log(args ? x * 'C is fun' || 'Missing number of occurrences');
