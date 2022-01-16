import React, { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({
        senha: { valido: true, texto: "" }
    });

    const validacoes = useContext(ValidacoesCadastro);

    function validate(event) {
        const {name, value} = event.target;
        const newState = {...erros};
        newState[name] = validacoes[name](value);
        setErros(newState)
    }

    function haveErrors(){
        for(let campo in erros){
            if(!erros[campo].valido) return false
        }
        return true
    }

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