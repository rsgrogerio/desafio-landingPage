/*função que irá limpar os dados do formulário quando voltar na página*/
window.addEventListener('pageshow', function(event) {
    if (contato) {
        contato.reset();
    }
});


