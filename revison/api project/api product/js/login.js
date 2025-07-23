import { getValue } from "../components/helpr.js";
import navbar from "../components/navbar.js";
import apimethod from "../url/api.js";

document.getElementById("navbar").innerHTML= navbar();

const handallogin = async (e) => {
  e.preventDefault();
  let email = getValue("email");
  let password = getValue("password");
 let users = await apimethod.get();
  let user = users.find((e) => e.email === email)
  if (!user) {
    alert("Email doesn't exist!!,please signup first!!")
    return
  }
  if (user.password !== password) {
    alert("wrong password")
    return
  }
  alert("login is successfull...")
  localStorage.setItem("isLogin", true)
  localStorage.setItem("userData", JSON.stringify(user))
  window.location.href = "/revison/api project/api product/index.html";
};

document.getElementById("login").addEventListener("submit", handallogin)