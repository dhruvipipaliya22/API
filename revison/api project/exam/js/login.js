import productmethod from "../api/productapi.js";
import { getValue } from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

const handallogin = async (e) => {
  e.preventDefault();
  let email = getValue("email");
  let password = getValue("password");
  let datas = await productmethod.get();
  let data = datas.filter((e) => e.email === email)
  if (data.length == 0) {
    alert("Email doesn't exist!!,please signup first!!")
    return
  }
  if (data[0].password !== password) {
    alert("wrong password")
    return
  }
  alert("login is successfull...")
  localStorage.setItem("isLogin", true)
  localStorage.setItem("userData", JSON.stringify(data[0]))
  window.location.href = "/revison/api project/api product/index.html";
};

document.getElementById("login").addEventListener("submit", handallogin)