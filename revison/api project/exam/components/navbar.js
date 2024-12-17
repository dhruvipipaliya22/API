const navbar=()=>{
    const isLogin=localStorage.getItem("isLogin")||false;
    let pages=`
       <a href="/revison/api project/exam/pages/login.html" class="p-2 m-2">Login</a>
        <a href="/revison/api project/exam/pages/signup.html" class="p-2 m-2">Signup</a>`
        const profilepage=`
        <button id="Logout">Logout</button>`
    return`
    <nav class="p-4 text-white">
        <a href="/revison/api project/exam/index.html" class="p-2 m-2">Home</a>
        <a href="/revison/api project/exam/pages/addproduct.html" class="p-2 m-2">Product Form</a>
        <a href="/revison/api project/exam/pages/cart.html" class="p-2 m-2">Cart</a>
        ${isLogin==false?pages:profilepage}
    </nav>`
}
export default navbar;