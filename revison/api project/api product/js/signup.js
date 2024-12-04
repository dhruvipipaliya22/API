import navbar from "../components/navbar.js";
import apimethod from "../url/api.js";

document.getElementById("navbar").innerHTML = navbar();


const handaldata = (e) => {
  e.preventDefault();
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    cart:[],
  };
  apimethod.post(user);
  window.location.href = "/revison/api project/api product/pages/login.html";
}

document.getElementById("signup").addEventListener("submit", handaldata);
// const getData = async () => {
//     let userarry = await apimethod.get();
// }
// getData();
