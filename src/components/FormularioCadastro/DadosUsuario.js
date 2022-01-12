import React from "react";
import { Button, TextField } from "@mui/material";

function DadosUsuario(){
    return(
        <form>
            <TextField 
                id="email"
                label="email"
                type="email"
                margin="normal"
                fullWidth
            />
            <TextField 
                id="senha"
                label="senha"
                type="password"
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