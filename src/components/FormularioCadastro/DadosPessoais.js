import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({
        cpf: { valido: true, texto: ""},
        nome: { valido: true, texto: ""}
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

    return (
        <form onSubmit={event => {
            event.preventDefault();
            //aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            if(haveErrors()) aoEnviar({nome,sobrenome,cpf,promocoes,novidades})
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value)
                }}
                onBlur={validate}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
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
                name="sobrenome"
                label="Sobrenome"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                onBlur={validate}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                name="cpf"
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

            <Button type="submit" variant="contained">Próximo</Button>
        </form>
    )
}

export default DadosPessoais;