import productapi from "../api/productapi.js";
import getValue from "../coumponents/helper.js";
import navbar from "../coumponents/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

const handalform=async(e)=>{
    e.preventDefault();
    let data={
        name:getValue("name"),
        price:getValue("price"),
        img:getValue("img"),
    }
    await productapi.post(data);
    window.location.href="/revison/exam-1/index.html";
}
document.getElementById("form").addEventListener("submit",handalform);