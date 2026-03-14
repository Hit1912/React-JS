import React, { useState } from 'react'

const App = () => {

  const [number, setnumber] = useState(0);

  function increaseNum(){
    setnumber(number + 1);
  }

  function decreaseNum(){
    if(number > 0){
      setnumber(number - 1);
    }
  }

  function jumpIncrease(){
    setnumber(number + 5);
  }

  function jumpDecrease(){
    if(number >= 5){
      setnumber(number - 5);
    }else{
      setnumber(0);
    }
  }

  return (
   <>
      <section className="py-15">
        <h1 className="text-4xl text-center font-extrabold">
          Counter With Jump
        </h1>

        <div className="w-52 h-52 border bg-[#555] text-5xl font-extrabold rounded-xl py-2 px-4 flex 
        items-center justify-center text-[#222] mx-auto">
          {number}
        </div>

        <div className="flex justify-center items-center mt-5 gap-5 flex-wrap">

        <button 
className="bg-linear-to-r from-green-400 to-green-600 hover:scale-105 hover:shadow-lg 
text-white px-6 py-2 rounded-xl font-semibold transition duration-300"
onClick={increaseNum}>
Increase +1
</button>

<button 
className="bg-linear-to-r from-red-400 to-red-600 hover:scale-105 hover:shadow-lg 
text-white px-6 py-2 rounded-xl font-semibold transition duration-300"
onClick={decreaseNum}>
Decrease -1
</button>

<button 
className="bg-linear-to-r from-blue-400 to-blue-600 hover:scale-105 hover:shadow-lg 
text-white px-6 py-2 rounded-xl font-semibold transition duration-300"
onClick={jumpIncrease}>
Jump +5
</button>

<button 
className="bg-linear-to-r from-purple-400 to-purple-600 hover:scale-105 hover:shadow-lg 
text-white px-6 py-2 rounded-xl font-semibold transition duration-300"
onClick={jumpDecrease}>
Jump -5
</button>
        </div>
      </section>
   </>
  )
}

export default App