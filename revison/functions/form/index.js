let users=[];
const handaldata=(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;

    let user={
        name:name,
        password:password,
        email:email,
        number:number,
    };
    users.push(user);
    console.log(users);
    document.getElementById("result").innerHTML=`${name}<br>${password} <br>${email} <br>${number}`
}
document.getElementById("username").addEventListener("submit",handaldata);