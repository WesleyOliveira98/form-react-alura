import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function DadosUsuario({ aoEnviar }){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return(
        <form onSubmit={event=>{
            event.preventDefault();
            aoEnviar({email,senha});
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
                id="senha"
                label="senha"
                type="password"
                required
                margin="normal"
                fullWidth
            />
            <Button type="submit" variant="contained">
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;