// import getValue from "../components/helpr.js";
import navbar from "../components/navbar.js";
import apimethod from "../url/api.js";

document.getElementById("navbar").innerHTML=navbar();
const handallogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = await apimethod.get();
    const user = users.filter((e) => e.email === email)
    if (user.length == 0) {
      alert("Email doesn't exist!")
      return
    }
    if (user[0].password !== password) {
      alert("wrong password")
      return
    }
    alert("login is successfull...")
    localStorage.setItem("isLogin", true)
    localStorage.setItem("userData", JSON.stringify(user[0]))
    window.location.href = "/revison/api project/api product/pages/profile.html";
  };
  
  document.getElementById("login").addEventListener("submit", handallogin);