#!/usr/bin/node
const argc = parseInt(process.argv[2]);
console.log(isNaN(argc) ? 'Not a number' : `My number ${argc[0]}`);
