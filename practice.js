
//ADD YOUR FIREBASE LINKS
 var firebaseConfig = {
    apiKey: "AIzaSyA4BgjkpeHTc1MjKqECPdpQemQy2_6ki7Y",
    authDomain: "kwitter-e326a.firebaseapp.com",
    databaseURL: "https://kwitter-e326a-default-rtdb.firebaseio.com",
    projectId: "kwitter-e326a",
    storageBucket: "kwitter-e326a.appspot.com",
    messagingSenderId: "436780234154",
    appId: "1:436780234154:web:414387d7fc97dbb504a7d3"
  };
firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
}
