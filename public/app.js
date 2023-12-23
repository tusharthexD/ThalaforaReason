
var koyal = document.getElementById("koyalSound")
var moye = document.getElementById("moyeSound")
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
link.select();
link.setSelectionRange(0, 99999);
document.execCommand('copy')
const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(element+ " is Thala for a reason. Are you, Check this out:")}%20${encodeURIComponent(link.value)}`;
// Open WhatsApp with the share URL
 window.location.href = whatsappUrl;
}
