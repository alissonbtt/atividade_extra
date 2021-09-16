import { totalPorDia } from "./totalAnimaisDia.js";


//usa como parametro o array contendo o tatal por dia e retorna o tatal geral
function totalAnimais(args){
    let totalGeral = 0;
    let totalGatos = 0;
    let totalCachorros = 0;

    for(let i = 0; i < args.length; i++){
        totalGatos += args[i].gatos;
        totalCachorros += args[i].cachorros;
        totalGeral += args[i].total;
    }

    return {
        gatos: totalGatos,
        cachorros: totalCachorros,
        total: totalGeral,
    };
}

let totalAnimaisMes = totalAnimais(totalPorDia)



export {totalAnimaisMes};

// console.log(totalAnimaisMes)