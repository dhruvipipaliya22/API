let book = JSON.parse(localStorage.getItem("book")) || [];
const handaldata = (e) => {
    e.preventDefault();

    let data = {
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
        email: document.getElementById("email").value,
        price: document.getElementById("price").value,
        img: document.getElementById("img").value,
        category: document.getElementById("category").value,
        qty:document.getElementById("qty").value,
    };
    book.push(data);
    localStorage.setItem("book", JSON.stringify(book));
    console.log(data);

    window.location.href="/revison/localstorage/index.html";
}
document.getElementById("userdata").addEventListener("submit", handaldata)