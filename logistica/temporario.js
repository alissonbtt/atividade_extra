"use strict";
const gets = require("prompt-sync")();

let name = gets('Digite seu nome? ');
// Usuário digita "Carlos".

console.log('Hello, ' + name + '!');
// -> Hello, Carlos!