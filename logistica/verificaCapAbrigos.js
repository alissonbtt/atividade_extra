import { capacidadeTotalAbrigos } from "../abrigos/capaciadeAbrigos.js";
import { totalAnimaisMes } from "../zoonoses/totalAnimais.js";


let entradaGatos = (movimentoGatos, obj) => {
    if (movimentoGatos > obj.gatos){
        obj.ambos -= movimentoGatos - obj.gatos;
        obj.gatos = 0;
        if(obj.ambos <=0){
            obj.mensagem = "Capacidade Máxima de gatos foi atingida";
            obj.ambos = 0;
        }else{
            obj.mensagem = "Os abrigos ainda possuem espaço. ";
        }
    }else{
        obj.gatos -= movimentoGatos;
    }
}

let entradaCachorros = (movimentoCachorros, obj) => {
    if (movimentoCachorros > obj.cachorros){
        obj.ambos -= movimentoCachorros - obj.cachorros;
        obj.cachorros = 0;
        if(obj.ambos <=0){
            obj.mensagem = "Capacidade Máxima de cachorros foi atingida";
            obj.ambos = 0;
        }else{
            obj.mensagem = "Os abrigos ainda possuem espaço. ";
        }
    }else{
        obj.cachorros -= movimentoCachorros;
    }
}



function verificaCapAbrigo(capacidadeAbrigoBigodes=0, 
                           capacidadeAbrigoFucinho=0, 
                           capacidadeAbrigoPatas=0, 
                           recebeGatos=0, 
                           recebeCachorros=0){

    let capacidadeTotal = {       
        gatos: capacidadeAbrigoBigodes,       
        cachorros: capacidadeAbrigoFucinho,        
        ambos: capacidadeAbrigoPatas,      
        total: capacidadeAbrigoBigodes + capacidadeAbrigoFucinho + capacidadeAbrigoPatas, 
        mensagem: ""
    }   


    entradaGatos(recebeGatos, capacidadeTotal);

    entradaCachorros(recebeCachorros, capacidadeTotal);

    
    if(capacidadeTotal.ambos <=0){
        capacidadeTotal.mensagem = "A capacidade total dos abrigos foi atingida"
    }

    capacidadeTotal.estoqueBigodes = capacidadeAbrigoBigodes - capacidadeTotal.gatos;
    capacidadeTotal.estoqueFucinho = capacidadeAbrigoFucinho - capacidadeTotal.cachorros;
    capacidadeTotal.estoquePatas = capacidadeAbrigoPatas - capacidadeTotal.ambos;

    capacidadeTotal.total = capacidadeTotal.gatos + capacidadeTotal.cachorros + capacidadeTotal.ambos
    return capacidadeTotal;
}

// console.log(totalAnimaisMes)

// console.log(verificaCapAbrigo(50, 50, 40, 70, 70))


let logisticaAbrigos = verificaCapAbrigo(capacidadeTotalAbrigos.gatos, 
                                          capacidadeTotalAbrigos.cachorros,
                                          capacidadeTotalAbrigos.ambos,
                                          totalAnimaisMes.gatos,
                                          totalAnimaisMes.cachorros)

// console.log(logisticaAbrigos)

export { logisticaAbrigos }