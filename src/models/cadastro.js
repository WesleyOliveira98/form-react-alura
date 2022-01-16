function validateCPF(cpf) {
    if (cpf.length !== 11) return { valido: false, texto: "O CPF deve conter 11 digitos" }
    else return { valido: true, texto: "" }
}

function validateSenha(senha) {
    if (senha.length < 4 || senha.length > 72) return { valido: false, texto: "A senha deve conter entre 4 e 72 digitos" }
    else return { valido: true, texto: "" }
}

function validateNome(nome) {
    if (nome.length < 2 || nome.length > 40) return { valido: false, texto: "O nome deve conter entre 2 e 40 digitos" }
    else return { valido: true, texto: "" }
}

export {validateCPF,validateSenha,validateNome}