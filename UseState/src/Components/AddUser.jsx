import React, { useState } from "react";
 
const AddUser = () => {
  const [data, setData] = useState([
    { username: "arav patel", email: "aravpatel@gmail.com" },
    { username: "riya sharma", email: "riyasharma@gmail.com" },
    { username: "vivan mehta", email: "vivanmehta@gmail.com" },
  ]);
 
  function add() {
    const randomUser = {
      username: "random user " + Math.floor(Math.random() * 100),
      email: "random" + Math.floor(Math.random() * 100) + "@gmail.com",
    };
 
    setData([...data, randomUser]);
  }
 
  return (
    <>
      <section className="flex flex-wrap items-center gap-6 justify-center py-6 px-8">
        {data.map((user, index) => (
          <div
            key={index}
            className="bg-[#555] rounded-xl w-full h-auto max-w-md px-4 py-2 text-center"
          >
            <h1 className="text-2xl bg-[#222] rounded-lg my-2 px-4 py-1">
              {user.username}
            </h1>
 
            <p className="text-2xl bg-[#222] rounded-lg my-2 px-4 py-1">
              {user.email}
            </p>
          </div>
        ))}
      </section>
 
      <div className="flex justify-center">
        <button
          onClick={add}
          className="bg-orange-400 px-6 py-2 rounded-lg active:scale-95"
        >
          Add Random User
        </button>
      </div>
    </>
  );
};
 
export default AddUser;
 