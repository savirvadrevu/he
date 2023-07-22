

var firebaseConfig = {
  apiKey: "AIzaSyBMC9Xww_UKkjOxDflcTvCgLLiWmpzw83k",
  authDomain: "kwitter0exe.firebaseapp.com",
  databaseURL: "https://kwitter0exe-default-rtdb.firebaseio.com",
  projectId: "kwitter0exe",
  storageBucket: "kwitter0exe.appspot.com",
  messagingSenderId: "940815190830",
  appId: "1:940815190830:web:3e6087e1622909014108bf",
  measurementId: "G-C1FRMCRKQ8"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";


    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"     
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_msg.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_msg.html";
}   

function logout() 
{localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location ="kwitter.html";} 



