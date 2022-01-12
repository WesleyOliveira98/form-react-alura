import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function DadosPessoais({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({
        cpf:{
            valido: true, 
            texto: ""
        }
    });
    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value)
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
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                onBlur={event => {
                    const isValid = validarCPF(cpf);
                    setErros({ cpf: isValid });
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        onChange={event => {
                            setPromocoes(event.target.checked)
                        }}
                        name="promocoes"
                        checked={promocoes}
                        color="primary"
                    />
                }
            />
            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        onChange={event => {
                            setNovidades(event.target.checked)
                        }}
                        name="novidades"
                        checked={novidades}
                        color="primary"
                    />
                }
            />

            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    )
}

export default DadosPessoais;