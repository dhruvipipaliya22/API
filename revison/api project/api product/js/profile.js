import navbar from "../components/navbar.js";
import getValue from "../components/helpr.js";

document.getElementById("navbar").innerHTML = navbar();

const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
  alert("login first")
  window.location.href = "/revison/api project/api product/pages/login.html";
}

const displayProfile = () => {
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);
  getValue("profile-name").innerHTML = user.name;
  getValue("profile-email").innerHTML = user.email;
  getValue("profile-password").innerHTML = user.password;
}

displayProfile();
