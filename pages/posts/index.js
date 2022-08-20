import React from "react";
import { useRouter } from "next/router"
import styles from '../../styles/posts.module.css'
import Image from "next/image";



import Link from "next/link";
const Post = ({ posts }) => {
  const route = useRouter();
  return (
    <div  className={styles.main}>
    <Image  src='/1.jpeg' alt="pets" width="200px"  height='300px' placeholder='blur' blurDataURL='/1.jpeg'/>
      <h1>posts list</h1>
      {posts.map((post) => {
        return (
          <p key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </p>
        );
      })}
    </div>
  );
};
export default Post;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
};
