let url="http://localhost:3000/data";

const getdata = {
    get: async () =>{
        const req = await fetch(url)
        const res = await req.json();
        return await res;
    },
    post: async (data) => {
        await fetch(url,{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
}

const deleteuser = async (id) => {
    await fetch(`${url}/${id}`,{
        method:"DELETE",
        
    })
    window.location.reload()
}

const updateuser = async (data, id) => {
    await fetch(`${url}/${id}`,{
        method: "PATCH",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export  { getdata ,deleteuser, updateuser };