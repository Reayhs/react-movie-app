import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center py-6 px-24 lg:p-6">
        <h1 className="text-4xl font-bold">Film</h1>
        <ul className="flex items-center text-center">
          <li className="px-10 text-lg font-bold">
            <a href="">Lorem</a>
          </li>
          <li className="text-lg font-bold">
            <a href="">ipsum</a>
          </li>
        </ul>

        <a
          href="https://github.com/Reayhs"
          target="_blank"
          className="text-lg font-bold border-2 border-white border-solid p-[4px] w-28 rounded-2xl lg:hidden text-center"
        >
          Github
        </a>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
