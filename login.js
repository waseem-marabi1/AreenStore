let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginbtn = document.querySelector("#loginbtn")
let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginbtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (password.value === "" || username.value === "") {
        alert("enter the user name and password")
        return;
    } else {
        if (getusername === null || getpassword === null || getpassword && getpassword.trim() !== password.value.trim() || getusername && getusername.trim() !== username.value.trim()) {
            alert("the username or password if filed")
            
            username.value =""
            password.value =""
            return;
        }
    }
    
        setTimeout(() => {
            window.location = "index.html";
        }, 1500)
    
})