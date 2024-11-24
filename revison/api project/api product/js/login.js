import apiMethod from "../API/api.js";
import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();
const handallogin = async (e) => {
    e.preventDefault();

    const email = getValue("email");
    const password =getValue("password");

    const users = await apiMethod.get();
    const user = users.filter((e) => e.email === email)

    if(user.length == 0){
        alert("Email doesn't exist!")
        return
    }
    if (user[0].password !== password) {
        alert("wrong password")
        return
    }
    alert("login is successfull...")

    localStorage.setItem("isLogin",true)
    window.location.href="revison/api project/api product/index.html"
};

document.getElementById("login").addEventListener("submit", handallogin);