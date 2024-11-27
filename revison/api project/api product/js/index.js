import { Logout } from "../components/helpr.js";
import navbar from "../components/navbar.js";
import productapi from "../url/productapi.js";

document.getElementById("navbar").innerHTML =navbar();

const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
  alert("login first")
  window.location.href = "/revison/api project/api product/pages/login.html";
}

const displayproduct = async () => {
  const productary = await productapi.get();
  document.getElementById("display").innerHTML = "";
  productary.map((product) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    name.innerHTML = product.name;
    let price = document.createElement("p");
    price.innerHTML = product.price;
    let img = document.createElement("img");
    img.src = product.img;
    div.append(img, name, price);
    document.getElementById("display").append(div);
  });
}

displayproduct();
Logout();