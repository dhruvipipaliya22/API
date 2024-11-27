let url="http://localhost:3000/user"
const apimethod = {
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
    },
    delete:async (id)=>{
        await fetch(`${url}/${id}`,{
            method:"Delete",
        })
    }
}
export default apimethod