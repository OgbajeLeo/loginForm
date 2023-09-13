
//function when Login button is clicked
function login() {
    document.getElementById("logForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get user input
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Retrieve student data from local storage
        const storedStudent = JSON.parse(localStorage.getItem("student"));

        // Check if storedStudent exists and credentials match
        if (email === storedStudent.email && password === storedStudent.password1) {

            alert(`
            Dear ${storedStudent.name}, 
            Welcome to your acount`)
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        } else {
            // Display an error message
            document.getElementById("pop").textContent = "Invalid email or password.";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }
    });
}


function register() {
    document.getElementById("regForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get user input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const pop = document.getElementById("pop")

        // Create a student object
        const student = {
            name,
            email,
            password1,
            password2
        };

        if (password1 === password2) {
            // Save student data to local storage
            localStorage.setItem("student", JSON.stringify(student));

            // Redirect to the login page
            window.location.href = "login.html";
            return
        }
        else {
            pop.innerHTML = "Password do not Match"
            reset()
            return
        }


    });
}
//to reset the form
function reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
}