// Page content:
// Adding new chat documents.
// Setting up a real time listener.
// Watching the username.
// Updating the room.

class Chatroom {
    constructor(room, username) {
        this.room = room,
            this.username = username,
            this.chats = db.collection('chats'),
            this.unSub;
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
        this.unSub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateName(username) {
        this.username = username;
    }

    updateRoom (room) {
        this.room = room;
        console.log('room updated');
        if(this.unSub()) {
            this.unSub();
        }
    }
}

const chatroom = new Chatroom('general', 'Mo');
chatroom.getChat(data => {
    console.log(data);
});

setTimeout(() => {
chatroom.updateRoom('gaming');
chatroom.updateName('Mike');
chatroom.getChat(data => {
    console.log(data);
});
chatroom.addChat('hello');
}, 3000)