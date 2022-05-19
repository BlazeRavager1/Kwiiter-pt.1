//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBIaZChKfvcSHcoSeSu7pUPBuEVjSVN7hY",
    authDomain: "kwitter-1294b.firebaseapp.com",
    projectId: "kwitter-1294b",
    storageBucket: "kwitter-1294b.appspot.com",
    messagingSenderId: "616423409735",
    appId: "1:616423409735:web:2ae17c505194a99e28c962",
    measurementId: "G-PFEZ2VMDY2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();