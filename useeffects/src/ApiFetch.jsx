import React, { useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [Data3, setData3] = useState([]);

  // method 1
  const method1 = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json();
      })
      .then((data) => {
        console.log(data);
        return setData1(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // method 2(async, await , fetch)
  const method2 = async () => {
    try {
      let response =await fetch("https://dummyjson.com/products?limit=10");
      let data =await response.json();
      console.log(data.products);
      return setData2(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  // method 3
  const method3 = async () => {
    // get ==> recieve data only
    // post ==> send data only
    // patch ==> update data
    // delete ==> delete data

    let response =await axios.get("https://dummyjson.com/recipes?limit=10",);
    console.log(response.data.recipes);
    return setData3(response.data.recipes);
  };


  return (
    <>
      {/* method : 1 */}
      <section className="bg-green-100 w-full h-screen p-6 flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-3xl">method 1: Fetch - then - then</h1>
        <div className="bg-black text-white h-144 w-full rounded-md flex justify-center items-center gap-4 flex-wrap p-4 overflow-y-scroll">
          {Data1.map((user, idx) => {
            return (
              <div key={idx} className="w-sm rounded-xl bg-[#222] p-2">
                <p>
                  <span className="font-bold">Name : </span>
                  {user.name}
                </p>
                <p>
                  <span className="font-bold">Email : </span>
                  {user.email}
                </p>
                <p>
                  <span className="font-bold">Website : </span>
                  {user.website}
                </p>
              </div>
            );
          })}
        </div>
        <button
          className="px-4 py-2 text-center rounded-md bg-green-950 w-36 active:bg-red-100 active:border-green-950 active:text-green-950 active:scale-90 text-white focus:scale-95 font-bold"
          onClick={method1}
        >
          Get data
        </button>
      </section>

      {/* method : 2 */}
      <section className="bg-blue-100 w-full h-screen p-6 flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-3xl">method 2: Async Await</h1>
        <div className="bg-black h-144 w-full rounded-md flex flex-wrap items-center justify-center gap-4 overflow-auto p-4">
        {Data2.map((products, idx) => {
            return (
              <div key={idx} className="w-72 rounded-md bg-[#222] p-4 text-white relative">
                <img src={products.images[0]} className="w-full h-auto rounded-2xl bg-[#555]" alt="images" />
                <div className="flex items-center justify-between p-4 ">
                    <h1 className="text-sm font-bold">{products.title}</h1>
                    <h1 className="text-nowrap bg-[#555] p-2 rounded-md">${products.price}</h1>
                </div>
                <p className="bg-orange-400 font-bold absolute p-1 px-3 top-4 rounded-tr-md rounded-br-md rounded-tl-xl left-4">{products.brand}</p>
              </div>
            );
          })}
        </div>
        <button
          className="px-4 py-2 text-center rounded-md bg-blue-950 w-36 active:bg-blue-100 active:border-blue-950  active:text-blue-950 active:scale-90 text-white focus:scale-95 font-bold"
          onClick={method2}
        >
          Get data
        </button>
      </section>

{/* method 3 */}
      <section className="bg-red-100 w-full h-screen p-6 flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-3xl">method 3: Axios(Async Await)</h1>
        <div className="bg-black h-144 w-full rounded-md flex flex-wrap items-center justify-center gap-4 overflow-auto p-4">
          {Data3.map((rec, idx)=>{
            return(
                <div key={idx} className="text-white rounded-2xl bg-[#222] p-4 w-72">
                    <img src={rec.image} alt="images" className="w-full rounded-md hover:rounded-full transition-all hover:rotate-360 hover:scale-110 duration-1000"/>
                    <div>
                        <h1>{rec.name}</h1>
                        <h1>{rec.rating}</h1>
                    </div>
                </div>
            )
          })}
        </div>
        <button
          className="px-4 py-2 text-center rounded-md bg-red-950 w-36 active:bg-red-100 active:border-red-950  active:text-red-950 active:scale-90 text-white focus:scale-95 font-bold"
          onClick={method3}
        >
          Get data
        </button>
      </section>
    </>
  );
};

export default ApiFetch;
 