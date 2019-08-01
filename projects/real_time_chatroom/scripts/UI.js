// Render a chat templates to DOM
// Clear the list of chats (when the room changes)

class ChatUI {
    constructor(list){ // (list) is where to display the data for the UI
        this.list = list;
    }

    clear() {
        this.list.innerHTML = ''; // clearing the UI from data when switching to another room
    }

    render(data) { // outputting new chats in DOM
        const when = dateFns.distanceInWordsToNow( // changing the date format
            data.created_at.toDate(),
            {addSuffix: true}
        )
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}:</span>
        <span class="message">${data.message}</span>
        <span class="time">${when}</span>
        </li>
        `
        this.list.innerHTML += html;
    }
}