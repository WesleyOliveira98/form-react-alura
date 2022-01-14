import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";


function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [actualStep, setActualStep] = useState(0);

    const forms = [
        <DadosUsuario aoEnviar={nextStep} />,
        <DadosPessoais aoEnviar={nextStep} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={aoEnviar} />,
    ]

    function nextStep(){
        setActualStep(actualStep+1);
    }

    return (
        <>
        {forms[actualStep]}
        </>
    );
}

export default FormularioCadastro;