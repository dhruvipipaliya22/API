document.getElementById("rollbtn").addEventListener("click", function () {
    let dice = document.getElementById("dice");
    let dicefrant = ["1", "2", "3", "4", "5", "6"];
    let random = Math.floor(Math.random() * dicefrant.length);
    dice.innerHTML = dicefrant[random];
});