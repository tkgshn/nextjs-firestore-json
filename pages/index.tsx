import type { NextPage } from 'next';
import axios from 'axios';
import React, { useState } from 'react';
import useEffect from 'react';
import Header from "../components/header";

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

  //ユーザーID（オブジェクト）とそれに入れたいユーザーデータを渡せばデータを更新する関数
  const updateUser = async (userId: string, userData: UserData) => {
    await axios.patch('/api/user', userData, { params: { userId } });
  };

  //ユーザーID（オブジェクト）を入れると、ユーザーデータを返す関数
  const getUser = async (userId: string) => {
    await axios.get('/api/user', { params: { userId } });
  };

  //指定したユーザーIDのデータを削除する
  const deleteUser = async () => {
    await axios.delete('/api/user');
  };

  //ユーザーのデータを一覧表示するための関数
  const getAllUsers = async () => await axios.get('/api/users');

  const [userData, setUserData] = useState<UserData>({
    datano: '',
    name: '',
    email: '',
  });

  const [userList, setUserList] = useState<UserData[]>();

  const fetchUserList = async () => {
    console.log('fetching...');
    await getAllUsers()
      .then(res => {
        console.log('res.data: ', res.data);
        setUserList(res.data);
      })
      .catch(e => console.error(e))
      .finally(() => {
        console.log(userList);
      });
  };



  const targetUserId = 'm3cCtC3x2bg2GPcB5Gwb';

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
    <>
    <Header />
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

      {/* これ押した瞬間に`fetchUserList`が呼び出される */}
      <button
        className="mt-4 w-60 rounded-full bg-cyan-500 py-2 px-4 font-bold text-white hover:bg-cyan-700"
        onClick={fetchUserList}>
        Get All Users
      </button>

      <script>
      getAllUsers = userList;
      {/* .then(res => {
        console.log('res.data: ', res.data);
        setUserList(res.data);
      })
      .catch(e => console.error(e))
      .finally(() => {
        console.log(userList);
      }); */}
      </script>


      <div className="flex w-full flex-row flex-wrap gap-8">
        {/* {userList &&
          userList?.map((user, index) => (
            <div
              className="flex w-60 flex-col gap-8 rounded-xl bg-gray-50 p-8"
              key={index}>
              <p className="">{user.datano}</p>
              <p className="">{user.name}</p>
              <p className="">{user.email}</p>
            </div>
          ))} */}
          {/* こっちでもいいのでは */}
          {userList?.map((user, index) => (
            <div
              className="flex w-60 flex-col gap-8 rounded-xl bg-gray-50 p-8"
              key={index}>
              <p className="">{user.datano}</p>
              <p className="">{user.name}</p>
              <p className="">{user.email}</p>
            </div>
          ))}
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
    </>
  );
};

export default Home;


