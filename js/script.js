function botTeste() {
    var chatBox = document.querySelector('.chat-box');

    //User para mensagem enviada
    //Bot para mensagem recebida

    //Primeira Mensagem
    setTimeout(function(){
        let msg = document.createElement('div');

        msg.classList.add('bot', 'message');
        msg.innerHTML = `Hello, World!`;
        chatBox.appendChild(msg);
    }, 1000);

    //Segunda Mensagem
    setTimeout(function(){
        let msg = document.createElement('div');

        msg.classList.add('user', 'message');
        msg.innerHTML = `Developed by <strong>Gildasio Abraão</strong>`;
        chatBox.appendChild(msg);
    }, 3000);

}

botTeste();