import { entregaAnimais } from "./logistica/animaisEntregues.js";
import { maiorEntrada } from "./zoonoses/diaMaiorEntrada.js";
import {totalAnimaisMes} from "./zoonoses/totalAnimais.js";


console.log(` Foram recebidos um no ultimo mês ${totalAnimaisMes.gatos} gatos.`);
console.log(` Foram recebidos um no ultimo mês ${totalAnimaisMes.cachorros} cachorros.`);
console.log(` Foram recebidos um no ultimo mês ${totalAnimaisMes.total} animais.`);
console.log(`O dia coma maior entrada de animais foi no dia  ${maiorEntrada.dia_mes} \ 
com um total de ${maiorEntrada.total} animais`)

console.log(`Levariam ${entregaAnimais.DiasZerarEstoque} dia(s) para zerar os animais do abrigo. `)

console.log("Relatorio de entrega Diária");
console.table(entregaAnimais.relatorioEntregaDiaria);
