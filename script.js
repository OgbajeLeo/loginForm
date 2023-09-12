//function when register button is clicked
function register() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value

    if ((password1 === password2 ) &&(password1 !="")&&(password2 !="")){
        localStorage.setItem("email", email)
        localStorage.setItem("password", password1)
        localStorage.setItem("fullName", name)

        alert("Registration Successfull \n Login Below")
        window.location="./login.html"
    }
    else if((password1 != password2 )){
        alert ("Password do not Match")
        window.location="./index.html"
    }
    else(
        alert("Fil all fields")
    )
}


//function when Login button is clicked
function login() {
    let email = document.getElementById("email").value
    let password3 = document.getElementById("password3").value
      
    let dbEmail = localStorage.getItem("email")
    let dbPassword = localStorage.getItem("password")
    
    if ((email === dbEmail) && (password3 === dbPassword)){
        alert("Successful")
    }
    else {
        alert("Incorrect Details")
       
    }
    }

