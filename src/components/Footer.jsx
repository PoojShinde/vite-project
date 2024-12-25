// import React from 'react'
// import { GrLinkedinOption } from "react-icons/gr";
// import { FaGithub } from "react-icons/fa";


// function Footer() {
//   return (
//     <div className='flex justify-between  border-t border-grey w-4/5 mx-auto'>
//       <div className='font-bold text-xl mt-14 mb-14 text-start items-center justify-center'>
//         <h1>Phone</h1>
//         <span className='text-sm font-light'>+91 123456789</span>
//       </div>
//       <div className='font-bold text-xl mt-14 mb-14 text-start'>
//         <h1>Email</h1>
//         <span className='text-sm font-light'>poojashinde@.com</span>
//       </div>
//       <div className='font-bold text-xl mt-14 mb-14 text-start'>
//         <h1>Follow Me</h1>
//         <div className='flex gap-4 justify-end mt-2'>
//         <a href="https://www.linkedin.com/in/pooja-shinde-936596195/"><GrLinkedinOption />
//          </a>
//          <a href="https://github.com/PoojShinde"><FaGithub />
//          </a>
//         </div>
         
//       </div>
//       <div className='font-light text-sm mt-14 mb-14 text-start'>
//         <small>Copyright &copy; 2023 by Pooja Shindhe</small>
//         <br />
//         <small>All rights reserved</small>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-4/5 mx-auto mt-14 mb-14 border-t border-grey flex flex-col md:flex-row md:justify-between">
      <div className="font-bold text-xl mb-4 md:mb-0 text-start">
        <h1>Phone</h1>
        <span className="text-sm font-light">+91 123456789</span>
      </div>
      <div className="font-bold text-xl mb-4 md:mb-0 text-start">
        <h1>Email</h1>
        <span className="text-sm font-light">poojashinde13@gmail.com</span>
      </div>
      <div className="font-bold text-xl mb-4 md:mb-0 text-start">
        <h1>Follow Me</h1>
        <div className="flex gap-4 justify-start md:justify-end mt-2">
          <a href="https://www.linkedin.com/in/pooja-shinde-936596195/" className="text-xl">
            <GrLinkedinOption />
          </a>
          <a href="https://github.com/PoojShinde" className="text-xl">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="font-light text-sm text-start mt-4 md:mt-0">
        <small>Copyright &copy; 2023 by Pooja Shindhe</small>
        <br />
        <small>All rights reserved</small>
      </div>
    </div>
  );
}

export default Footer;
