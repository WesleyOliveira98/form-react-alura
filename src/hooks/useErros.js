import { useState } from "react";

export default function useErros(validacoes){
    const estadoInicial = criarEstadoinicial(validacoes);
    const [erros, setErros] = useState(estadoInicial);

    function validate(event) {
        const {name, value} = event.target;
        const newState = {...erros};
        newState[name] = validacoes[name](value);
        setErros(newState);
    }

    function haveErrors(){
        for(let campo in erros){
            if(!erros[campo].valido) return false;
        }
        return true;
    }

    return [erros, validate, haveErrors];
}

function criarEstadoinicial(validacoes){
    const estado = {};
    for(let campo in validacoes){
        estado[campo] = { valido: true, texto: ""};
    }
    return estado;
}