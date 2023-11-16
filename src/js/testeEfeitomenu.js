window.addEventListener("scroll", function(){
    let header = document.querySelector('.nav-menu')
    header.classList.toggle('rolagem', window.scrollY > 0)
});

/*
document.getElementById('mensagem').onfocus = function() {
    this.setAttribute('placeholder', '');
}

document.getElementById('mensagem').onblur = function() {
    if(this.value == '')
        this.setAttribute('placeholder', 'Digite sua mensagem aqui...');
}
*/
