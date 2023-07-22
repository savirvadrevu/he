//YOUR FIREBASE LINKS

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
    
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
message_tag="<h4>"+message+"</h4>"  
finalOutput=name_tag+message_tag
document.getElementById("output").innerHTML+=finalOutput
//End code
      } });  }); }
getData();
function send()
{
    msg=document.getElementById("msg").value
    firebase.database().ref (room_name).push({
    name:user_name,
    message:msg,
    like:0


});
document.getElementById("msg").value= "";


}

function logout() 
{localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location ="kwitter.html";} 
