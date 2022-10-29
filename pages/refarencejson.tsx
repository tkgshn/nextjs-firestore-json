// まずはJSONだけ

export default function index({ posts }:{posts:any}) {
  return (
    <div>
      <h1>POST一覧</h1>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}


