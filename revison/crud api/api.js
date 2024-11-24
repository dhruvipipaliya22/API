let url="http://localhost:3000/data";
const getdata=async()=>{
    const req=await fetch(url);
    const res=await req.json();
    return
}
const createdata=async(data)=>{
    await fetch(url,{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
}
const handaldelete=async(id)=>{
    await fetch(`${url}/${id}`,{
        method:"delete"
    })
}