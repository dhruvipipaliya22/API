
import method from "../api/api.js";
import productmethod from "../api/productapi.js";
import { getValue } from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

const handalsignup =async (e) => {
    const data = {
      name: getValue("name"),
      email: getValue("email"),
      password: getValue("password"),
      role:getValue("role"),
    };
    const alluserdata=await productmethod.get(`?email=${data.email}`);
    console.log(userdata);
    if (userdata.length>0) {
      return alert("email already exists!!");
    }
    else{
      return productmethod.post(data);
    }
    window.location.href = "/revison/api project/exam/pages/login.html";
  }
document.getElementById("signup").addEventListener("submit",handalsignup);