import React, { useState } from "react";
import { Button } from '@mui/material';
import { TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
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
                    setCpf(event.target.value)
                }}
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

export default FormularioCadastro;