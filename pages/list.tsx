import {useState,useEffect} from 'react'
import axios from 'axios';

export default function List() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('/api/users');
      setUsers(res.data);
    }
    fetchUsers()
  },[])

  return (
    <div>
    <p>サンプル</p>
      <ul>
        {users?.map(user => (
          <li key={user.datano}>
            <p>名前: {user.name}</p>
            <p>メールアドレス: {user.email}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}