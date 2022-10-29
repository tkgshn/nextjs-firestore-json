import type { NextPage } from 'next';
import axios from 'axios';
import React, { useState } from 'react';

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

  const [userData, setUserData] = useState<UserData>({
    datano: '',
    name: '',
    email: '',
  });

  const targetUserId = 'uxvQXlXuamqEAqVqodQj';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const targetField = event.target.name;
    setUserData({ ...userData, [targetField]: newValue });
    // cf. スプレッド構文 https://javascript.keicode.com/typescript/spread-syntax.php
    // cf. オブジェクトのKeyに変数を指定する https://zenn.dev/ry_km/articles/use-variables-with-object-key-in-js#key%E3%81%AB%E5%A4%89%E6%95%B0%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('handleSubmit: ', userData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <form className="flex flex-col gap-8 pb-24" onSubmit={handleSubmit}>
        <label className="flex w-12 flex-row gap-8">
          Data No.
          <input
            type="text"
            name="datano"
            className="bg-gray-50"
            onChange={handleChange}
          />
        </label>
        <label className="flex w-12 flex-row gap-4">
          Name
          <input
            type="text"
            name="name"
            className="bg-gray-50"
            onChange={handleChange}
          />
        </label>
        <label className="flex w-12 flex-row gap-4">
          Email
          <input
            type="email"
            name="email"
            className="bg-gray-50"
            onChange={handleChange}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="mt-4 w-60 rounded-full bg-purple-500 py-2 px-4 font-bold text-white hover:bg-purple-700"
        />
      </form>
      <div className="flex flex-col gap-8 rounded-xl bg-gray-50 p-8">
        <p className="">{userData.datano}</p>
        <p className="">{userData.name}</p>
        <p className="">{userData.email}</p>
      </div>
      <button
        className="mt-4 w-60 rounded-full bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
        onClick={() => insertUser()}>
        Insert User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700"
        onClick={() => updateUser(targetUserId, userData)}>
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
