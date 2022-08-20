import { useState ,useEffect } from 'react'

const Dashboard=()=>{
const[isLoading,setIsLoading]=useState(true)
const [dashboardData,setDeshboardData]=useState(null)
useEffect(()=>{
    const fetchDashboardData=async ()=>{
        const response = await fetch('http://localhost:4000/dashboard');
        const data = await response.json();
    
        setDeshboardData(data);
        setIsLoading(false);
    }
    fetchDashboardData();
  
    
   
},[])
if(isLoading){
    return <div>loading...</div>
}
return <>
<h1>dashboard</h1>
<div>{dashboardData.likes} and{dashboardData.posts}</div>
</>
}
export default Dashboard