import { Logout } from "../components/helpr.js";
import navbar from "../components/navbar.js";
import productapi from "../url/productapi.js";

document.getElementById("navbar").innerHTML = navbar();

const isLogin = localStorage.getItem("isLogin") || true;


if (isLogin === false) {
  alert("login first")
  window.location.href = "";
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
      displayproduct()
    })
    cartbtn.addEventListener("click", () => addtocart(product))
    div.append(img, name, price, deletbtn, cartbtn);
    document.getElementById("display").append(div);
  });
}
const addtocart = async (elem) => {
  let user = JSON.parse(localStorage.getItem("userData"));
  await productapi.get(`/cart/${user}`);

  let existproduct = false;
  const productary = await productapi.get();
  productary.map((e) => {
    if (e.id === elem.id) {
      e.qty++;
      existproduct = true;
    }
  });

  if (!existproduct) {
    productary.push({ ...elem, qty: 1 });
  }
  await productapi.patch(`${elem.id}`, { qty: elem.qty + 1 });
};
displayproduct();
Logout();