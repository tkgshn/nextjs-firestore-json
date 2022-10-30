import {useState,useEffect} from 'react';
import axios from 'axios';
import Header from "../components/header";
import Link from "next/link";

type UserData = {
    datano: string;
    name: string;
    email: string;
    gender?: 'male' | 'female' | 'other';
  };

export default function List() {
  const [users, setUsers] = useState<UserData[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('/api/users');
      setUsers(res.data);
    }
    fetchUsers()
  },[])

  return (
    <>
    <Header />
    <div>
    <p>ユーザー一覧</p>
      <ul>
        {users?.map(user => (
            <li key={user.datano}>
                <Link href={`user/${encodeURIComponent(user.datano)}`}>
                    <p>{user.name}</p>
                </Link>
                {/* <p>メールアドレス: {user.email}</p> */}
            </li>
        ))}
      </ul>
    </div>
    </>
  )
}