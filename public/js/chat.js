// CLIENT_SEND_MESSAGE
const formSendData = document.querySelector(".messages .message-input");

if (formSendData) {
    formSendData.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = e.target.elements.content.value

        if (content) {
            socket.emit("CLIENT_SEND_MESSAGE", content);
            e.target.elements.content.value = ""
        }
    });
}

// SERVER_RETURN_MESSAGE
socket.on("SERVER_RETURN_MESSAGE", (data) => {
    const body = document.querySelector(".chat-area .messages")

    const div = document.createElement("div") 
    div.classList.add("message.received")
    div.innerHTML = `
        <div class="message-content">${data.fullName}</div>
        <div class="message-chat">${data.content}</div>
    `

    body.appendChild(div)
})