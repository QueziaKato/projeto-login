//codigo de validação de formulário de login

function Verificar(){

    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
     if(!email || !senha){
     alert("Campo de preenchimento obrigatório. Favor preencher");
    
     }
     }