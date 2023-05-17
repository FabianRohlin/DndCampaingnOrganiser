// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVxECDTozSppkmGRaOVMugCjxT9OEdsr8",
    authDomain: "dnd-web-utv.firebaseapp.com",
    databaseURL: "https://dnd-web-utv-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dnd-web-utv",
    storageBucket: "dnd-web-utv.appspot.com",
    messagingSenderId: "67629867139",
    appId: "1:67629867139:web:d800ceb3440bd79ca37bb6",
    measurementId: "G-V8MF4Q8X3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import{getDatabase, ref, remove, child, get} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";




const db = getDatabase();
// Define variables for the input fields and buttons
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findCharacterName = document.querySelector("#findCharacterName");
var findAc = document.querySelector("#findAc");
var findHp = document.querySelector("#findHp");
var findstrength = document.querySelector("#findstrength"); 
var findDexterity = document.querySelector("#findDexterity");
var findConstitution = document.querySelector("#findConstitution");
var findIntelligence = document.querySelector("#findIntelligence");
var findWisdom = document.querySelector("#findWisdom");
var findCharisma = document.querySelector("#findCharisma");
var findAbilities = document.querySelector("#findAbilities");
var findPp = document.querySelector("#findPp");
var findGp = document.querySelector("#findGp");
var findSp = document.querySelector("#findSp");
var findCp = document.querySelector("#findCp");
var findInventory = document.querySelector("#findInventory");


var displayIDs = document.querySelector("#displayIDs");

var removeBtn = document.querySelector('#remove');
var findBtn = document.querySelector("#find");

function FindDataCp3(){
    const dbref = ref(db);
    get(child(dbref, 'Sheets/campaign3/' + findID.value)).then((snapshot) => {
        if (snapshot.exists()) {
            findName.innerHTML = "Name: " + snapshot.val().Name;
            findCharacterName.innerHTML = "Charactername: " + snapshot.val().CharacterName;
            findAc.innerHTML = "Ac: " + snapshot.val().Ac;
            findHp.innerHTML = "Hp: " + snapshot.val().Hp;
            findstrength.innerHTML = "Strength: " + snapshot.val().Strength;
            findDexterity.innerHTML = "Dexterity: " + snapshot.val().Dexterity;
            findConstitution.innerHTML = "Constitution: " + snapshot.val().Constitution;
            findIntelligence.innerHTML = "Intelligence: " + snapshot.val().Intelligence;
            findWisdom.innerHTML = "Wisdom: " + snapshot.val().Wisdom;
            findCharisma.innerHTML = "Charisma: " + snapshot.val().Charisma;
            findAbilities.innerHTML = "Abilities: " + snapshot.val().Abilities;
            findPp.innerHTML = "pp: " + snapshot.val().Pp;
            findGp.innerHTML = "gp: " + snapshot.val().Gp;
            findSp.innerHTML = "sp: " + snapshot.val().Sp;
            findCp.innerHTML = "cp: " + snapshot.val().Cp;
            findInventory.innerHTML = "Inventory: " + snapshot.val().Inventory;
        } else {
            alert("No data available");
        }
    }).catch((error) => {
        alert(error);
    });

}

const dbRef = ref(getDatabase());
get(child(dbRef, 'Sheets/campaign3')).then((snapshot) => {
  if (snapshot.exists()) {
    let folderNames = '';
    snapshot.forEach(childSnapshot => {
      const folderName = childSnapshot.key;
      folderNames += `${folderName}<br>`;
    });
    displayIDs.innerHTML = folderNames;
  } else {
    alert("No data available");
  }
}).catch((error) => {
  alert(error);
});



 function RemoveDataCp3(){
     var id = findID.value;

     remove(ref(db, 'Sheets/campaign3/' + id))
     .then(() => {
         alert("Data removed");
     })
     .catch((error) => {
         alert(error);
     });
 }



findBtn.addEventListener("click", FindDataCp3);
removeBtn.addEventListener("click", RemoveDataCp3);