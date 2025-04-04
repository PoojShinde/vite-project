// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="flex justify-between bg-white">
//       <div className="flex gap-3 mt-5 ml-5">
//         <div className="w-6 h-6 rounded-full bg-yellow-600"></div>
//         <div>
//           <h1 className="poppins-light-italic text-xl font-semibold flex">
//           <Link to="/" className="no-underline text-black hover:text-black">
//               Pooja Shindhe
//             </Link>
//             </h1>
//         </div>
//         <div>
//           <span className="text-xs font-light">WEB DEVELOPER</span>
//         </div>
//       </div>
//       <div className="flex justify-end mt-5 mr-10">
//         <ul className="flex font-light gap-5">
//           <li className="w-28 border-r border-black text-center ">
//             <NavLink
//               to="/resume"
//               className={({ isActive }) =>
//                 isActive
//                   ? "no-underline  text-orange-600 font-light "
//                   : "no-underline text-gray-500"
//               }
//             >
//               Resume
//             </NavLink>
//           </li>
//           {/* <li className="w-20 border-r border-black text-center  ">
//             <NavLink
//               to="/projects"
//               className={({ isActive }) =>
//                 isActive
//                   ? "no-underline text-orange-600 font-light "
//                   : "no-underline text-gray-500"
//               }
//             >
//               Projects
//             </NavLink>
//           </li> */}
//           <li className="w-20 text-center   ">
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive
//                   ? "no-underline text-orange-600 font-light "
//                   : "no-underline text-gray-500"
//               }
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-white p-4">
      {/* Left Side */}
      <div className="flex gap-3 mt-5 ml-5">
        <div className="md:w-6 md:h-6 w-4 h-4 mt-1.5 md:-mt-0 rounded-full bg-yellow-600"></div>
        <div>
          <h1 className="poppins-light-italic text-xl font-semibold flex">
            <Link to="/" className="no-underline text-black hover:text-black">
              Pooja Shindhe
            </Link>
          </h1>
        </div>
        <div>
          <span className="text-xs font-light mt-2">WEB DEVELOPER</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex md:space-x-5 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row font-light gap-5 text-xs md:text-sm">
          <li className="w-28   border-black text-center md:mt-2">
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? 'no-underline text-orange-600 font-light'
                  : 'no-underline text-gray-500'
              }
            >
              Resume
            </NavLink>
          </li>
          {/* <li className="w-28 border-r border-black text-center">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'no-underline text-orange-600 font-light'
                  : 'no-underline text-gray-500'
              }
            >
              Projects
            </NavLink>
          </li> */}
          <li className="w-28 text-center md:mt-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'no-underline text-orange-600 font-light'
                  : 'no-underline text-gray-500'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle (Hidden on larger screens) */}

  

      
    </nav>
  );
}

export default Navbar;
