import React from 'react'

const NavBar = () => {
  return (
    <>
    <div>
      <div className="px-2 py1 bg-gray-200 rounded-full" >
        <Search/>
        <input type="text" placeholder="Search Photos and illustrations" ></input>
        <Focus/>
      </div>
    </div>
    <nav></nav>
    </>
  );
};

export default NavBar;
