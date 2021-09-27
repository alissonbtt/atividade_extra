import { cronogramaSaida } from "../zoonoses/cronogramaSaida.js"
import { totalAnimaisMes } from "../zoonoses/totalAnimais.js";
import { atualizaEstoque } from "./atualizaEstoque.js";

//verifica se a saida permitida e maior ou menor que a quantidae de animais em estoque
//Caso o numero de animais permitidos para sair seja maior que a quantidade de animais em estoque
// o  quantidade de animais que sairá será igual a quantidade de animais em estoque
let saidaMenorEstoque = (animal, saidaDiaria, estoqueAnimal) =>{
    if(animal < saidaDiaria){
        saidaDiaria = estoqueAnimal;
    }
    return saidaDiaria

}


function zerarAnimaisAbrigo(cronograma, estoqueAnimais){  
    let contaDias = 1;
    let relatorioEntregas = [];

    while (true){
        for(let i = 0; i < 7; i++) {          
            let saidaDiariaGatos = saidaMenorEstoque(estoqueAnimais.gatos, 
                                                     cronograma[i].gatos, 
                                                     estoqueAnimais.gatos);

            let saidaDiariaCachorros = saidaMenorEstoque(estoqueAnimais.cachorros, 
                                                         cronograma[i].cachorros, 
                                                         estoqueAnimais.cachorros);           

            estoqueAnimais = atualizaEstoque(estoqueAnimais,  - saidaDiariaGatos, - saidaDiariaCachorros);            

            let entregaDoDia = {
                dia: contaDias,
                gatos:cronograma[i].gatos,
                cachorros: cronograma[i].cachorros,
                totalEntregue: cronograma[i].gatos + cronograma[i].cachorros,
            }        
            
            relatorioEntregas.push(entregaDoDia)
        

            if(estoqueAnimais.total === 0){            
            
                return {
                    DiasZerarEstoque: contaDias,
                    relatorioEntregaDiaria: relatorioEntregas,
                };  
            }
            contaDias += 1;  
                                
        };           
    }
}



let entregaAnimais = zerarAnimaisAbrigo(cronogramaSaida, totalAnimaisMes );

console.log(entregaAnimais)
export { entregaAnimais }

