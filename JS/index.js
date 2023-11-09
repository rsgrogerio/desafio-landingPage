/*função irá chamar a pagina de agradecimentos após enviar o formulario*/
const contato = document.getElementById('contato');

contato.addEventListener('submit', function(event) {
    event.preventDefault();

    window.location.href = 'agradecimento.html';
});


/*função que irá limpar os dados do formulário quando voltar na página*/
window.addEventListener('pageshow', function(event) {
    if (contato) {
        contato.reset();
    }
});


