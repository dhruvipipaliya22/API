console.log("starting");
const getdata=async()=>{
    let req=await fetch("https://fakestoreapi.com/products");
    let res=await req.json();
    console.log(res);
}
getdata();
console.log("geting data");
console.log("ending");
const mapper=(data)=>{
    data.map((item)=>{
        let title=document.createElement("h2");
        title.innerHTML=item.title;

        document.getElementById("productlist").append(title)
    })
}
mapper();