var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (fromUser, message) {
    var now = new Date();
    var formattedDate = now.toLocaleString();
    var msg = `<strong>${fromUser}:</strong> ${message} <span class="timestamp">${formattedDate}</span>`;

    var li = document.createElement("li");
    li.className = 'list-group-item'; // Apply the same styling as in your HTML
    li.innerHTML = msg;

    $("#list").prepend(li);
});

connection.start();

$("#btnSend").on("click", function () {
    var fromUser = $("#txtUser").val();
    var message = $("#txtMessage").val();

    connection.invoke("SendMessage", fromUser, message);
});
