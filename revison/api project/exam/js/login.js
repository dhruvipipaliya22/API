import method from "../api/api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

// const handallogin = async (e) => {
//     e.preventDefault();
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let data = await method.get();
//     let datas = data.filter((e) => e.email === email)
//     if (datas.length == 0) {
//       alert("Email doesn't exist!!,please signup first!!")
//       return
//     }
//     if (datas[0].password !== password) {
//       alert("wrong password")
//       return
//     }
//     alert("login is successfull...")
//     window.location.href = "/revison/api project/exam/index.html";
//   };
const handallogin = async (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let data = await method.get();
  let datas = data.filter((e) => e.email === email)
  if (datas.length == 0) {
    alert("Email doesn't exist!!,please signup first!!")
    return
  }
  if (datas[0].password !== password) {
    alert("wrong password")
    return
  }
  alert("login is successfull...")
  window.location.href = "/revison/api project/exam/index.html";
};
document.getElementById("login").addEventListener("submit",handallogin);