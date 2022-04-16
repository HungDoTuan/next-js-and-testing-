import { useRouter } from "next/router";

export default function UserPostDetail({ post }) {
  console.log(post);
  const route = useRouter();
  return (
    <>
      <p>TITLE: {post?.title}</p>
      <p> BODY: {post?.body}</p>
      <button onClick={() => route.push("/posts/first-post")}>
        Back to previous page
      </button>
    </>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: { post },
  };
};
