import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
  alert("login first")
  window.location.href = "/revison/api project/api product/pages/login.html";
}

const displayProfile = () => {
  const user=JSON.parse(localStorage.getItem("userData"));
  let name=document.getElementById("name").innerHTML = `Username:${user.name}`;
  let email=document.getElementById("email").innerHTML = `Email:${user.email}`;
  let password=document.getElementById("password").innerHTML = `Password:${user.password}`;
}

displayProfile();
