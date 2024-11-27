const navbar=()=>{
    const isLogin=localStorage.getItem("isLogin")||false;
    let pages=`
      <a href="/revison/api project/api product/pages/login.html" class="p-2 m-2">Login</a>
        <a href="/revison/api project/api product/pages/signup.html" class="p-2 m-2">Signup</a>`
        const profilpage=`
        <a href="/revison/api project/api product/pages/profile.html" class="p-2 m-2">Profile</button>
        <button>Logout</button>`
    return`
    <nav class="p-3">
        <a href="/revison/api project/api product/index.html" class="p-2 m-2">Home</a>
        <a href="/revison/api project/api product/pages/productform.html" class="p-2 m-2">Product Form</a>
        ${isLogin==false?pages:profilpage}
    </nav>`
}
export default navbar;