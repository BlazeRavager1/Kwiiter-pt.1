//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBIaZChKfvcSHcoSeSu7pUPBuEVjSVN7hY",
    authDomain: "kwitter-1294b.firebaseapp.com",
    databaseURL: "https://kwitter-1294b-default-rtdb.firebaseio.com",
    projectId: "kwitter-1294b",
    storageBucket: "kwitter-1294b.appspot.com",
    messagingSenderId: "616423409735",
    appId: "1:616423409735:web:a285279e5eea916c28c962",
    measurementId: "G-PQP9J7FSCJ"
};

firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();



user_name = localStorage.getItem("user_name");
document.getElementById("user_name ").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    windows.location = "kwitter_page.html"

}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}