// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');
const roomsButtons = document.querySelectorAll('.chat-rooms button');

// update room chat
rooms.addEventListener('click', e => {
    e.preventDefault();

    roomsButtons.forEach(room => { // styling active room
        if(room.id === e.target.getAttribute('id')) {
            room.style.background = 'green';
        } else {
            room.style.background = 'blue';            
        }
    });

    if (e.target.tagName === 'BUTTON') {
        chatUI.clear(); // clearing the old room chat
        chatroom.updateRoom(e.target.getAttribute('id')); // switching to the new room
        chatroom.getChats(data => chatUI.render(data)); // restarting the real time event listener
    }
});

// add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message) // adding chat
        .then(() => newChatForm.reset()) // resetting input field
        .catch(error => console.log(error));
});

// adding new name
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    console.log(newName);
    chatroom.updateName(newName);
    newNameForm.reset();
    updateMsg.innerText = `Your name was updated to ${newName}`; // showing then hiding the update name notification
    setTimeout(() => updateMsg.innerText = '', 3000);
});

// check localStorage for a name
const username = localStorage.username ? localStorage.username : 'anon';

// class instances
const chatUI = new ChatUI(chatList); // from UI.js
const chatroom = new Chatroom('general', username); // from chat.js

// getting new chats and outputting them to DOM
chatroom.getChats(data => chatUI.render(data)); 