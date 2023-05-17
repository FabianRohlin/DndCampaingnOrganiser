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

import{getDatabase, ref, set, update, remove, child, get} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

const db = getDatabase();
// Define variables for the input fields and buttons
var enterName = document.querySelector("#enterName");
var enterCampaign = document.querySelector("#enterCampaign");
var enterCharacterName = document.querySelector("#enterCharacterName");
var enterAc = document.querySelector("#enterAc");
var enterHp = document.querySelector("#enterHp");
var enterstrength = document.querySelector("#enterstrength");
var enterDexterity = document.querySelector("#enterDexterity");
var enterConstitution = document.querySelector("#enterConstitution");
var enterIntelligence = document.querySelector("#enterIntelligence");
var enterWisdom = document.querySelector("#enterWisdom");
var enterCharisma = document.querySelector("#enterCharisma");
var enterAbilities = document.querySelector("#enterAbilities");
var enterPp = document.querySelector("#enterPp");
var enterGp = document.querySelector("#enterGp");
var enterSp = document.querySelector("#enterSp");
var enterCp = document.querySelector("#enterCp");
var enterInventory = document.querySelector("#enterInventory");


var insertBtn = document.querySelector("#insert"); 
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");


    
function InsertData(){
  set(ref(db, "Sheets/" + enterCampaign.value + "/" + enterCharacterName.value), {
      Name: enterName.value,
      CharacterName: enterCharacterName.value,
      Campaign: enterCampaign.value,

      Ac: enterAc.value,
      Hp: enterHp.value,

      Strength: enterstrength.value,
      Dexterity: enterDexterity.value,
      Constitution: enterConstitution.value,
      Intelligence: enterIntelligence.value,
      Wisdom: enterWisdom.value,
      Charisma: enterCharisma.value,

      Abilities: enterAbilities.value,

      Pp: enterPp.value,
      Gp: enterGp.value,
      Sp: enterSp.value,
      Cp: enterCp.value,
      Inventory: enterInventory.value,
  })
  .then(()=>{
      alert("Data saved");
  })
  .catch((error)=>{
      alert(error);
  });
}


function UpdateDataCp1(){
    var id = enterCharacterName.value;
    var name = enterName.value;
    var ac = enterAc.value;
    var hp = enterHp.value;
    var strength = enterstrength.value;
    var dexterity = enterDexterity.value;
    var constitution = enterConstitution.value;
    var intelligence = enterIntelligence.value;
    var wisdom = enterWisdom.value;
    var charisma = enterCharisma.value;
    var abilities = enterAbilities.value;
    var pp = enterPp.value;
    var gp = enterGp.value;
    var sp = enterSp.value;
    var cp = enterCp.value;
    var inventory = enterInventory.value;


    update(ref(db, 'Sheets/campaign1/' + id), {
         Name: name,
         Ac: ac,
         Hp: hp,
         Strength: strength,
         Dexterity: dexterity,
         Constitution: constitution,
         Intelligence: intelligence,
         Wisdom: wisdom,
         Charisma: charisma,
         Abilities: abilities,
         Pp: pp,
         Gp: gp,
         Sp: sp,
         Cp: cp,
         Inventory: inventory
    })
    .then(() => {
        alert("Data updated");
    })
    .catch((error) => {
        alert(error);
    });
}

function RemoveData(){
    var id = enterCharacterName.value;
    var campaign = enterCampaign.value;

    remove(ref(db, 'Sheets/'+ campaign + '/' + id))
    .then(() => {
        alert("Data removed");
    })
    .catch((error) => {
        alert(error);
    });
}

insertBtn.addEventListener("click", InsertData);
updateBtn.addEventListener("click", UpdateDataCp1);
removeBtn.addEventListener("click", RemoveData);
