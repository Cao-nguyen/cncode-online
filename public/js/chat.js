import * as Popper from 'https://cdn.jsdelivr.net/npm/@popperjs/core@^2/dist/esm/index.js'

// CLIENT_SEND_MESSAGE
const formSendData = document.querySelector(".chat-area .message-input");

if (formSendData) {
    formSendData.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = e.target.elements.content.value

        if (content) {
            socket.emit("CLIENT_SEND_MESSAGE", content);
            e.target.elements.content.value = ""
            socket.emit("CLIENT_SEND_TYPING", "hidden")
        }
    });
}

// SERVER_RETURN_MESSAGE
socket.on("SERVER_RETURN_MESSAGE", (data) => {
    const body = document.querySelector(".chat-area .messages")
    const boxTyping = document.querySelector('.list-typing')

    const div = document.createElement("div") 
    div.classList.add("message", "received")
    div.innerHTML = `
        <div class="message-content">${data.fullName}</div>
        <div class="message-chat">${data.content}</div>
    `

    body.insertBefore(div, boxTyping)

    bodyChat.scrollTop = bodyChat.scrollHeight
})

// Scroll Chat 
const bodyChat = document.querySelector(".chat-area .messages")

if(bodyChat) {
    bodyChat.scrollTop = bodyChat.scrollHeight
}

// emoji
const buttonIcon = document.querySelector('span[class="send-btn"]')
if(buttonIcon) {
    const tooltip = document.querySelector('.tooltip')
    Popper.createPopper(buttonIcon, tooltip)

    buttonIcon.onclick = () => {
        tooltip.classList.toggle('shown')
    }
}

const emojiPicker = document.querySelector("emoji-picker")
if(emojiPicker) {
    const inputChat = document.querySelector(".chat-area .message-input input[name='content']")

    emojiPicker.addEventListener("emoji-click", (event) => {
        const icon = event.detail.unicode

        inputChat.value = inputChat.value + icon
    })

    var timeOut

    inputChat.addEventListener("keyup", () => {
        socket.emit("CLIENT_SEND_TYPING", "show")

        clearTimeout(timeOut)

        timeOut = setTimeout(() => {
            socket.emit("CLIENT_SEND_TYPING", "hidden")
        }, 5000)
    })
}


// SERVER_RETURN_TYPING
const elementsListTyping = document.querySelector(".messages .list-typing")
if(elementsListTyping) {
    socket.on("SERVER_RETURN_TYPING", (data) => {
        if(data.type == "show") {
            const existTyping = elementsListTyping.querySelector(`[user-id="${data.userId}"]`) 

            if(!existTyping) {
                const boxTyping = document.createElement("div")
                boxTyping.classList.add("box-typing")
                boxTyping.setAttribute("user-id", data.userId)
                boxTyping.innerHTML=`
                    <div class="box-typing">
                        <div class="typing-name">${data.fullName}</div>
                        <div class="typing-dots"> 
                            <span> </span>
                            <span> </span>
                            <span></span>
                        </div>
                    </div>
                `

                elementsListTyping.appendChild(boxTyping)
            }
        } else {
            const boxTypingRemove = elementsListTyping.querySelector(`[user-id="${data.userId}"]`) 
            if(boxTypingRemove) {
                elementsListTyping.removeChild(boxTypingRemove)
            }
        }
    })
}