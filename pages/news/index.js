import React from "react";

const NewsList = ({news}) => {
  return <div>
      list of news
      <div>{news.map((n)=>{ return <div  key={n.id}>{n.catagory} and {n.title}</div>})}</div>
      </div>;
};
export default NewsList;


export const getServerSideProps = async()=>{
    const response = await fetch('http://localhost:4000/news');
    const  data= await response.json();
    return {
        props:{
            news:data
        }
    }

}