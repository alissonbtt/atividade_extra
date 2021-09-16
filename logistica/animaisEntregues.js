
import { cronogramaSaida } from "../zoonoses/cronogramaSaida.js"
import { totalAnimaisMes } from "../zoonoses/totalAnimais.js";
import { atualizaEstoque } from "./atualizaEstoque.js";

let diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

function zerarAnimaisAbrigo(dias, cronograma, estoqueAnimais){   

    let contaDias = 1;
    let relatorioEntregas = []

    while (true){
        if(estoqueAnimais.total<=0){
            break;
        }

        for(let i = 0; i < dias.length; i++){
            let saidaDiaria = cronograma.filter((dia) =>{
                return dia.dia_semana == dias[i];
                
            });

            if(saidaDiaria.length != 0){  
                if(estoqueAnimais.gatos < saidaDiaria[0].gatos){
                    saidaDiaria[0].gatos = estoqueAnimais.gatos;
                }
                if(estoqueAnimais.cachorros < saidaDiaria[0].cachorros){
                    saidaDiaria[0].cachorros = estoqueAnimais.cachorros;
                }

                estoqueAnimais = atualizaEstoque(estoqueAnimais,  - saidaDiaria[0].gatos, - saidaDiaria[0].cachorros)
                let entregaDoDia = {
                    dia: contaDias,
                    gatos:saidaDiaria[0].gatos,
                    cachorros: saidaDiaria[0].cachorros,
                    totalEntregue: saidaDiaria[0].gatos + saidaDiaria[0].cachorros,
                }        
                
                relatorioEntregas.push(entregaDoDia)
            } 

            if(estoqueAnimais.total === 0){
                return {
                    DiasZerarEstoque: contaDias,
                    relatorioEntregaDiaria: relatorioEntregas,
                };  
            }
            contaDias += 1;                       
        }           
    }
}



let entregaAnimais = zerarAnimaisAbrigo(diasSemana, cronogramaSaida, totalAnimaisMes );


export { entregaAnimais }