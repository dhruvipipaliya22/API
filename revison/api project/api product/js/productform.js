import productapi from "../API/productapi.js";
import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


const handalproduct = async (e) =>{
    e.preventDefault();

    const product = {
        name: getValue("name"),
        price: getValue("price"),
        img: getValue("img"),
    }
  
    productapi.post(product)
    window.location.href="revison/api project/api product/index.html"
}



document.getElementById("productForm").addEventListener("submit",handalproduct)
getData();