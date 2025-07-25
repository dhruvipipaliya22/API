import { Logout } from "../components/helpr.js";
import navbar from "../components/navbar.js";
import { productapi } from "../url/productapi.js";

document.getElementById("navbar").innerHTML = navbar();

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
    let deletbtn = document.createElement("button");
    deletbtn.innerHTML = "Delete";
    let cartbtn = document.createElement("button");
    cartbtn.innerHTML = "Add to cart";
    deletbtn.addEventListener("click", async () => {
      await productapi.delete(product.id);
      displayproduct();
    })
    cartbtn.addEventListener("click", () => addtocart(product))
    div.append(img, name, price, deletbtn, cartbtn);
    document.getElementById("display").append(div);
  });
}

const addtocart = async (elem) => {
  const allProducts = await productapi.get();
  const existProduct = allProducts.find((e) => e.id === elem.id);

  if (existProduct && existProduct.qty >= 0) {
    await productapi.patch(elem.id, { qty: existProduct.qty + 1 });
    alert("Product quantity increased in cart.");
  } else {
    await productapi.patch(elem.id, { qty: 1 }); 
    alert("Product added to cart.");
  }
};


displayproduct();
Logout();