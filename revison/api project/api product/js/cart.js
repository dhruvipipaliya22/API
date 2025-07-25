import { Logout } from "../components/helpr.js";
import navbar from "../components/navbar.js";
import cartapi from "../url/cartapi.js";

document.getElementById("navbar").innerHTML = navbar();

const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
  alert("login first")
  window.location.href = "/revison/api project/api product/pages/login.html";
}

const displaycart = async () => {
  const productcart = await cartapi.get();
  console.log("Cart items:", productcart); // 🔍 Debug

  document.getElementById("display-cart").innerHTML = "";

  if (!Array.isArray(productcart)) {
    console.error("Cart data is not an array");
    return;
  }

  productcart.map((cart) => {
    if (cart.qty >= 0) {
      let div = document.createElement("div");

      let name = document.createElement("p");
      name.innerHTML = cart.name;

      let price = document.createElement("p");
      price.innerHTML = `₹ ${cart.price}`;

      let img = document.createElement("img");
      img.src = cart.img;

      let btn1 = document.createElement("button");
      btn1.innerText = "+";

      let qty = document.createElement("span");
      qty.innerText = cart.qty;
      qty.style.margin = "0 10px";

      let btn2 = document.createElement("button");
      btn2.innerText = "-";

      let deletbtn = document.createElement("button");
      deletbtn.innerText = "Delete";

      btn1.addEventListener("click", async () => {
        cart.qty += 1;
        const updatedCart = productcart.map(item =>
          item.id === cart.id ? { ...item, qty: cart.qty } : item
        );
        await cartapi.patch(updatedCart);
        displaycart();
      });

      btn2.addEventListener("click", async () => {
        if (cart.qty > 1) {
          cart.qty -= 1;
          const updatedCart = productcart.map(item =>
            item.id === cart.id ? { ...item, qty: cart.qty } : item
          );
          await cartapi.patch(updatedCart);
        } else {
          const newCart = productcart.filter(item => item.id !== cart.id);
          await cartapi.patch(newCart);
        }
        displaycart();
      });

      deletbtn.addEventListener("click", async () => {
        const newCart = productcart.filter(item => item.id !== cart.id);
        await cartapi.patch(newCart);
        displaycart();
      });

      div.append(img, name, price, btn1, qty, btn2, deletbtn);
      document.getElementById("display-cart").append(div);
    }
  });
};

displaycart();
Logout();

