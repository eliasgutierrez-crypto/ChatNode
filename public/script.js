const socket = io();

function sendMessage() {
    const input = document.getElementById('input');

    if (input.value.trim()) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
}

socket.on('chat message', function (msg) {
    const messages = document.getElementById('messages');

    const li = document.createElement('li');
    li.textContent = msg;

    // Clases Tailwind para estilo tipo burbuja
    li.className = "bg-white px-4 py-2 rounded-xl shadow text-sm max-w-[75%]";

    messages.appendChild(li);

    // Scroll automático hacia abajo
    messages.scrollTop = messages.scrollHeight;
});
