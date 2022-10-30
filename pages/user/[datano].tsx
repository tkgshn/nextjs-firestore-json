import Link from "next/link";
import Header from "../../components/header";
import axios from 'axios';
import { async } from "@firebase/util";

type UserData = {
    datano: string;
    name: string;
    email: string;
    gender?: 'male' | 'female' | 'other';
  };

export default function IndexPage({ user }: { user: UserData}) {
  return (
    <>
      <Header />
      <div>
        <h1>POST(投稿)</h1>
        <p>{user["datano"]}</p>
      </div>
    </>
  );
}


export async function getServerSideProps({ params }: { params: any }) {
    // console.log(params); //一旦テストで入れてみる
    // const id = params.post;
    const id = params.id;
    const res = await axios.get('/api/users');
    const post = await res.json();
  
    //post.idが存在しない場合に404へ遷移
    if (!Object.keys(post).length) {
      return {
        notFound: true,
      };
    }
  
    return { props: { post } };
  }
  