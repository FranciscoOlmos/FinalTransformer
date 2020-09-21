var chrs = [
  {
    name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"
  },
  {
    name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"
  },
  {
    name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"
  },
  {
    name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"
  },
  {
    name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"
  },
  {
    name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"
  },
];

function transMaker(chrs){

  var chrsEle = document.createElement("div");
         chrsEle.classList.add("character"); 

  
 var nameEle=document.createElement("div");
  

 nameEle.innerHTML = "Name: " + chrs.name;
  
 
  
  var classEle = document.createElement("div");
  classEle.innerHTML ="Class: " + chrs.class.toUpperCase();
  
  var aflEle= document.createElement("div");
  aflEle.innerHTML = "Afl: " + chrs.afl;
    if(chrs.afl=="autobot"){
     chrsEle.classList.add("autobot");
  }else{
      chrsEle.classList.add("decepticon");
    }
  
var vehEle= document.createElement("div");
  vehEle.innerHTML = "Vehicle: " + chrs.vehicle;
  

  
  var logo=document.createElement("img");
  if(chrs.afl==="autobot"){
    chrsEle.classList.add("autobot");
    logo.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  }else if(chrs.afl==="decepticon"){
        chrsEle.classList.add("decepticon");
    logo.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
}

  if(chrs.vehicle=="truck"){
        vehEle.style.color="blue";


  }else if(chrs.vehicle==="tank"){
            vehEle.style.color="green";

  }else if(chrs.vehicle==="car"){
            vehEle.style.color="gold";

  }else if(chrs.vehicle==="plane"){
            
            vehEle.style.color="white";
  }
  
  
    
   chrsEle.appendChild(nameEle);
  
  chrsEle.appendChild(classEle);
  
    chrsEle.appendChild(aflEle);

  
    chrsEle.appendChild(vehEle);
     chrsEle.appendChild(logo);

  document.body.appendChild(chrsEle);
    
}

for (var i=0; i<chrs.length; i++){
  transMaker(chrs[i]);
}