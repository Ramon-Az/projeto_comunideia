// formulários dinâmicos da página fale conosco
let inputNome = document.querySelector('input[id="nome"]');
let inputEmail = document.querySelector('input[id="email"]');
let textArea = document.querySelector('textarea[id="mensagem"]');
let msgError1 = document.getElementById('msg-error1');
let msgError2 = document.getElementById('msg-error2');
let msgError3 = document.getElementById('msg-error3');

console.log("conectado com sucesso");
console.log(inputNome, inputEmail, textArea, msgError1, msgError2, msgError3);

//Validação de cada texto dos inputs e textArea
function validaNome() {
    if (inputNome.value.length < 3 || inputNome.value == "") {
        inputNome.classList.remove('msg-correto');
        inputNome.classList.add('error');

        msgError1.innerText = '*Nome inválido';
        msgError1.id= 'visivel';
        
        inputCorretos.nome = false;
    } else {
        inputNome.classList.remove('error');
        inputNome.classList.toggle('msg-correto');

        msgError1.id= 'invisivel';
        
        inputCorretos.nome = true;
    }
}
inputNome.addEventListener('blur', validaNome);

function validaEmail() {
    if (inputEmail.value.indexOf('@') == -1 || inputEmail.value == "") {    
        inputEmail.classList.remove('msg-correto');
        inputEmail.classList.add('error');

        msgError2.innerText = '*Email inválido';
        msgError2.id = 'visivel';
        
        inputCorretos.email = false;
    } else {
        inputEmail.classList.remove('error');
        inputEmail.classList.toggle('msg-correto');

        msgError2.id= 'invisivel';
                
        inputCorretos.email = true;
    }
}
inputEmail.addEventListener('blur', validaEmail);

function validaTextarea() {
    if (textArea.value.length < 10 || textArea.value == "") {
        textArea.classList.remove('msg-correto');
        textArea.classList.add('error');
        msgError3.innerText = '*Mensagem curta, mínimo de 5 palavras';
        msgError3.id='visivel';
        
        inputCorretos.mensagem = false;
    } else {
        textArea.classList.remove('error');
        textArea.classList.toggle('msg-correto');

        msgError3.id='invisivel';
                
        inputCorretos.mensagem = true;
    }
}
textArea.addEventListener('blur', validaTextarea);

//validação de envio (botão) do formulário
let btnSumit = document.getElementById('enviar-contato');
let inputCorretos = {
    nome: false,
    email: false,
    mensagem: false
};

btnSumit.addEventListener('click', (e)=>{
    if(inputCorretos.nome == false || inputCorretos.email == false || inputCorretos.mensagem == false){
        e.preventDefault()
        alert('Preencha todos os campos corretamente');
    }else{
        alert('Enviado com sucesso!');
    }
});