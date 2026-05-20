function quickMessage(text) {
    document.getElementById("user-input").value = text;
    sendMessage();
}
async function sendMessage() {

    let input = document.getElementById("user-input");
    let message = input.value;

    if(message.trim() === "") return;

    let response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    });

    let data = await response.json();

    let chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    chatBox.innerHTML += `
        <div class="bot-message">
            ${data.reply}
        </div>
    `;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}