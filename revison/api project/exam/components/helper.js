const getValue = (id) => {
    return document.getElementById(id).value;
};

const Logout = () => {
    const logoutbtn = document.getElementById("Logout")
    logoutbtn ? logoutbtn.addEventListener("click", () => {
        localStorage.removeItem("isLogin");
        window.location.reload();
    }) : null;
}

export { getValue, Logout };