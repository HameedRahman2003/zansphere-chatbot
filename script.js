function sendMessage() {
let input = document.getElementById("user-input").value;
let chatBox = document.getElementById("chat-box");

chatBox.innerHTML += "<p><b>You:</b> " + input + "</p>";

let response = getResponse(input);
chatBox.innerHTML += "<p><b>Bot:</b> " + response + "</p>";

document.getElementById("user-input").value = "";
}

function getResponse(input) {
input = input.toLowerCase();

if (input.includes("services")) {
return "Zansphere offers web and AI solutions.";
}
else if (input.includes("contact")) {
return "You can contact via their website.";
}
else if (input.includes("internship")) {
return "Check careers page for internships.";
}
else {
return "Sorry, I didn't understand.";
}
}