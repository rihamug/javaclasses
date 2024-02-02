// Declaring an array
let usersList = [
    {
        name:"Arnold",
        email:"arnold@gmail.com",
        password:123,
    }
]

let usersListDisplay = document.getElementById("users-list")
// On page load, call the display users function to display users by default
displayUsers()

//Register New Users
function register() {
    let nameInput = document.getElementById("name")
    let emailInput = document.getElementById("email")
    let passwordInput = document.getElementById("password")
// Adding an object to an array
  let newUser = {
    name:nameInput.value,
    email:emailInput.value,
    password:passwordInput.value,
  }
  usersList.push(newUser)
  
  console.log(usersList)
  usersListDisplay.innerHTML = ""
  displayUsers()
}


//Display Users
function displayUsers() {
    
    for (const user of usersList) {
        appendListItem(usersListDisplay, user)
    }

}
function appendListItem(usersListDisplay, user) {
    let singleUserDisplay = document.createElement("li")
    singleUserDisplay.innerHTML = `
    <span>${user.name}</span>
    <span>${user.email}</span>
    <span>${user.password}</span>
    `
    usersListDisplay.appendChild(singleUserDisplay)
}

var fruitsDiv = document.getElementById("fruits-div");
function validate() {

    if (fruitsDiv.style.display === "none") {
        fruitsDiv.style.display = "block";
    }
    else{
        fruitsDiv.style.display = "none";
       
    }



    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;
    

    let validUser = usersList.find(function(user){
        if (user.email == loginEmail && user.password == loginPassword){
            return true
        } else{
            return false
        }
    })
    if (validUser) {
        alert("Welcome Back "+validUser.name)
    } else{
        alert("Incorrect user")
    }


}


let fruitInput = document.getElementById("fruitInput");
let fruitsAdded = document.getElementById("fruits-added")

let fruits = []

let fruitsDispay = document.getElementById("fruits-added")
function addFruit(fruitsDispay) {
   
}

console.log(fruits)