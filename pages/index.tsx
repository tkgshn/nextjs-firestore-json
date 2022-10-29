import type { NextPage } from 'next';
import axios from 'axios';

type UserData = {
  datano: string;
  name: string;
  email: string;
  gender?: 'male' | 'female' | 'other';
};

const Home: NextPage = () => {
  const insertUser = async () => {
    await axios.post('/api/user');
  };
  const updateUser = async (userId: string, userData: UserData) => {
    await axios.patch('/api/user', userData, { params: { userId } });
  };
  const getUser = async (userId: string) => {
    await axios.get('/api/user', { params: { userId } });
  };
  const deleteUser = async () => {
    await axios.delete('/api/user');
  };
  const targetUserId = 'uxvQXlXuamqEAqVqodQj';

  const exampleUserData: UserData = {
    datano: '012',
    name: '😀😀😀😀😀😀',
    email: 'Hoge@example.com',
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        className="mt-4 w-60 rounded-full bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
        onClick={() => insertUser()}>
        Insert User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700"
        onClick={() => updateUser(targetUserId, exampleUserData)}>
        Update User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => getUser(targetUserId)}>
        Get User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
        onClick={() => deleteUser()}>
        Delete User
      </button>
    </div>
  );
};

export default Home;
