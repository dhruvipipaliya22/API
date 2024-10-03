let news=JSON.parse(localStorage.getItem("news"))||[];
const handleDelete=(index)=>{
  news.splice(index,1);
  mapper(news)
  localStorage.setItem("news",JSON.stringify(news))
};
const mapper=(news)=>{
  document.getElementById("list").innerHTML=""
  news.map((ele,index)=>{
    let name=document.createElement("h1");
    name.innerHTML=ele.name;
    let email=document.createElement("h2");
    email.innerHTML=ele.email;
    let img=document.createElement("img");
    img.src=ele.img;
    let password=document.createElement("password");
    password.innerHTML=ele.password;
    let contry=document.createElement("h3")
    let btndele=document.createElement("button");
    btndele.innerHTML="Delete";
    btndele.addEventListener("click",()=>handleDelete(index))
    let div=document.createElement("div");
    div.append(img,name,email,btndele);
    document.getElementById("list").append(div);
  });
  document.getElementById("logo-text").innerHTML = localStorage.getItem("name");
  document.getElementById("logo-img").src = localStorage.getItem("imgUrl");

};
mapper(news);