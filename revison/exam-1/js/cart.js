import cartapi from "../api/cartapi.js";
import productapi from "../api/productapi.js";
import navbar from "../coumponents/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
const displaycart = async () => {
    const productary = await cartapi.get();
    document.getElementById("displaycart").innerHTML = "";
    productary.map((cart) => {
            let div = document.createElement("div");
            let name = document.createElement("p");
            name.innerHTML = cart.name;
            let price = document.createElement("p");
            price.innerHTML = cart.price;
            let img = document.createElement("img");
            img.src = cart.img;
            let deletbtn = document.createElement("button");
            deletbtn.innerHTML = "Delete";
            deletbtn.addEventListener("click", () => {
                cartapi.delete(cart.id);
                displaycart();
            })
            div.append(img, name, price, deletbtn);
            document.getElementById("displaycart").append(div);
    });
}