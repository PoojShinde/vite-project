// import React from "react";

// function Home() {

//   const downloadResume = () => {
//     // Open the Google Drive link in a new tab
//     const driveLink = "https://drive.google.com/file/d/1aYM8CF07kJkl9pju8erTEhajFxp0uO0r/view?usp=sharing";
//     const path = "/My Resume (1).pdf"
//     window.open(driveLink, "_blank");
//   };
//   return (
//     <div className="flex justify-center items-center h-screen  ">
//       {/* Image Section */}
//       <div className="m-4 p-4">
//         <img
//           className="w-96 h-96 rounded-full object-cover"
//           src="/my photo.jpeg"
//           alt="Cat"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="m-4 p-4 ">
//         <h1 className="text-4xl font-bold italic text-left">Hello</h1>
//         <br />
//         <h3 className="text-2xl font-bold italic text-left">A Bit About Me</h3>
//         <p className="w-96 font-light justify-start">
//         I am a passionate web developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Python. My journey into coding is driven by a love for creating dynamic, responsive, and user-centric applications that make a difference.
//         </p>
//         <div className="flex gap-3 mt-10 justify-start " >
//           <div className="w-32 h-32 rounded-full bg-yellow-500 border-black border hover:bg-white flex items-center justify-center" onClick={downloadResume}>
//             <a className="text-black font-bold" href="">
//               Resume
//             </a>
//           </div>
//           {/* <div className="w-32 h-32 rounded-full bg-orange-600 border-black border hover:bg-white flex items-center justify-center">
//             <a className="text-black font-bold" href="">
//               Projects
//             </a>
//           </div> */}
//           <div className="w-32 h-32 rounded-full bg-teal-300 border-black border hover:bg-white flex items-center justify-center">
//             <a className="text-black font-bold" href="/contact" >
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { useNavigate } from 'react-router-dom';
function Home() {

  const navigate = useNavigate();
  const downloadResume = () => {
    // Open the Google Drive link in a new tab
    navigate('/Resume'); // Redirects to the Contact page

  };
  const openContact = () => {
    navigate('/contact'); // Redirects to the Contact page
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen p-4">
      {/* Image Section */}
      <div className="m-4 p-4 flex justify-center">
        <img
          className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover"
          src="/my photo.jpeg"
          alt="My Photo"
        />
      </div>

      {/* Text Section */}
      <div className="m-4 p-4 max-w-md md:max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold italic text-left">Hello</h1>
        <br />
        <h3 className="text-xl md:text-2xl font-bold italic text-left">A Bit About Me</h3>
        <p className="font-light text-sm md:text-base justify-start">
          I am a passionate web developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Python. My journey into coding is driven by a love for creating dynamic, responsive, and user-centric applications that make a difference.
        </p>
        <div className="flex gap-3 mt-10 justify-start flex-wrap">
          <div
            className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-yellow-500 border-black border hover:bg-white flex items-center justify-center cursor-pointer"
            onClick={downloadResume}
          >
            <a className="text-black font-bold" >
              Resume
            </a>
          </div>
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-teal-300 border-black border hover:bg-white flex items-center justify-center cursor-pointer" onClick={openContact}>
            <a  className="text-black font-bold" >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
