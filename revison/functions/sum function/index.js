let count=0;
const handaldata=()=>{
    count=document.getElementById("num").value;
    document.getElementById("result").innerHTML=count;
    document.getElementById("num").value=" ";
};
const handalcount=()=>{
    count++;
    document.getElementById("result").innerHTML=count;
    document.getElementById("num").value=" ";
};
document.getElementById("sum").addEventListener("click",handaldata);
document.getElementById("count").addEventListener("click",handalcount);