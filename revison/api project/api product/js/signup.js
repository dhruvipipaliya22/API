import navbar from "../components/navbar.js";
import apimethod from "../url/api.js";

document.getElementById("navbar").innerHTML = navbar();


const handaldata = (e) => {
    e.preventDefault();

    const user = {
        name:("name"),
        email:("email"),
        password:("password"),
    };
  
    apimethod.post(user);
    window.location.href="/revison/api project/api product/pages/login.html"
}

const getData = async () => {
    let userarry = await apimethod.get();
}

document.getElementById("signup").addEventListener("submit",handaldata);
getData();
