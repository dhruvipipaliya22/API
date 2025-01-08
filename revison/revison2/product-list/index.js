console.log("starting...");
const getdata = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    console.log(res);
    mapper(res.products);
};
const mapper = (data) => {
    data.map((item) => {
        let div = document.createElement("div");
        div.className = "data";
        let img = document.createElement("img");
        img.src = `${item.thumbnail}`;
        let title = document.createElement("h1");
        title.innerHTML = `${item.title}`;
        let description = document.createElement("p");
        description.innerHTML = `Description:${item.description}`;
        let category = document.createElement("h2");
        category.innerHTML = `Category:${item.category}`;
        let price = document.createElement("p");
        price.innerHTML = `Price:${item.price}`;
        let rating = document.createElement("h3");
        rating.innerHTML = `Rating:${item.rating}`;
        let stock = document.createElement("p");
        stock.innerHTML = `Stock:${item.stock}`;
        div.append(img, title, description, price, category, rating, stock);
        document.getElementById("data").append(div);
    });
};
getdata();
    console.log("ending...");