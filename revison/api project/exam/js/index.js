import productmethod from "../api/productapi.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
const islogin = () => {
  alert("login first...")
  window.location.href = "/revison/api project/exam/pages/login.html"
}
const checkLogin = () => {
  const isLogin = localStorage.getItem("isLogin") || false;
  if (!isLogin) {
    islogin();
  } else {
    displayproduct();
  }
};

const displayproduct = async () => {
  const productary = await productmethod.get();
  document.getElementById("display").innerHTML = " ";
  productary.forEach(product => {
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
    cartbtn.addEventListener("click", () => {
      addCart(product);
      alert("Product added to cart!");
    });
    deletbtn.addEventListener("click", async () => {
      await productmethod.delete(product.id);
      displayproduct();
    });
    div.append(img, name, price, cartbtn, deletbtn);
    document.getElementById("display").append(div);
  });
}
const addCart = (product) => {
  console.log(product);
};
displayproduct();
checkLogin();