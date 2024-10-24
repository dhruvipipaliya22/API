const handaldata=(e)=>{
    e.preventDefault();
    let num1=document.getElementById("num1").value;
    console.log(Number(num1)**2);
    let sum=Number(num1)**2;
    document.getElementById("result").innerHTML=sum;
}
document.getElementById("username").addEventListener("submit",handaldata);