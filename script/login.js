let logUsername = document.getElementById("loginId")
let logPassword = document.getElementById("passwordId")
let finalUsers = JSON.parse(localStorage.getItem('users'))

let button2 = document.getElementById("button2")

button2.addEventListener("click", (e) => {
    e.preventDefault()
    const fillArr = finalUsers.filter(user =>
        user.usernameAll == logUsername.value && user.passwordAll == logPassword.value
        )
    console.log(fillArr)

    if(fillArr.length > 0){
    alert('Welcome, you are now logged in.')
    location.replace("Index.html")
    // window.location.href("Index.html")
    } 
    else {
    alert('username or password is incorrect.')
    }

})

