import { Logout } from "../components/helpr.js";
import navbar from "../components/navbar.js";
import productapi from "../url/productapi.js";

document.getElementById("navbar").innerHTML = navbar();

const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
  alert("login first")
  window.location.href = "/revison/api project/api product/pages/login.html";
}

const displaycart = async () => {
  const productary = await productapi.get();
  document.getElementById("display-cart").innerHTML = "";
  productary.map((cart,index) => {
    if (cart.qty >=0) { 
    let div = document.createElement("div");
    let name = document.createElement("p");
    name.innerHTML = cart.name;
    let price = document.createElement("p");
    price.innerHTML = cart.price;
    let img = document.createElement("img");
    img.src = cart.img;
    let deletbtn=document.createElement("button");
    deletbtn.innerHTML="Delete";
    deletbtn.addEventListener("click",() => { productapi.delete(cart.id); 
      displaycart();
    })
    let btn1=document.createElement("button");
    let btn2=document.createElement("button");
    let qty = document.createElement("p");
    btn1.innerHTML="+";
    qty.innerHTML = `Qty:${cart.qty}`;
    btn2.innerHTML="-";

    btn1.addEventListener("click",() => {
      cart[index].qty++;
      window.location.reload();
    });
    btn2.addEventListener("click", () => {
      if(cart[index].qty>=1){
        cart[index].qty--;          
        window.location.reload();
      }
    });
    div.append(img, name, price, btn1,qty,btn2,deletbtn);
    document.getElementById("display-cart").append(div);
  }
  });
}

displaycart();
Logout();