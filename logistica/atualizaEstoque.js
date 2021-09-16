import { totalAnimaisMes } from "../zoonoses/totalAnimais.js";
import { validaMovimentoCachorros, validaMovimentoGatos} from "./validaMovimento.js";




//recebe o estoque total e o valor de gatos e cachorros para atualizar o estoque
function atualizaEstoque(estoqueTotal, gatos = 0, cachorros = 0){
    let movimentoGatos =  validaMovimentoGatos(estoqueTotal.gatos, gatos);   
    let movimentoCachorros = validaMovimentoCachorros(estoqueTotal.cachorros, cachorros);  
    let saldoGatos = estoqueTotal.gatos + movimentoGatos   //atualiza o estique de gatos
    let saldoCachorros = estoqueTotal.cachorros + movimentoCachorros    // atualiza o esstoque de cachorros

    let saldoTotal = saldoGatos + saldoCachorros;

    return {
        gatos: saldoGatos,
        cachorros: saldoCachorros,
        total: saldoTotal,
    }
}

export {atualizaEstoque}