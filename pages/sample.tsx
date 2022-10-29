// import axios from 'axios';
// import Link from "next/link";

// // // export default function sample() {
// // //   return (
// // //     <div>
// // //       <h1>POST一覧</h1>
// // //     </div>
// // //   );
// // // }

// // // export async function getServerSideProps() {
// // //   const response = await axios.get('/api/users')
// // //   console.log(response)
// // //   // return { props: { posts } };
// // // }


// // // pages/index.js
// // import Axios from "axios";
// // import Link from "next/link";

// // const sample = (props: any) => {
// //   const posts = props.data;

// //   return (
// //     <div>
// //       <h1>Home</h1>
// //       <ol>
// //         {posts.map(({post}:{post:any}) => (
// //           <li key={post?.id}>
// //             {/* <Link
// //               href={{
// //                 pathname: "/[id]",
// //                 query: { id: post?.id },
// //               }}
// //             >
// //               <a>{post?.title}</a>
// //             </Link> */}
// //             {post?.title}
// //           </li>
// //         ))}
// //       </ol>
// //     </div>
// //   );
// // };

// // export default sample;

// // export const getStaticProps = async () => {
// //   const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
// //   console.log(res);
// //   return {
// //     props: { data: res.data.slice(0, 10) },
// //   };
// // };


// export default function ListPage({ posts }:{posts:any}) {
//   return (
//     <>
//     <div>
//       <h1>POST一覧</h1>
//       {/* <ul>
//         {posts.map((post:any) => {
//           return <li key={post.id}>
//                      <Link href={`post/${encodeURIComponent(post["id"])}`}>
//                          <a>{post.title}</a>
//                      </Link>
//                      <br></br>
//             記事ID: {post.id}
//             <br></br>


//             </li>;
//         })}
//       </ul> */}
//     </div>
//     </>
//   );
// }

// // function getServerSideProps() {
// //   // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// //   // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
// //   // const posts = await res.json();
// //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
// //   console.log(response)
// //   // console.log(posts);
// //   return { props: { response } };
// // }


// function fetchFact() {
//   //Just a simple get request which gets back a fact in a JSON object
//   return axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => {
//           console.log(res);
//           // return res.data;
//           { props: { res.data } }
//       });
// }
import axios from "axios";
import { response } from "express";
import { useEffect } from "react";

// export default function samp({ users }:{users: any}) {
//   return (
//     <div>
//       <h1>ユーザー一覧</h1>
//     </div>
//   );
// }

// export async function dataaaaaa() {
  // return  axios
  //       .get('/api/users')
  //       .then((res) => {
  //         console.log(res);
  //           return res.data;
  //       });
  // const users = await axios.get("/api/users");
  // console.log(users);
  // return { props: { users } };

  // const rec = await axios.get("/api/users");
  // const users = await rec.request.response;
  // return {response: users};
  
  // const rec = await axios.get('/api/users');
  // console.log();
  

  // Axios automatically serializes `{ answer: 42 }` into JSON.
// const res = await axios.post('https://httpbin.org/post', { answer: 42 });

//  // '{"answer":42}'
// console.log(res.data.data);

// axios.get("http://localhost:3004/paymentReceipts")
//   .then((response) => {
//     dispatch({ type: Actions.RECEIVE_DATA, payload: response.data }) //Change
//   }).catch((err) => {
//     dispatch({type: Actions.FETCH_DATA_ERROR, payload: err})
//   })
// }



// import axios from "axios";
// import { useEffect } from "react";

export function sample() {
  const fetchData = async () => {
    // const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = await axios.get("/api/users");
    console.log(data);
  };
	
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div>

    <p>ここから下は自由に描いていい</p>
    <p>hello</p>

    {/* {data?.map((user, index) => (
            <div
              className="flex w-60 flex-col gap-8 rounded-xl bg-gray-50 p-8"
              key={index}>
              <p className="">{user.datano}</p>
              <p className="">{user.name}</p>
              <p className="">{user.email}</p>
            </div>
          ))} */}

  </div>

);
}

export default sample;







// import { useEffect, useState } from "react";
// // import { fetchPerson } from "./fetcher";

// function App() {
//   const [personID, setPersonID] = useState(1);
//   const [error, setError] = useState("");
	
//   useEffect(() => {
//     const fetchData = async () => {
//       const { status, response } = await fetchPerson(personID);
//       if (status === "success") {
//         console.log(response);
//       } else if (status === "failure") {
//         setError("Failed to fetch data!");
//       }
//     };
//     fetchData();
//   }, [personID]);

//   return (
//     <div>
//       <button onClick={() => setPersonID(personID + 1)}>
//         Get next person
//       </button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }
// export default App;