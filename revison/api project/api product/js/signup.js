import apiMethod from "../API/api.js";
import getValue from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


const handaldata = (e) => {
    e.preventDefault();

    const user = {
        name:getValue("name"),
        email:getValue("email"),
        password:getValue("password")
    };
  
    apiMethod.post(user);
}

const getData = async () => {
    userarray = await apiMethod.get();
}

document.getElementById("signup").addEventListener("submit",handaldata);
getData();
