
var koyal = new Audio('assets/koyal.mp3');
var moye = new Audio('assets/Moye.mp3');
var MoyeDiv =  document.getElementById("MoyeSec")


if(MoyeDiv){
    moye.play() 
}
else if (!MoyeDiv){
    koyal.play()
}
function RemoveMoye(){
   MoyeDiv.style.display = "none"
    moye.pause()
}

function thala(name){
console.log("hello");
}

function copyLink(element){
   let link = document.getElementById("link")

"https://thalaforareason-70lv.onrender.com/"+link.select();
link.setSelectionRange(0, 99999);
document.execCommand('copy')
const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(element+ " is Thala for a reason. Are you, Check this out:")}%20${encodeURIComponent("https://thalaforareason-70lv.onrender.com/"+link.value)}`;
// Open WhatsApp with the share URL
 window.location.href = whatsappUrl;
}
