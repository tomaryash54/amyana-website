
const menu = document.getElementById("menu");
const nav = document.getElementById("navMenu");

if(menu){
menu.addEventListener("click",()=>{
if(nav.style.display==="flex"){
nav.style.display="none";
}else{
nav.style.display="flex";
nav.style.flexDirection="column";
}
});
}
