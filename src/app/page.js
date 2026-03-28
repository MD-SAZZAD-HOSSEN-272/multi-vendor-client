"use client";
import {  useContext, useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";



export default function  Home() {
  const { getMe } = useAuth();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {
      const currentUser = await getMe();
      console.log(currentUser, 'current user');
      if (currentUser.success) {
        setUser(currentUser.data);
      }
    }

    fetchUser();
  }, [])

  console.log(user);

  return (
    <div className="flex flex-col text-red-500 flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      hello
      {
        user && <h1>{user.name}</h1>   
      }
    </div>
  );
}
