let users=[];
const handaldata=(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let data={
        name,
        email,
        password,
    };
    users.push(data);
    console.log(users);
    handaldisplay();
    
}
document.getElementById("userdata").addEventListener("submit",handaldata);

const handaldisplay=()=>{
    document.getElementById("display").innerHTML=" ";
    users.map=((ele)=>{
        let div=document.createElement("div");
        let name=document.createElement("h2");
        let email=document.createElement("p");
        let password=document.createElement("p");
        let deletebtn=document.createElement("button");

        name.innerHTML=ele.name;
        email.innerHTML=ele.email;
        password.innerHTML=ele.password;
        deletebtn.innerHTML="Delete";

        deletebtn.addEventListener("click",()=>handaldelete(e.id));

        div.append(name,email,password,deletebtn);
        document.getElementById("display").append(div);
    });
}
handaldisplay();