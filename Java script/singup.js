
let form = document.getElementById("signupForm");
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmPassword").value;
    console.log(name, email, password, confirmpassword);

    if (!email.includes("@")) {
        alert("Email must contain @");
        return;
    }
    if (password.length < 6) {
        alert("please enter strong password");
        return;
    }
    if (password !== confirmpassword) {
        alert("password doesnot match")
        return;
    }
    alert('signup sucessfull')



    // =================local storage or session storage
    let userdata = {
        name: name,
        email: email,
        password: password
    }
    localStorage.setItem("user", JSON.stringify(userdata))
    // // localStorage.removeItem("user")

    // sessionStorage.setItem("user", JSON.stringify(userdata));
    // // 2 Retrieve data
    // let getdata = sessionStorage.getItem("user"); // sirf key chahiye, JSON.stringify nahi
    // getdata = JSON.parse(getdata); // string ko wapas object me convert karo
    // console.log(getdata);

    // // 3Remove data
    // sessionStorage.removeItem("user"); // yahan key ka naam "user" hoga, variable "name" nahi
    // console.log("Data removed from sessionStorage");


})