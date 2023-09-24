let menubtn=document.querySelector(".menu-btn")
let cancelbtn=document.querySelector(".cancel-btn")
let elm=document.querySelector(".menu-list");
console.log(menubtn)
menubtn.onclick=()=>{
    elm.classList.add("active")
}
cancelbtn.addEventListener("click",function(){
    elm.classList.remove("active")
})