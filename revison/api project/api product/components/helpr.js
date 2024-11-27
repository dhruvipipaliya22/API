const getValue = (id) => {
    document.getElementById(id).value;
};
const Logout = () => {
    localStorage.setItem("isLogin", false)
    localStorage.removeItem("isLogin")
    const logoutbtn = document.getElementById("Logout")
    logoutbtn 
    ? logoutbtn.addEventListener("click", () => {
        localStorage.removeItem("isLogin");
        window.location.reload();
    })
    : null;
}
export { getValue, Logout };
