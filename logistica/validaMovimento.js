// verifica o saldo  so valida o movimento de retirada se o saldo for maior que zero

function validaMovimentoGatos(estoqueGatos, movimento){   
    let validaMovimento; 

    if(movimento >= 0){
        validaMovimento = movimento;
    }else if(estoqueGatos > 0){
        validaMovimento = movimento;
    }else{
        validaMovimento = 0;
    }

    return validaMovimento;
}

function validaMovimentoCachorros(estoqueCachorros, movimento){

    let validaMovimento; 
    
    if(movimento >= 0){
        validaMovimento = movimento;
    }else if(estoqueCachorros > 0){
        validaMovimento = movimento;
    }else{
        validaMovimento = 0;
    }

    return validaMovimento;
}


export {validaMovimentoGatos, validaMovimentoCachorros};

