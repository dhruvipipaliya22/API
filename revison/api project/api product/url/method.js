const basurl="http://localhost:3000"

const method={
    get:async(endpoint)=>{
        const req=await fetch(`${basurl}/${endpoint}`)
        const res=await req.json();
        return res;
    },
    post:async(endpoint,data)=>{
        await fetch(basurl+endpoint,{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    },
    delete:async(endpoint,id)=>{
        await fetch(basurl+endpoint+id,{
            method:"delete"
        })
    },
    patch:async(endpoint,id,data)=>{
        await fetch(basurl+endpoint+id,{
            method:"patch",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
    }
}
export default  method