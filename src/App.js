import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validateCPF} />
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados)
}

function validateCPF(cpf){
  if(cpf.length !== 11) return { valido: false, texto: "O CPF deve conter 11 digitos" }
  else return { valido: true, texto: "" }
}

export default App;
