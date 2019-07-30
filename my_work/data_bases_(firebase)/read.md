# Data Bases: 
--------------

Websites that work with data need to store this data in online servers.
Data bases are a part of the backend.



There are two main types of data bases:
---------------------------------------

1- Sequel databases(SQL):
    - Tables
    - Rows
    - Columns
    - etc...

1- No sequel databases(NoSQL):
    - Collections
    - Documents
    - Properties
    - etc...

NoSql databases is made from collections.
Each element in a collection is an object with keys and values, just like javascript.

Fore example, a database collection named todos by the project manager,
it contains a todos elements, each 'todo' element is an object with some information.
_____________________________________________________________________________________



# Firebase:
-----------

"Firebase" is a free NoSQL database server done by Google, it provides many features.
One of the features called Cloud Firestore, which provides backend services.



How to start a new project on Firebase / Firestore:
---------------------------------------------------

General steps:
1- Go to https://firebase.google.com/
2- 'Go to console'
3- Create a project, then jump to the dashboard
    (dashboard is the control center area for the backend of the project)

Working on the database section:
1- After reaching the dashboard page, jump to Database section
2- create a new database
3- choose weather to Enable the locked mode (applying firestore rule to secure the data),
    or the test mode (not secured and opened to public) 

Working on the database project:
1- After creating the project and Enabling the mode, the project is ready
2- Add a collection (or many collections), and give it a name (Collection ID)
3- Add the Document ID, or keep it "Auto ID" and let Firestore give it a unique ID automatically
4- Add a key (Field) and a value with its type
5- Save

After saving, the new collection has been created.

Then firestore provides a table that represents:
- The collections
- Their documents of the collections
- The details (the object) of each document  
_____________________________________________________________________________________



# The coding part:
------------------



Connecting the backend project to the frontend one:
---------------------------------------------------

Firestore provides a script to connect the project to the code area.

To find this script and connect it:
1- Go to the dashboard (Project Overview) and lick on "</>"
2- Copy the script to the HTML code:
    The script contains:
    - Link for the Firebase main site
    - Configuration code with the apiKey of the project
    - Function to apply the configuration code   
3- Modify the script:
    - After adding the script to the HTML, the console will show a warning
    - The warning says that all the Firebase features are linked to the frontend project
    - Therefore, we make another copy from the link in HTML
    - Add two queries to the two link, "app" and "firestore"
    - Store the connection in a variable and define it with "firebase.firestore()"

After this steps, the database and the local code are connected.



Interacting with the data using javascript:
------------------------------

To get data:
To access the data on the database project, grab the connection variable (db) and start by applying the collection method on it:
- .collection("collection-name").get() is an async function that gets the collection from the data base,
and return a promise. Therefore .then() and .catch can be used.
- The parameter of .get().then() represents information (properties) about the collections in the database project,
    one of there properties are "docs" which refer to the documents of the collections.
- .docs returns arrays containing details about the  documents content,
    and doesn't show the actual data(the object's keys and values), and it has a method (prototype) called data.
- .data() return the actual data (the object's keys and values).

To add data:
- .collection("collection-name).add(object) add a collection to the database and returns a promise,
    it takes an object as a parameter, since the document in the database base are represented as objects.

To delete data:
- Get reference to the document id that must be deleted.
- .doc(id) get the document with the id in it's parameter.
- .delete() delete the selected document.

Adding or deleting data doesn't interact on real time with the UI, the page should be refreshed to see the changes.
To solve this, we use a real time listener called .onSnapshot(func).

To add a real time listener:
- .collection("collection-name").onSnapshot(func) gets the data and it has an extra method called docChanges,
    and it generates automatically every time a change happen.
- .docChanges() gets the changes that happened to the data and returns an array of objects,
    where each object represent a change.
- The key object.type shows the type of the change, e.g. an element added or removed
___________________________________________________________________________________________