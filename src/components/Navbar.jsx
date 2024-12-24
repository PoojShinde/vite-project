import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between bg-white">
      <div className="flex gap-3 mt-5 ml-5">
        <div className="w-6 h-6 rounded-full bg-yellow-600"></div>
        <div>
          <h1 className="poppins-light-italic text-xl font-semibold flex">
          <Link to="/" className="no-underline text-black hover:text-black">
              Pooja Shindhe
            </Link>
            </h1>
        </div>
        <div>
          <span className="text-xs font-light">WEB DEVELOPER</span>
        </div>
      </div>
      <div className="flex justify-end mt-5 mr-10">
        <ul className="flex font-light gap-5">
          <li className="w-28 border-r border-black text-center ">
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "no-underline  text-orange-600 font-light "
                  : "no-underline text-gray-500"
              }
            >
              Resume
            </NavLink>
          </li>
          {/* <li className="w-20 border-r border-black text-center  ">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "no-underline text-orange-600 font-light "
                  : "no-underline text-gray-500"
              }
            >
              Projects
            </NavLink>
          </li> */}
          <li className="w-20 text-center   ">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "no-underline text-orange-600 font-light "
                  : "no-underline text-gray-500"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
