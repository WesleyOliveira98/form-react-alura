import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function DadosEntrega({ aoEnviar, validacoes }){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return(
        <form onSubmit={event=>{
            event.preventDefault();
            aoEnviar({cep,endereco,numero,estado,cidade});
        }}>
            <TextField 
                value={cep}
                onChange={event => setCep(event.target.value)}
                id="cep"
                label="CEP"
                type="number"
                margin="normal"
            />
            <TextField 
                value={endereco}
                onChange={event => setEndereco(event.target.value)}
                id="endereco"
                label="Endereço"
                type="text"
                margin="normal"
                fullWidth
            />
            <TextField 
                value={numero}
                onChange={event => setNumero(event.target.value)}
                id="numero"
                label="Número"
                type="number"
                margin="normal"
            />
            <TextField 
                value={estado}
                onChange={event => setEstado(event.target.value)}
                id="estado"
                label="Estado"
                type="text"
                margin="normal"
            />
            <TextField 
                value={cidade}
                onChange={event => setCidade(event.target.value)}
                id="cidade"
                label="Cidade"
                type="text"
                margin="normal"
            />
            <Button type="submit" variant="contained" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;