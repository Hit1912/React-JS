import React, { useState } from "react";
 
const ChangeUser = () => {
  const [data, setData] = useState({
    photo:
      "https://i.pinimg.com/control1/736x/dd/dc/71/dddc71dd2bf73305211c6dcec7bb0342.jpg",
    username: "Test User",
    role: "Tester",
    email: "test@gmail.com",
  });
 
  function changeUser() {
    // if (data.username === "Test User") {
    //   setData({
    //     photo:
    //       "https://img.freepik.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80%22,
    //     username: "Cat User",
    //     role: "Developer",
    //     email: "cat@gmail.com",
    //   });
    // } else {
    //   setData({
    //     photo:
    //       "https://i.pinimg.com/control1/736x/dd/dc/71/dddc71dd2bf73305211c6dcec7bb0342.jpg",
    //     username: "Test User",
    //     role: "Tester",
    //     email: "test@gmail.com",
    //   });
    // }
 
    let new_obj = { ...data };
 
    if (data.username === "Test User") {
      new_obj.username = "Test User 2";
      new_obj.photo =
        "https://img.freepik.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80%22";
      new_obj.background = "bg-purple-500";
    } else {
      new_obj.username = "Test User";
      new_obj.photo =
        "https://i.pinimg.com/control1/736x/dd/dc/71/dddc71dd2bf73305211c6dcec7bb0342.jpg";
      new_obj.background = "bg-teal-50";
    }
    setData(new_obj);
  }
 
  return (
    <>
      <section className="flex items-center justify-center mt-20">
        <div
          className={`w-full h-auto max-w-md px-6 py-4 ${data.background} rounded-2xl text-center font-bold shadow-xl shadow-amber-200`}
        >
          <img
            src={data.photo}
            alt="photo"
            className="w-44 h-44 object-cover rounded-full my-5 mx-auto"
          />
 
          <h1 className="text-2xl bg-orange-400 hover:bg-orange-700 px-4 py-1 rounded">
            {data.username}
          </h1>
 
          <h2 className="text-xl bg-orange-400 hover:bg-orange-700 px-4 py-1 rounded mt-2">
            {data.role}
          </h2>
 
          <p className="text-xl bg-orange-400 hover:bg-orange-700 px-4 py-1 rounded mt-2">
            {data.email}
          </p>
 
          <button
            className="w-full mt-4 py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-teal-500 hover:scale-95 transition"
            onClick={changeUser}
          >
            Change User
          </button>
        </div>
      </section>
    </>
  );
};
 
export default ChangeUser;
 
 