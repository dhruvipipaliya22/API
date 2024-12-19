let book = JSON.parse(localStorage.getItem("book")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const mapper = (booklist) => {
  document.getElementById("bookdata").innerHTML = "";
  booklist.map((ele) => {
    let div = document.createElement("div");
    let name = document.createElement("h1");
    let author = document.createElement("p");
    let email = document.createElement("p");
    let price = document.createElement("p");
    let img = document.createElement("img");
    let category = document.createElement("a");
    let buybtn = document.createElement("button");
    buybtn.innerHTML = "Buy Now";
    buybtn.addEventListener("click", () => {
      let product = {
        // id:book.length>0?book[book.length-1].id+1:1,
        name: ele.name,
        price: ele.price,
        img: ele.img,
        category: ele.category,
        author: ele.author,
      };
      addtocart(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      // window.location.href = "/revison/localstorage/pages/cart.html";
    });

    name.innerHTML = ele.name;
    author.innerHTML = ele.author;
    email.innerHTML = ele.email;
    price.innerHTML = ele.price;
    img.src = ele.img;
    category.innerHTML = ele.category;

    div.append(img, name, price, category, buybtn);
    document.getElementById("bookdata").append(div);
  });
};

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
document.getElementById("apply").addEventListener("click", () => {
  let selecteCategory = document.getElementById("category").value;
  let filteredBooklist = selecteCategory === "all" ? book : book.filter((book) => book.category.toLowerCase() === selecteCategory.toLowerCase());
  mapper(filteredBooklist);
});

mapper(book);