import navbar from "../componets/helper.js";

document.getElementById("navbar").innerHTML=navbar();

let product = JSON.parse(localStorage.getItem("product")) || [];
let cart=JSON.parse(localStorage.getItem("cart"))||[];

const handaldata = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        img: document.getElementById("img").value,
    };
    product.push(data);
    localStorage.setItem("product", JSON.stringify(product));
    console.log(data);
    window.location.href = "/revison/localstorage revison/index.html";
}
document.getElementById("username").addEventListener("submit", handaldata);