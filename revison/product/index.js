let product = [];
let cart = [];

const handleData = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let price = document.getElementById("price").value;
  let img = document.getElementById("img").value;

  let products = {
    id: Date.now(),
    name,
    email,
    price,
    img,
  };

  product.push(products);
  console.log(product);
  uimaker();
}

const uimaker = () => {
  document.getElementById("result").innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    name.innerHTML = product[i].name;
    let email = document.createElement("p");
    email.innerHTML = product[i].email;
    let price = document.createElement("p");
    price.innerHTML = product[i].price;
    let img = document.createElement("img");
    img.src = product[i].img;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => handleDelete(i));
    let cartbtn = document.createElement("button");
    cartbtn.innerHTML = "Cart";
    cartbtn.addEventListener("click", () => handleCart(i));

    div.append(img, name, email, price, cartbtn, deleteBtn);
    document.getElementById("result").append(div);
  }
}

const handleDelete = (index) => {
  product.splice(index, 1);
  uimaker();
}

const handleCart = (index) => {
  let productIndex = product[index];
  let existingProduct = cart.find((item) => item.id == productIndex.id);

  if (existingProduct) {
    existingProduct.qty++;
  } else {
    productIndex.qty = 1;
    cart.push(productIndex);
  }

  console.log(cart);
  cartmaker();
}

const cartmaker = () => {
  document.getElementById("cart-result").innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    name.innerHTML = cart[i].name;
    let price = document.createElement("p");
    price.innerHTML = cart[i].price;
    let qty = document.createElement("p");
    qty.innerHTML = `Quantity: ${cart[i].qty}`;
    let img = document.createElement("img");
    img.src = cart[i].img;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => handleRemove(i));

    div.append(img, name, price, qty, deleteBtn);
    document.getElementById("cart-result").append(div);
  }
}
const handleRemove = (index) => {
  cart.splice(index, 1)
  cartmaker();
}

document.getElementById("product-list").addEventListener("submit", handleData);