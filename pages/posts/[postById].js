import React from "react";
import { useRouter } from "next/router";
const PostById = ({ post }) => {
  const route = useRouter();
  return (
    <div>
      first and {route.query.postById}
      <p>
        {post.id} {post.title}
      </p>
    </div>
  );
};
export default PostById;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { postById: "1" } }, { params: { postById: "2" } }, { params: { postById: "3" } }],
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postById}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
