
import method from "../api/api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

const handalsignup = (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    method.post(data);
    window.location.href = "/revison/api project/exam/pages/signup.html";
  }
document.getElementById("signup").addEventListener("submit",handalsignup);