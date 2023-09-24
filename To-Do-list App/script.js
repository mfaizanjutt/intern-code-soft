let inputdata=document.querySelector("#get-data");

let listcontainer=document.querySelector("#list-container")

function addlist()
{
    if(inputdata.value ==='')
    {
        alert("You must have write some thing:")
    }
    else 
    {
    let li=document.createElement("li");
    li.innerHTML=inputdata.value;
    listcontainer.appendChild(li)
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    inputdata.value=" ";
    save();
}
listcontainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        save();
    }
    else if(e.target.tagName==="SPAN")
    {
         e.target.parentElement.remove();
         save();
    }
  
},false)


function save()
{
    localStorage.setItem('data',listcontainer.innerHTML)
}
function show()
{
    listcontainer.innerHTML=localStorage.getItem("data")
}
show()