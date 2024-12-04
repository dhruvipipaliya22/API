import { getdata, deleteuser, updateuser } from "../crud api/api/api.js";


const users = await getdata.get();

const handaldata = async (e) => {
    e.preventDefault();

    const submitbtn = document.getElementById("submit");

    const user = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
    };


    if (submitbtn.toLowerCase() == "update") {
        await updateuser(user);
        submitbtn.value = "submit";
    } else {

        await getdata.post(user);
    }

    // displayData(await getdata.get());
};

const displayData = (data) => {
    document.getElementById("display").innerHTML="";
    data.forEach((user) => {
        const div = document.createElement("div");

        const name = document.createElement("h2");
        const password = document.createElement("p");
        const email = document.createElement("p");
        const remove = document.createElement("button");
        const update = document.createElement("button");

        name.innerHTML = `Name: ${user.name}`;
        password.innerHTML = `password: ${user.password}`;
        email.innerHTML = `Email: ${user.email}`;
        remove.innerHTML = "Delete";
        update.innerHTML = "Update";

        remove.addEventListener("click", async () => {
            await deleteuser(user.id);
            // displayData(await getdata.get());
        });

        update.addEventListener("click",async()=>{
            await updateuser()
        })

        div.append(name, password, email, remove, update);
        document.getElementById("display").append(div);
    });
};

document.getElementById("userdata").addEventListener("submit", handaldata);
displayData(users);