//criar um array com os dados da entrada mais o total de animais por dia

import { entrada } from "./entrada.js";


function arrayTotalPorDia(args){
    for(let i = 0; i < args.length; i++){
        let total = args[i].gatos + args[i].cachorros;
        args[i].total = total;

    }
    return args;
}

let totalPorDia = arrayTotalPorDia(entrada)
// console.log(totalPorDia)

export {totalPorDia};