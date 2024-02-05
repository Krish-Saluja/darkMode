let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    console.log("Changed to Dark Mode")
    })


btn.addEventListener("dblclick", ()=> {
    document.body.style.backgroundColor= "white";
    console.log("Changed to Light Mode")
})