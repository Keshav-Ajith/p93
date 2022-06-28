const firebaseConfig = {
    apiKey: "AIzaSyBTJ1-05wYRXKT7AaYBxjJuTxexvAUCEyU",
    authDomain: "kwitterkeshav.firebaseapp.com",
    projectId: "kwitterkeshav",
    storageBucket: "kwitterkeshav.appspot.com",
    messagingSenderId: "732604448238",
    appId: "1:732604448238:web:a0f0296f517ffdb285a2ff"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
