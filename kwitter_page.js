const firebaseConfig = {
    apiKey: "AIzaSyB_l-nxFF0gLb6DS7Ij_qusz4EEyUoioMI",
    authDomain: "kwitter-4df8e.firebaseapp.com",
    databaseURL:"https://kwitter-4df8e-default-rtdb.firebaseio.com/",
    projectId: "kwitter-4df8e",
    storageBucket: "kwitter-4df8e.appspot.com",
    messagingSenderId: "440822500727",
    appId: "1:440822500727:web:686fab71c3dddaf389e572"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
//----PROXIMA CLASE----//
function send()
{
    msg = document.getElementById("msg").value;
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
  //Inicia código 
  name = message_data["name"];
  message = message_data["message"];
  like = message_data["like"];
  name_wiht_tag - "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
  message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updatelike(this.id)'>";
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span><button><hr>";

  row = name_wiht_tag + message_with_tag +like_button + span_with_tag;
  document.getElementById("output").innerHTML += row;
  //Termina código
  } });  }); }

  function updatelike(message_id)
  {
    console.log("Boton me gusta pulsado - "  + message_id);
    button_id = message_id
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log(update_likes);
    
    firebase.datafase().ref(room_name).child(message_id).update({
      like : update_likes
    });
  }

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }