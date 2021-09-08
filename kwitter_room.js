
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

       user_name = localStorage.getItem("user_name");
       document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
         function addRoom()
       {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
       });
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";




           }


 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
 getData();

 function redirectToRoomName(name)
 {
 console.log(name);
 localStorage.setItem (Room_name , name );
 window.location = "kwitter.html";
 }

 function logout()
 {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "kwitter.html";
 } 