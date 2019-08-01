# chat.js : (for handling the database)
===========

class: Chatroom - (for handling the data and the chatroom)
---------------

methods of Chatroom:
--------------------

addChat(): (adding a new chat documents)
    - an async method that return a promise
    - accept string as param (user input value)
    - build a new object document (chat) in database
    - add (store) the new chat object (created by addChat method) to the database collection

    PS: firebase has their own date format
        the method 'firebase.firestore.Timestamp.fromDate(some date..)' converts the normal data to a firebase date

getChats(): (setting up a real time listener)
    - .where() method return data with specific properties mention as params
    - .orderBy() sort the data by with specific properties mention as params
    - .onSnapshot() listen to the changes on real time and return the data of this changes using a callback function 

updateName():
    - updates the name with new name that passed in as param

updateRoom():
    - updates the room with new room that passed in as param
    - unsubscribe from changes (prevent real time even listener to stop listening to the old room changes)

________________________________________________________________________________________________________________________

# UI.js : (for handling the UI)
=========

class: ChatUI (for handling the UI of the chatroom)
--------------

methods of ChatUI:
------------------

clear():
    - clears the UI from data when switching to another room

render():
    - accept object as param (the data that is received by getChats() method in Chatroom class)
    - output the data in DOM as lists
________________________________________________________________________________________________________________________

# app.js : (for combining chat.js and UI.js together)
==========

file events:
------------

update room:
    - click event listener that grabs the clicked button, where each button refer to a specific room, and apply the updateRoom() method on it that will switch the room to the clicked one by clearing the UI from the old room chat and restart the real time event listener so it watch the new room chats and output the new room chat

adding new chat:
    - submit event listener that grabs the user input value from the message field and apply the addChat() method on it that will output it in DOM and save it in the database

updating name:
    - submit event listener that grabs the user input value from the name field and apply the updateName() method on it that will output a timeOut notification that the name is changed updated it in the user Chatroom constructor