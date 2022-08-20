import React from "react";
import {useRouter} from 'next/router'

const First = () => {
  const route = useRouter()
const handleClick=()=>{
     route.push('/')
}

  return <div>first<button onClick={handleClick}>clicl</button></div>;
};
export default First;
