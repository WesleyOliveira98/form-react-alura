import React, { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validate, haveErrors] = useErros(validacoes);

    return(
        <form onSubmit={event=>{
            event.preventDefault();
            if(haveErrors()) aoEnviar({email,senha});
        }}>
            <TextField 
                value={email}
                onChange={event => setEmail(event.target.value)}
                id="email"
                label="email"
                type="email"
                required
                margin="normal"
                fullWidth
            />
            <TextField 
                value={senha}
                onChange={event => setSenha(event.target.value)}
                onBlur={validate}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                margin="normal"
                fullWidth
            />
            <Button type="submit" variant="contained">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;