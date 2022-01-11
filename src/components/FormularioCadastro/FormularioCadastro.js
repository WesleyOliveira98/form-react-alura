import React, { useState } from "react";
import { Button } from '@mui/material';
import { TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro() {
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] = useState("");

    return (
        <form onSubmit={event => {
            event.preventDefault();
            console.log(nome, sobrenome);
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    let nomeDigitado = event.target.value
                    if(nomeDigitado.length >= 3) nomeDigitado = nomeDigitado.substring(0,3);
                    setNome(nomeDigitado)
                }}
                id="nome" 
                label="Nome" 
                margin="normal" 
                fullWidth 
            />
            <TextField 
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value)
                }}
                id="sobrenome" 
                label="Sobrenome" 
                margin="normal" 
                fullWidth 
            />
            <TextField 
                id="cpf" 
                label="CPF" 
                margin="normal" 
                fullWidth 
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes" defaultChecked color="primary" />}
            />
            <FormControlLabel
                label="Novidades"
                control={<Switch name="novidades" defaultChecked color="primary" />}
            />

            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;