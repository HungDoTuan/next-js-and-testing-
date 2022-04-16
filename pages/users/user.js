import Layout from "../../components/layout";
import Head from "next/head";

export default function Users({ users, message }) {
  console.log(users);
  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>
      {users?.map((user) => (
        <div>
          <span>{user.id}</span> <span>{user.username}</span>
        </div>
      ))}
      <p>{message}</p>
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
      message: "hello world",
    },
  };
}
