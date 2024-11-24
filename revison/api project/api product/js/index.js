import getValue from "../components/helpr.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handalform = (e) => {
    e.preventDfault();
    document.getElementById("display").innerHTML=" ";
    products.map(() => {
        let div = getValue("div");
        let name = getValue("name");
        let price = getValue("price");
        let img = getValue("img");

        name.innerHTML = e.name;
        price.innerHTML = e.price;
        img.src = e.img;
        div.append(img,name,price)
        document.getElementById("display").append(div);
    })
}