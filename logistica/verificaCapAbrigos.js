import { capacidadeTotalAbrigos } from "../abrigos/capaciadeAbrigos.js";
import { totalAnimaisMes } from "../zoonoses/totalAnimais.js";


//recebe um objeto com
function verificaCapAbrigo(capacidadeAbrigoBigodes=0, 
                           capacidadeAbrigoFucinho=0, 
                           capacidadeAbrigoPatas=0, 
                           recebeGatos=0, 
                           recebeCachorros=0){

    let capacidadeTotal = {
        gatos: capacidadeAbrigoBigodes,
        cachorros: capacidadeAbrigoFucinho,
        ambos: capacidadeAbrigoPatas, 
        mensagem: ""
    }
    
    if(recebeGatos > capacidadeTotal.gatos){
        capacidadeTotal.ambos -= recebeGatos - capacidadeTotal.gatos;
        capacidadeTotal.gatos = 0;

        if(capacidadeTotal.ambos <=0){
            capacidadeTotal.mensagem = "Capacidade Máxima de gatos foi atingida"
            capacidadeTotal.ambos = 0;
        }else{
            capacidadeTotal.mensagem = "Os abrigos ainda possuem espaço. "
        }

    }else{
        capacidadeTotal.gatos -= recebeGatos;
    }

    if(recebeCachorros > capacidadeTotal.cachorros){
        capacidadeTotal.ambos -= recebeCachorros - capacidadeTotal.cachorros;
        capacidadeTotal.cachorros = 0;

        if(capacidadeTotal.ambos <=0){
            capacidadeTotal.mensagem = "Capacidade Máxima de cachorros foi atingida";
            capacidadeTotal.ambos = 0;
        }else{
            capacidadeTotal.mensagem = "Os abrigos ainda possuem espaço. "
        }

    }else{
        capacidadeTotal.cachorros -= recebeCachorros;
    }
    
    if(capacidadeTotal.gatos<=0 && capacidadeTotal.ambos <=0){
        capacidadeTotal.mensagem = "A capacidade total dos abrigos foi atingida"
    }
    
    return capacidadeTotal;
}

// console.log(totalAnimaisMes)

console.log(verificaCapAbrigo(50, 50, 40, 70,69))
