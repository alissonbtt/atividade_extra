import { totalPorDia } from "./totalAnimaisDia.js";

// retorna o dia com a maior entrada de animais 
function diaMaiorEntrada(args){ 
    let maiorEntrada = args[0];

    for(let i = 0; i < args.length; i++){
        if(args[i].total >= maiorEntrada.total){
            maiorEntrada = args[i];           
        }
    }
    return maiorEntrada;
    
}

let maiorEntrada = diaMaiorEntrada(totalPorDia)
export {maiorEntrada}