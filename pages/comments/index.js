import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const handleClick = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  const handleSubmit = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    setComment('');
  };
  const handleDelete = async (id)=>{
      const response = await fetch(`/api/comments/${id}`,{
          method: 'DELETE'
      })
      const data = await response.json()
      console.log(data);
      handleClick();

  }
  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e)=>{setComment(e.target.value)}}
      />
      <button onClick={handleSubmit}>submit comment</button>
      <button onClick={handleClick}>comment list </button>
      {comments.map((comment) => {
        return <div key={comment.id}>{comment.id}{comment.comment}<button onClick={()=>{handleDelete(comment.id)}}>delete</button></div>;
      })}
    </>
  );
};
export default Comments;
