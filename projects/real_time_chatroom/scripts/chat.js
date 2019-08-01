// this file is for handling the data in the database (firebase)
//--------------------------------------------------------------//

// creating a class that handles:
// adding new chat documents
// setting up a real time listener
// updating and watching the username
// updating the room.

class Chatroom {
    constructor(room, username) {
        this.room = room,
            this.username = username,
            this.chats = db.collection('chats'), // reference to the database collection 'chats'
            this.unSub; // defined in getChats()
    }

    async addChat(message) { // Adding new chat documents
        const now = new Date();
        const chat = { // creating a new chat object
            message: message,
            room: this.room,
            username: this.username,
            created_at: firebase.firestore.Timestamp.fromDate(now) // converting the date to a firebase data format
        }
        const response = await this.chats.add(chat); // adding the new chat
        return response;
    }

    getChats(callback) { // getting the new chats data
        this.unSub = this.chats
            .where('room', '==', this.room) // filtering chats according to the room property
            .orderBy('created_at') //ordering chats according to the date property
            .onSnapshot(snapshot => { // adding real time event listener
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateName(username) { // updating username
        this.username = username;
        localStorage.setItem('username', username); // storing the last updated name
    }

    updateRoom(room) { // updating room
        this.room = room;
        console.log('room updated');
        if (this.unSub()) {
            this.unSub(); // canceling real time event listener
        }
    }
}