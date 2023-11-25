console.log("conectado com sucesso!");
// variaveis para todas as funções da validação de formulário
let inputNome = document.querySelector('input[id="first-name"]');
let inputSobrenome = document.querySelector('input[id="last-name"]');

let inputNomeusuario = document.querySelector('input[id="user"]');
let inputDatanasc = document.querySelector('input[id="date"]');

let inputCpf = document.querySelector('input[id="cpf"]');
let inputTelefone = document.querySelector('input[id="phone"]');

let inputEmail = document.querySelector('input[id="email"]');
let inputConfirmemail = document.querySelector('input[id="confirm-email"]');

let inputSenha = document.querySelector('input[id="password"]');
let inputConfirmsenha = document.querySelector('input[id="confirm-password"]');

// mensagens de erro para cada input
let msgError1 = document.getElementById('msg-error1');
let msgError2 = document.getElementById('msg-error2');

let msgError3 = document.getElementById('msg-error3');
let msgError4 = document.getElementById('msg-error4');

let msgError5 = document.getElementById('msg-error5');
let msgError6 = document.getElementById('msg-error6');

let msgError7 = document.getElementById('msg-error7');
let msgError8 = document.getElementById('msg-error8');

let msgError9 = document.getElementById('msg-error9');
let msgError10 = document.getElementById('msg-error10');

//validacao dos campos do formulario de cadastro de usuarios
function validaNome() {
    if (inputNome.value.length < 3 || inputNome.value == "") {
        inputNome.classList.remove('msg-correto');
        inputNome.classList.add('error');

        msgError1.innerText = '*Nome inválido';
        msgError1.id= 'visivel';
        
        inputCorretos.firstName = false;
    } else {
        inputNome.classList.remove('error');
        inputNome.classList.toggle('msg-correto');

        msgError1.id= 'invisivel';
        
        inputCorretos.firstName = true;
    }
}
inputNome.addEventListener('blur', validaNome);

function validaSobrenome() {
    if (inputSobrenome.value.length < 3 || inputSobrenome.value == "") {
        inputSobrenome.classList.remove('msg-correto');
        inputSobrenome.classList.add('error');

        msgError2.innerText = '*Sobrenome inválido';
        msgError2.id= 'visivel';
        
        inputCorretos.lastName = false;
    } else {
        inputSobrenome.classList.remove('error');
        inputSobrenome.classList.toggle('msg-correto');

        msgError2.id= 'invisivel';
        
        inputCorretos.lastName = true;
    }
}
inputSobrenome.addEventListener('blur', validaSobrenome);

function validaNomeusuario() {
    if (inputNomeusuario.value.length < 3 || inputNomeusuario.value == "") {
        inputNomeusuario.classList.remove('msg-correto');
        inputNomeusuario.classList.add('error');

        msgError3.innerText = '*Nome de usuário inválido';
        msgError3.id= 'visivel';
        
        inputCorretos.user = false;
    } else {
        inputNomeusuario.classList.remove('error');
        inputNomeusuario.classList.toggle('msg-correto');

        msgError3.id= 'invisivel';
        
        inputCorretos.user = true;
    }
}
inputNomeusuario.addEventListener('blur', validaNomeusuario);

function validaDatanasc() {
    if (inputDatanasc.value.length < 10 || inputDatanasc.value == "dd/mm/aaaa" || inputDatanasc == "") {
        inputDatanasc.classList.remove('msg-correto');
        inputDatanasc.classList.add('error');

        msgError4.innerText = '*Data de nascimento não válido';
        msgError4.id= 'visivel';
        
        inputCorretos.date = false;
    } else {
        inputDatanasc.classList.remove('error');
        inputDatanasc.classList.toggle('msg-correto');

        msgError4.id= 'invisivel';
        
        inputCorretos.date = true;
    }
}
inputDatanasc.addEventListener('blur', validaDatanasc);

function validaCpf() {
    if (inputCpf.value.length < 11 || inputCpf.value == "") {
        inputCpf.classList.remove('msg-correto');
        inputCpf.classList.add('error');
        
        msgError5.innerText = '*CPF inválido';
        msgError5.id= 'visivel';
        
        inputCorretos.cpf = false;
    } else {
        inputCpf.classList.remove('error');
        inputCpf.classList.toggle('msg-correto');

        msgError5.id= 'invisivel';
        
        inputCorretos.cpf = true;
    }
}
inputCpf.addEventListener('blur', validaCpf);

// interação com o mouse e o input label do cpf para mostrar mensagem de direcionamento
function mensagemLabelcpf() {
    let mensagemCpf = document.querySelector('label[for = "mensagem-cpf"]');
    console.log('mouse sobre o input cpf');
    if(inputCpf.value == ""){
        mensagemCpf.innerText = '*Apenas os números';
        mensagemCpf.id= 'mensagem';
    }else{
        mensagemCpf.id= 'invisivel';
        console.log("inv")
    }    
}
inputCpf.addEventListener('mouseover', mensagemLabelcpf);
// fim da interação com o mouse e o input label do cpf para mostrar mensagem de direcionamento

function ocultarMensagemLabelcpf() {
    let ocultaCpf = document.querySelector('label[for = "mensagem-cpf"]');
    ocultaCpf.id= 'invisivel';
}
inputCpf.addEventListener('mouseout', ocultarMensagemLabelcpf);

function validaTelefone() {
    if (inputTelefone.value.length < 10 || inputTelefone.value == "") {
        inputTelefone.classList.remove('msg-correto');
        inputTelefone.classList.add('error');
        
        msgError6.innerText = '*Número inválido';
        msgError6.id= 'visivel';
        
        inputCorretos.phone = false;
    } else {
        inputTelefone.classList.remove('error');
        inputTelefone.classList.toggle('msg-correto');

        msgError6.id= 'invisivel';
        
        inputCorretos.phone = true;
    }
}
inputTelefone.addEventListener('blur', validaTelefone);

// Função de validação do email e na sequência outros tratamentos na parte do domínio do email
function validaEmail() {
    if (inputEmail.value.indexOf('@') == -1 || inputEmail.value == "") {    
        inputEmail.classList.remove('msg-correto');
        inputEmail.classList.add('error');

        msgError7.innerText = '*Email inválido';
        msgError7.id = 'visivel';
        
        inputCorretos.email = false;
    } else if (!verificaDominioEmail(inputEmail.value) ) {
        inputEmail.classList.remove('msg-correto');
        inputEmail.classList.add('error');

        msgError7.innerText = '*Domínio de email inválido';
        msgError7.id = 'visivel';
        
        inputCorretos.email = false;
    } else {
        inputEmail.classList.remove('error');
        inputEmail.classList.toggle('msg-correto');

        msgError7.id= 'invisivel';
        inputCorretos.email = true;
    }
}
inputEmail.addEventListener('input', validaEmail);

// Verifica se o domínio do email é válido
function verificaDominioEmail(email) {
    // Expressão regular para verificar o domínio do email
    const dominioEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

    return dominioEmail.test(email);
}

// Limita a quantidade de caracteres no domínio do email para 10
inputEmail.addEventListener('input', function() {
    const dominio = inputEmail.value.split('@')[1];
    if (dominio && dominio.length > 10) {
        inputEmail.value = inputEmail.value.slice(0, inputEmail.value.length - (dominio.length - 10));
    }
});  //termino dos tratamentos sobre o email

// Função de validação de confirmação do email e na sequência outros tratamentos na parte do domínio do email
function validaConfirmemail() {
    if(inputConfirmemail.value != inputEmail.value || inputConfirmemail.value.indexOf('@') == -1 || inputConfirmemail.value == ""){
        inputConfirmemail.classList.remove('msg-correto');
        inputConfirmemail.classList.add('error');

        msgError8.innerText = '*Email não confere';
        msgError8.id= 'visivel';
        
        inputCorretos.confirmEmail = false;
    } else if (!verificaDominioconfirmemail(inputConfirmemail.value) ) {
        inputConfirmemail.classList.remove('msg-correto');
        inputConfirmemail.classList.add('error');

        msgError8.innerText = '*Domínio de email inválido';
        msgError8.id = 'visivel';
        
        inputCorretos.email = false;
    }else {
        console.log("email confere")
        inputConfirmemail.classList.remove('error');
        inputConfirmemail.classList.toggle('msg-correto');

        msgError8.id= 'invisivel';
        
        inputCorretos.confirmEmail = true;
    }
}
inputConfirmemail.addEventListener('blur', validaConfirmemail);

// Verifica se o domínio do confirma email é válido
function verificaDominioconfirmemail(confirmEmail) {
    // Expressão regular para verificar o domínio do email
    const dominioConfirmemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

    return dominioConfirmemail.test(confirmEmail);
}

// Limita a quantidade de caracteres no domínio do do confirma email para 10
inputConfirmemail.addEventListener('input', function() {
    const dominio = inputConfirmemail.value.split('@')[1];
    if (dominio && dominio.length > 10) {
        inputConfirmemail.value = inputConfirmemail.value.slice(0, inputConfirmemail.value.length - (dominio.length - 10));
    }
});  //termino dos tratamentos sobre o Confirmemail

function validaSenha(){
    if(inputSenha.value.length < 6 || inputSenha.value == ""){
        inputSenha.classList.remove('msg-correto');
        inputSenha.classList.add('error');

        msgError9.innerText = '*Senha inválida';
        msgError9.id= 'visivel';
        
        inputCorretos.password = false;
    }else{
        inputSenha.classList.remove('error');
        inputSenha.classList.toggle('msg-correto');

        msgError9.id= 'invisivel';
        
        inputCorretos.password = true;
    }

}
inputSenha.addEventListener('blur', validaSenha);

// interação com o mouse e o input label do Senha para mostrar mensagem de
function mensagemLabelsenha() {
    let mensagemSenha = document.querySelector('label[for = "mensagem-senha"]')
    if(inputSenha.value == ""){
        mensagemSenha.innerText = '*Mínimo 6 caracteres';
        mensagemSenha.id= 'mensagem';
    }else{
        mensagemSenha.id= 'invisivel';
        console.log("inv")
    }    
}
inputSenha.addEventListener('mouseover', mensagemLabelsenha);

function ocultarMensagemLabelsenha() {
    let ocultaSenha = document.querySelector('label[for = "mensagem-senha"]');
    ocultaSenha.id= 'invisivel';
}
inputSenha.addEventListener('mouseout', ocultarMensagemLabelsenha);
// final do tratamento do input senha

function validaConfirmsenha(){
    if(inputConfirmsenha.value != inputSenha.value || inputConfirmsenha.value.length < 6 || inputSenha.value == ""){
        inputConfirmsenha.classList.remove('msg-correto');
        inputConfirmsenha.classList.add('error');

        msgError10.innerText = '*Senha não confere';
        msgError10.id= 'visivel';
        
        inputCorretos.confirmPassword = false;
    }else{
        inputConfirmsenha.classList.remove('error');
        inputConfirmsenha.classList.toggle('msg-correto');

        msgError10.id= 'invisivel';
        
        inputCorretos.confirmPassword = true;
    }

}
inputConfirmsenha.addEventListener('blur', validaConfirmsenha);

// interação com o mouse e o input label do Confirma Senha para mostrar mensagem de
function mensagemLabelconfirmsenha() {
    let mensagemConfirmsenha = document.querySelector('label[for = "mensagem-confirmsenha"]')
    if(inputSenha.value == ""){
        mensagemConfirmsenha.innerText = '*Mínimo 6 caracteres';
        mensagemConfirmsenha.id= 'mensagem';
    }else{
        mensagemConfirmsenha.id= 'invisivel';
        console.log("inv")
    }    
}
inputConfirmsenha.addEventListener('mouseover', mensagemLabelconfirmsenha);

function ocultarMensagemLabelconfirmsenha() {
    let ocultaConfirmsenha = document.querySelector('label[for = "mensagem-confirmsenha"]');
    ocultaConfirmsenha.id= 'invisivel';
}
inputConfirmsenha.addEventListener('mouseout', ocultarMensagemLabelconfirmsenha);
// final do tratamento do input Confirma senha

// validação de envio (botão) do formulário
let btnSumit = document.querySelector('input[type="submit"]');
let inputCorretos = {
    firstName: false,
    lastName: false,
    user: false,
    date: false,
    cpf: false,
    phone: false,
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false
};

btnSumit.addEventListener('click', (e)=>{
    if(inputCorretos.firstName == false || inputCorretos.lastName == false || inputCorretos.user == false || inputCorretos.date == false || inputCorretos.cpf == false || inputCorretos.phone == false || inputCorretos.email == false || inputCorretos.confirmEmail == false || inputCorretos.password == false || inputCorretos.confirmPassword == false){
        e.preventDefault()
        alert('Preencha todos os campos corretamente');
    }else{
        alert('Cadastrado com sucesso!');
    }
});