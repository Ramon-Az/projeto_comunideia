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
    if (inputDatanasc.value.length < 10 || inputDatanasc.value == "dd/mm/aaaa") {
        inputDatanasc.classList.remove('msg-correto');
        inputDatanasc.classList.add('error');

        msgError4.innerText = '*Data de nascimento inválida';
        msgError4.id= 'visivel';
        
        inputCorretos.user = false;
    } else {
        inputDatanasc.classList.remove('error');
        inputDatanasc.classList.toggle('msg-correto');

        msgError4.id= 'invisivel';
        
        inputCorretos.user = true;
    }
}
inputDatanasc.addEventListener('blur', validaDatanasc);

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