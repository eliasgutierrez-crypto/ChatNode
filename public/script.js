const socket = io();

function sendMessage() {
    const input = document.getElementById('input');
    if(input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
}

socket.on('chat message', function(msg) {
    const messages = document.getElementById('messages');
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
});
