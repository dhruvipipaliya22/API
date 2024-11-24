let book = JSON.parse(localStorage.getItem("book")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const displayCart = () => {
  document.getElementById("cartdata").innerHTML = "";
  cart.map((product, index) => {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    let price = document.createElement("p");
    let img = document.createElement("img");
    let category = document.createElement("a");
    let author = document.createElement("p");
    let qty = document.createElement("p");
    let removebtn = document.createElement("button");
    let btn1=document.createElement("button");
    let btn2=document.createElement("button");

    removebtn.innerHTML = "Delete";
    removebtn.addEventListener("click", () => handalremove(index));

    name.innerHTML = product.name;
    price.innerHTML = product.price;
    img.src = product.img;
    category.innerHTML = product.category;
    author.innerHTML = product.author;
    btn1.innerHTML="+";
    qty.innerHTML = `Qty:${product.qty}`;
    btn2.innerHTML="-";

    btn1.addEventListener("click", () => {
      cart[index].qty++;
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
      displayCart();
    });
    btn2.addEventListener("click", () => {
      if(cart[index].qty>1){
        cart[index].qty--;
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
        displayCart();
      }
      else if(cart[index].qty>0){
        // window.location.reload();
        handalremove();
      }
    });
    div.append(img, name, price, author, category, btn1, qty, btn2, removebtn);
    document.getElementById("cartdata").append(div);
  });
};

const handalremove = (index) => {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  displaybill();
};


const displaybill = () => {
  let bill = 0;
  let gst = 0;
  let totalBill = 0;
  cart.forEach((e) => {
    const tb = e.price * e.qty;
    bill += tb;
  });
  gst = bill * 0.10;
  totalBill = bill + gst;
  console.log(bill);
  document.getElementById("bill").innerHTML = `
    Total: ${bill};<br>
    GST (10%): ${gst};<br>
    Total Bill:  ${totalBill};
  `;
  localStorage.setItem("cart", JSON.stringify(cart));
};

displaybill();
displayCart();
