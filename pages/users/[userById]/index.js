import React from "react";
import { useRouter } from "next/router";

const User = () => {
  const route = useRouter();
  console.log('hi')
  return (
    <div>
      USER {route.query.userById}
      
    </div>
  );
};


export default User;
