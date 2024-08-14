using Microsoft.AspNetCore.SignalR;

namespace SimpleChatApp.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string fromUser, string message)
        {
            await Clients.All.SendAsync("ReciveMessage", fromUser, message);
        }
    }
}
