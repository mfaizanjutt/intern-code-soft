let inputdata = document.querySelector("#get-data")


let listcontainer = document.querySelector("#list-container")


function addlist() {

    if (inputdata.value ===' ')
    {
        alert("you have must inter the data");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputdata.value;
        listcontainer.appendChild(li)

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
        
    }
   
    inputdata.value=" ";
    save();
}



listcontainer.addEventListener("click",function(e)
{
    if(e.target.tagName ===  "LI")
    {
        e.target.classList.toggle("checked");
        save()
    }
    else if(e.target.tagName  === "SPAN")
    {
        e.target.parentElement.remove();
        save()
    }
},false)
showfunction();

// function addlist()
// {
//     if(inputdata.value===' ')
//     {
//         alert("you have must data Enter:")
//     }
//     else
//     {
//     let li=listcontainer.createElement("div");
//     li.innerHTML=`<li>${inputdata.value} <span>\u00d7</span></li>`;
//     }
//     inputdata.value=" ";
// }


function save()
    {
          localStorage.setItem("data",listcontainer.innerHTML)
    }
function showfunction()
{
            listcontainer.innerHTML=localStorage.getItem("data")
}