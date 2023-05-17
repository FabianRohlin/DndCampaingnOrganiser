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

firebase.initializeApp(firebaseConfig);



var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress =  document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector(".img");
 function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
}

// upload image
function uploadImage(){

    let storageRef = firebase.storage().ref("imagesCp3/"+fileName);
    let uploadTask = storageRef.put(fileItem);


    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.style.width=percentVal+"%";
    },(error)=>{
        console.log("Error is ", error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url);

            if(url != ""){
                img.setAttribute("src",url);
                img.style.display="block";
            }


        })


    })
    
    
}

