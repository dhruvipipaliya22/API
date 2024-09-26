console.log("starting");

const getdata = async () => {
  let req = await fetch("https://dummyjson.com/products");
  let res = await req.json();
  console.log(res);
  mapper(res.products)
}

getdata();
console.log("getting data");

const mapper = (data) => {
  data.map((item) => {
    let container = document.createElement("div")
    container.className = "product";
    let img = document.createElement("img");
    img.src = item.thumbnail;
    img.alt = item.title;
    let title = document.createElement("h1")
    title.innerHTML = item.title
    let description = document.createElement("p")
    description.innerHTML = item.description
    let category = document.createElement("h2")
    category.innerHTML = item.category
    let price = document.createElement("p")
    price.innerHTML = item.price
    let rating = document.createElement("h3")
    rating.innerHTML = item.rating
    let stock = document.createElement("p")
    stock.innerHTML = item.stock

    container.append(img, title, description, price, category, rating, stock)
    document.getElementById("product-list").append(container);
  })
  const search = (e) => {
    e.preventDefault();

    let searchValue = getValue("#search");
    let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(temp);

};

document.getElementById("searching").addEventListener("submit", search);

document.getElementById("search").addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){

    }
});
}

console.log("ending");