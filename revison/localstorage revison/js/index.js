import navbar from "../componets/helper.js";

document.getElementById("navbar").innerHTML=navbar();

let product = JSON.parse(localStorage.getItem("product")) || [];
let cart=JSON.parse(localStorage.getItem("cart"))||[];

const mapper=(productlist)=>{
    document.getElementById("product-list").innerHTML="";
    productlist.map((ele)=>{
        let div=document.createElement("div");
        let name=document.createElement("h2");
        let price=document.createElement("p");
        let img=document.createElement("img");
        let buybtn=document.createElement("button");
        buybtn.innerHTML="Buy Now";

        name.innerHTML=ele.name;
        price.innerHTML=ele.price;
        img.src=ele.img;

        buybtn.addEventListener("click",()=>{
            let products={
                name:ele.name,
                price:ele.price,
                img:ele.img,
            };
            product.push(products);
            console.log(product);
            
            localStorage.setItem("cart",JSON.stringify(cart));
        });
        div.append(img,name,price,buybtn);
        document.getElementById("product-list").append(div);
    });
};
mapper(product);