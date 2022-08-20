import useSWR from "swr"

const fetcher= async()=>{
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data
}
const DashboardSWR=()=>{
const{data,error}=useSWR('dashboard',fetcher);
if(error){return <>some error</>}
if(!data){return<>loading</>}


return<div>
    {data.posts}
</div>
}
export default DashboardSWR