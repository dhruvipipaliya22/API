const sum=()=>{
    let num1=document.getElementById("num1").value;
    let n=num1;
    let ans="";
    if (n%3==0) {
        console.log(ans="yes");
        
    }
    else{
        console.log(ans="no");
        
    }
    document.getElementById("result").innerHTML=ans;
}