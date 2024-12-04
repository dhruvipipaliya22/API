import { getValue } from "../components/helpr.js";
import navbar from "../components/navbar.js";
import apimethod from "../url/api.js";

document.getElementById("navbar").innerHTML= navbar();
const handallogin = async (e) => {
  e.preventDefault();
  let email = getValue("email");
  let password = getValue("password");
  let users = await apimethod.get();
  let user = users.filter((e) => e.email === email)
  if (user.length == 0) {
    alert("Email doesn't exist!!,please signup first!!")
    return
  }
  if (user[0].password !== password) {
    alert("wrong password")
    return
  }
  alert("login is successfull...")
  localStorage.setItem("isLogin", true)
  localStorage.setItem("userData", JSON.stringify(user[0]))
  window.location.href = "/revison/api project/api product/index.html";
};

document.getElementById("login").addEventListener("submit", handallogin)