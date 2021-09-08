
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAOdHlYqAIBsKb_KfK6uG4FgPAoXRFo62Q",
      authDomain: "kwitter-de3ca.firebaseapp.com",
      projectId: "kwitter-de3ca",
      storageBucket: "kwitter-de3ca.appspot.com",
      messagingSenderId: "58311675223",
      appId: "1:58311675223:web:8966d8b6f609d760110212"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send() 
    {
   msg = document.getElementById("msg").Value;
   firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });

    document.getElementById("msg").value = "";
    }

   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  //Start code

//End code
      } });  }); }
getData();

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
