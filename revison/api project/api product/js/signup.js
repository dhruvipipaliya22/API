import navbar from "../components/navbar.js";
import apimethod from "../url/api.js";
document.getElementById("navbar").innerHTML = navbar();


const handaldata = async (e) => {
  e.preventDefault();
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    cart:[],
  };
  await apimethod.post(user);
  window.location.href = "/revison/api project/api product/pages/login.html";
}

document.getElementById("signup").addEventListener("submit", handaldata);