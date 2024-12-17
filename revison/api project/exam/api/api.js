let url = "http://localhost:3000/data"

let method = {
    get: async () =>{
        let req = await fetch(url)
        let res = await req.json();
        return res;
    },
    post: async (data) => {
        await fetch(url,{
            method:"post",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(data),
        });
    },
    delete:async (id) => {
        await fetch(`${url}/${id}`,{
            method:"DELETE",
        });
    },
}
export default method