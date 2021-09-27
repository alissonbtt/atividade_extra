import { entregaAnimais } from "./logistica/animaisEntregues.js";
import { logisticaAbrigos } from "./logistica/verificaCapAbrigos.js";
import { maiorEntrada } from "./zoonoses/diaMaiorEntrada.js";
import { totalAnimaisMes } from "./zoonoses/totalAnimais.js";


let main = (opcao) => {
    
    switch (opcao){
        case 1:
            //animais recebido no ultimo mes
            console.log('Total de animais recebidos no ultimo mes\n');
            console.log(totalAnimaisMes);
            break;

        case 2:
            // Dia com maior entrada de animais
            console.log('Dados sobre o dia com maior entrada de animais\n');
            console.log(maiorEntrada);
            break;

        case 3:
            //Total de dias para entrear todos os animais
            console.log(`Levariam ${entregaAnimais.DiasZerarEstoque} dias para entregar todos os animais`);
            break;

        case 4:
            //Animais entregues por dia
            console.log(`Relatório de entrega diária\n`);
            console.log(entregaAnimais.relatorioEntregaDiaria);
            break;

        case 5:
            //Verifica  a possibilidade dos abrigos receberem mais animais
            console.log('Capacidade dos abrigos\n');
            console.log(logisticaAbrigos.mensagem);
            break;

        case 6:
            //Mostra a quantidade de animais entregues para cada abrigo
            console.log("Nos abrigos ficaram: \n");
            console.log(`No abrigo bigodes vao ficar ${logisticaAbrigos.estoqueBigodes} gatos`)
            console.log(`No abrigo fucinho vao ficar ${logisticaAbrigos.estoqueFucinho} cachorros`)
            console.log(`No abrigo Patas vao ficar ${logisticaAbrigos.estoquePatas} animais`)
            break;

        case 7:
            //Espaco disponivel em cada abrigo
            console.log(`Nos Abrigos sobrariam vagas para ${logisticaAbrigos.gatos} gatos`)
            console.log(`Nos Abrigos sobrariam vagas para ${logisticaAbrigos.cachorros} cachorros`)
            console.log(`Nos Abrigos sobrariam vagas para ${logisticaAbrigos.ambos} ambos animais`)
            break;

    }
}

main(1);
main(2);
main(3);
main(4);
main(5);
main(6);
main(7);
