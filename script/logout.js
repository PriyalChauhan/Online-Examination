const logout = document.querySelector("#logout")
logout.addEventListener("click", (e) => {
    e.preventDefault()
     alert('Logged out')
     location.replace("Login.html")
})