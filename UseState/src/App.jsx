import React, { useState } from 'react'

const App = () => {

  const [number, setnumber ] = useState(0);
  // Number ==> Read Only
  //SetNumber ==> Write Only (jo number ni value chagne karvi hoy srtnumber no use karvo)
  function increaseNum(){
 setnumber(number + 1)                               // 2.Method ==>  let newnumber = number + 1 ;
  // Command This code   setnumber(newnumber); 
}

  function decreaseNum(){
    setnumber(number - 1)
  // 2.Method ==>   let newnumber = number - 1 ;
// Command This code   setnumber(newnumber);    
}

  return (
   <>
      <section className="py-15">
        <h1 className="text-4xl text-center font-extrabold">UseState == Data That Can Change (Data ne Change Karvo)</h1>
      <p className="text-2xl py-3 font-bold text-center">Increase And Decrease Counter</p>
      <div className="w-52 h-52 border bg-[#555] text-5xl font-extrabold rounded-xl py-2 px-4 flex 
      items-center justify-center text-[#222] mx-auto">
        {number}
      </div >
      <div className="flex justify-center items-center mt-5 gap-5">
            <button className="bg-[#555] px-4 py-1 text-center rounded-lg w-54 h-12 text-xl " onClick={increaseNum}>Increase</button>
      <button className="bg-[#555] px-4 py-1 text-center rounded-lg w-54 h-12 text-xl " onClick={decreaseNum}>Decrease</button>
      </div>
      </section>
   </>
  )
}

export default App
