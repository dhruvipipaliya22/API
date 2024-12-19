import productapi from "../api/productapi.js";
import navbar from "../coumponents/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handaldisplay = async () => {
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
    let deletbtn = document.createElement("button");
    deletbtn.innerHTML = "Delete";
    let cartbtn = document.createElement("button");
    cartbtn.innerHTML = "Add to cart";
    deletbtn.addEventListener("click", async () => { 
      await productapi.delete(product.id); 
    })
    cartbtn.addEventListener("click", () => addtocart(product))
    div.append(img, name, price, deletbtn, cartbtn);
    document.getElementById("display").append(div);
  });
}
const addtocart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
};
handaldisplay();