import React from "react";
import Link from "next/link";
import { Footer } from "../../components/Footer";
const User = ({ users }) => {
  return (
    <div>
      user list
      {users.map((user) => {
        return <div key={user.id}>{user.name} </div>;
      })}
    </div>
  );
};
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
  return {
    props: {
      users,
    },
  };
};
export default User;
User.layout = function Pagelayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
