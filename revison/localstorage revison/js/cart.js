import navbar from "../componets/helper.js";

document.getElementById("navbar").innerHTML=navbar();

let product = JSON.parse(localStorage.getItem("product")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const displaycart = () => {
        document.getElementById("cart-list").innerHTML = "";
        cart.map((products, index) => {
            let div = document.createElement("div");
            let name = document.createElement("h2");
            let price = document.createElement("p");
            let img = document.createElement("img");

            name.innerHTML = products.name;
            price.innerHTML = products.price;
            img.src = products.img;

            div.append(img, name, price);
            document.getElementById("cart-list").append(div);
        });
};

displaycart();