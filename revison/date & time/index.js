// setInterval(()=>{
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const dayname = days[date.getDay()];

//     let hours=Date.getHours();
//     let minute=Date.getMinutes();
//     let second = date.getSeconds();
//     const AmPm=hours>=12?"Pm":"Am";

//     hours=hours%12;
//     hours=hours?hours:12;

//     let minutedisplay=minute<10?"0"+minute:minute;
//     let seconddisplay=second<10?"0"+second:second;

//     document.getElementById("date").innerHTML=day+"-"+month+"-"+year+" "+","+dayname;
//     document.getElementById("time").innerHTML=hours+":"+minutedisplay+":"+seconddisplay+" "+AmPm;
// },1000);

console.log("starting");

const reversinterval={
  setInterval setInterval(() => {
    console.log(hours,minite,second);
    
    if(minite==0 && second==0){
      minite==59
      minite--;
      clearInterval(interval);
    }
    if(hours==0 && minite==0){
      hours==59
      minite--;
    }
    
  }, 1000);
}

console.log("ending");
