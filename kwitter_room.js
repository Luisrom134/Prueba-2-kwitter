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
    document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
//AÑADE TUS ENLACES DE FIREB
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "Kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class=room_name  id="+Room_names+"onclick=redirectToRoomName(this.id) >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +- row;

       
      //Inicio del código
      
      //Final del código
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";            
}
function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }