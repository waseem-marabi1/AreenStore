let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let configpassword = document.querySelector("#configpassword")
let registerbtn = document.querySelector("#registerbtn")

registerbtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (username.value === "" || email.value === "" || password.value === "" || configpassword.value === "") {
        alert("the data is not compleat")
    }
    else if (password.value !== configpassword.value) {
        alert("the password is not configt")

    } else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        setTimeout(() => {
            window.location="login.html"
            console.log("waseem")
        }, 1500)


    }

})
