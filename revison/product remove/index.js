let users = [];
let cart = [];

const handleData = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let img = document.getElementById("img").value;

  let user = {
    id: Date.now(),
    name,
    price,
    img,
  };

  users.push(user);
  console.log(users);
  uiMaker();
}

const uiMaker = () => {
  document.getElementById("data-result").innerHTML = "";
  users.map((user, index) => {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    name.innerHTML = user.name;
    let price = document.createElement("p");
    price.innerHTML = user.price;
    let img = document.createElement("img");
    img.src = user.img;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => deleteUser(index));
    let cartBtn = document.createElement("button");
    cartBtn.innerHTML = "Cart";
    cartBtn.addEventListener("click", () => handleCart(index));
    div.append(img, name, price, cartBtn, deleteBtn);
    document.getElementById("data-result").append(div);
  });
}

const deleteUser = (index) => {
  let deletedUserId = users[index].id;
  users.splice(index, 1);
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == deletedUserId) {
      cart.splice(i, 1);
      break;
    }
  }
  uiMaker();
  cartMaker();
}

const handleCart = (index) => {
  let selectedUser = users[index];
  let existingProduct = cart.find((item) => item.id == selectedUser.id);

  if (existingProduct) {
    existingProduct.qty++;
  } else {
    selectedUser.qty = 1;
    cart.push(selectedUser);
  }
  console.log(cart);
  cartMaker();
}

const cartMaker = () => {
  document.getElementById("cart-result").innerHTML = "";
  cart.map((cartItem, index) => {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    name.innerHTML = cartItem.name;
    let price = document.createElement("p");
    price.innerHTML = cartItem.price;
    let img = document.createElement("img");
    img.src = cartItem.img;
    let qty = document.createElement("p");
    qty.innerHTML = `QTY:- ${cartItem.qty}`;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => deleteCart(index));
    div.append(img, name, price, qty, deleteBtn);
    document.getElementById("cart-result").append(div);
  });
}

const deleteCart = (index) => {
  cart.splice(index, 1);
  cartMaker();
}
document.getElementById("data").addEventListener("submit", handleData);
