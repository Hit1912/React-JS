import React, { useState } from "react";
 
const AddUser = () => {

  // 3 local users by default

  const [data, setData] = useState([

    { username: "arav patel", email: "aravpatel@gmail.com" },

    { username: "riya sharma", email: "riyasharma@gmail.com" },

    { username: "vivan mehta", email: "vivanmehta@gmail.com" },

  ]);
 
  const [allUsers, setAllUsers] = useState([]); // Users from API

  const [index, setIndex] = useState(0); // Index for next API user
 
  const add = () => {

    // Fetch API only once

    if (allUsers.length === 0) {

      fetch("https://jsonplaceholder.typicode.com/users")

        .then((res) => res.json())

        .then((result) => {

          const users = result.map((user) => ({

            username: user.username,

            email: user.email,

          }));

          setAllUsers(users);
 
          // Add the first API user

          setData([...data, users[0]]);

          setIndex(1); // Next API user index

        });

    } else {

      // Add next API user one by one

      if (index < allUsers.length) {

        setData([...data, allUsers[index]]);

        setIndex(index + 1);

      }

    }

  };
 
  return (
<>
<section className="flex flex-wrap items-center gap-6 justify-center py-6 px-8">

        {data.map((user, idx) => (
<div

            key={idx}

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
 