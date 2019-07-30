// Page content:
// Adding new chat documents.
// Setting up a real time listener.
// Watching the username.
// Updating the room.

class Chatroom {
    constructor(room, username) {
        this.room = room,
            this.username = username,
            this.chats = db.collection('chats')
    }

    // format a chat object
    async addChat(message) {
        const now = new Date();
        const chat = {
            message: message,
            room: this.room,
            username: this.username,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        // save the chat document
        const response = await this.chats.add(chat);
        return response;
    }

    getChat(callback) {
        this.chats
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added') {
                        callback(change.doc.data());
                    }
                });
            });
    }
}

const chatroom = new Chatroom('gaming', 'Mo');
// chatroom.addChat("hello everyone!")
//     .then(() => console.log('chat added'))
//     .catch(error => {
//         console.log(error)
//     });
chatroom.getChat(data => {
    console.log(data);
});