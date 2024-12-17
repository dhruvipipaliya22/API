import productmethod from "../api/productapi.js";
import { Logout } from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
  alert("login first")
  window.location.href = "/revison/api project/api product/pages/login.html";
}

const handalproduct = async (e) => {
  e.preventDefault();
  const product = {
    name: getValue("name"),
    price: getValue("price"),
    img: getValue("img"),
  }
  await productmethod.post(product)
  window.location.href = "/revison/api project/api product/index.html";
  window.location.reload();
}

document.getElementById("productForm").addEventListener("submit", handalproduct)
Logout()