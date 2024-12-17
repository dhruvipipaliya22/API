import productapi from "../api/productapi.js";
import navbar from "../coumponents/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handaldata = async () => {
    const productdata = await productapi.get();
    document.getElementById("display").innerHTML = "";
    productdata.map((product,index) => {
        let div = document.createElement("div");
        let name=document.createElement("h2");
        name.innerHTML=product.name;
        let price=document.createElement("p");
        price.innerHTML=product.price;
        let img=document.createElement("img");
        img.src=product.img;
        let deletbtn = document.createElement("button");
        deletbtn.innerHTML = "Delete";
        let cartbtn = document.createElement("button");
        cartbtn.innerHTML = "Add to cart";
        cartbtn.addEventListener(addtocart(index));
        deletbtn.addEventListener("click", async () => {
            await productapi.delete(product.id);
            displayproduct()
        })
        div.append(img, name, price, cartbtn, deletbtn);
        document.getElementById("display").append(div);
    });
}
const addtocart = (value) => {

    const isexist = cart.filter((e) => e.id == value.id);
    if (isexist.length != 0) {
      isexist[0].qty++;
    }
    else {
      value.qty = 1;
      cart.push(value);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
handaldata();