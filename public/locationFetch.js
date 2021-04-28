const newLocForm = document.querySelector("#newLocForm");
const delButtons = document.querySelectorAll(".locDeleteBtn")

newLocForm.addEventListener("submit",e=>{
    e.preventDefault();
    const myData = newLocForm.querySelector("input").value;
    const bodyObj = {
        name:myData
    }
    console.log(bodyObj);
    fetch("/api/locations",{
        method:"POST",
        body: JSON.stringify(bodyObj),
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        }
    }).then(res=>{
        return res.json()
    }).then(data=>{
        console.log(data);
        location.reload();
    })
})

delButtons.forEach(btn=>{
    btn.addEventListener("click",e=>{
        const idToDelete = btn.getAttribute("data-locId")
        fetch(`/api/locations/${idToDelete}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(data=>{
            console.log("entry deleted!")
            location.reload();
        })
    })
})