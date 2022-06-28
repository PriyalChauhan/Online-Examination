let form = document.getElementById("signupForm")
let uname = document.getElementById('FName')
let email = document.getElementById('email')
let password = document.getElementById('password')

let finalUser = JSON.parse(localStorage.getItem('users'))

let loginButton = document.getElementById('button1')
loginButton.addEventListener("click", 
function addUser(e){
    e.preventDefault()
    if(uname.value == "" || email.value == "" || password.value == ""){
        alert("Fill all fields")
        return false;
    }



let allUser = {
    usernameAll : uname.value,
    emailAll : email.value,
    passwordAll : password.value
}

let indexUser = []

if(localStorage.getItem('users')== null){
    indexUser.push(allUser)
    localStorage.setItem('users',JSON.stringify(indexUser))
}
else{
    indexUser = JSON.parse(localStorage.getItem('users'))
    indexUser.push(allUser)
    localStorage.setItem('users',JSON.stringify(indexUser))
}

console.log(indexUser)
alert('Registration completed! Please Log in')
form.reset()
})