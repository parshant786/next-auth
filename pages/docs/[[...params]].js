import React from "react";
import { useRouter } from "next/router";
const CatchALLRoutes = () => {
  const route = useRouter();
  const { params = [] } = route.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <div>
        doc {params[0]} and {params[1]}
      </div>
    );
  } else if (params.length === 1) {
    return <div> docs{params[0]}</div>;
  } else {
    return <div>default</div>;
  }
};
export default CatchALLRoutes;
