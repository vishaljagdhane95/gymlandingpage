document.getElementById("joinBtn").onclick=()=>alert("Welcome to PowerFit!");
document.getElementById("sendBtn").onclick=()=>{
 let n=name.value,e=email.value,m=msg.value;
 status.innerText = n&&e&&m ? "Sent!" : "Fill all fields";
};