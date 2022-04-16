import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function FirstPost({ users }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>User's posts</title>
      </Head>
      {users?.map((user) => (
        <div
          onClick={() => {
            router.push({
              pathname: "/posts/[id]",
              query: { id: user.id },
            });
          }}
        >
          <span>{user.id}</span> <span>{user.name}</span>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
