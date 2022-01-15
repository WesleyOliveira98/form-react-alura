import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [actualStep, setActualStep] = useState(0);
    const [dadosGerais,setDados] = useState({});

    useEffect(()=>{
        if(actualStep === forms.length-1) aoEnviar(dadosGerais);
    });

    const forms = [
        <DadosUsuario aoEnviar={getDados} />,
        <DadosPessoais aoEnviar={getDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={getDados} />,
        <Typography variant="h5">Obrigado por se cadastrar!</Typography>
    ];

    function getDados(dados){
        setDados({...dadosGerais,...dados});
        nextStep();
    }

    function nextStep(){
        setActualStep(actualStep+1);
    }

    return (
        <>
        <Stepper activeStep={actualStep}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Dados Pessoais</StepLabel></Step>
            <Step><StepLabel>Dados de Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {forms[actualStep]}
        </>
    );
}

export default FormularioCadastro;