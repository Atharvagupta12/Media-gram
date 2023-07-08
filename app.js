// like button

function Toggle(div){
 
    
   

var btn = document.getElementById('div.id');
if(div.classList.contains("fa-regular")){
    div.classList.remove("fa-regular");
    div.classList.add("fas");
}
else{
   div.classList.remove("fas");
    div.classList.add("fa-regular");
}

}


// dark mode 


var icon = document.getElementById("icon");

    icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.src = "Assets/sun.png";  
      }else{
        icon.src = "Assets/moon.png";
      }
    }

