const navbar=()=>{
    const isLogin=localStorage.getItem("isLogin")||false;
    let pages=`
      <a href="/revison/api project/api product/pages/login.html" class="p-2 m-2">Login</a>
        <a href="/revison/api project/api product/pages/signup.html" class="p-2 m-2">Signup</a>`
        const profilepage=`
        <a href="/revison/api project/api product/pages/profile.html" class="p-2 m-2">Profile</button>
        <button id="Logout">Logout</button>`
    return`
    <nav class="p-3">
        <a href="/revison/api project/api product/index.html" class="p-2 m-2">Home</a>
        <a href="/revison/api project/api product/pages/productform.html" class="p-2 m-2">Product Form</a>
        <a href="/revison/api project/api product/pages/cart.html" class="p-2 m-2">Cart</a>
        ${isLogin==false?pages:profilepage}
    </nav>`
}
export default navbar;