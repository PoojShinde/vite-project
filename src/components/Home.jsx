import React from "react";

function Home() {

  const downloadResume = () => {
    // Open the Google Drive link in a new tab
    const driveLink = "https://drive.google.com/file/d/1aYM8CF07kJkl9pju8erTEhajFxp0uO0r/view?usp=sharing";
    const path = "public\My Resume (1).pdf"
    window.open(driveLink, "_blank");
  };
  return (
    <div className="flex justify-center items-center h-screen  ">
      {/* Image Section */}
      <div className="m-4 p-4">
        <img
          className="w-96 h-96 rounded-full object-cover"
          src="src\assets\my photo.jpeg"
          alt="Cat"
        />
      </div>

      {/* Text Section */}
      <div className="m-4 p-4 ">
        <h1 className="text-4xl font-bold italic text-left">Hello</h1>
        <br />
        <h3 className="text-2xl font-bold italic text-left">A Bit About Me</h3>
        <p className="w-96 font-light justify-start">
        I am a passionate web developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Python. My journey into coding is driven by a love for creating dynamic, responsive, and user-centric applications that make a difference.
        </p>
        <div className="flex gap-3 mt-10 justify-start " >
          <div className="w-32 h-32 rounded-full bg-yellow-500 border-black border hover:bg-white flex items-center justify-center" onClick={downloadResume}>
            <a className="text-black font-bold" href="">
              Resume
            </a>
          </div>
          {/* <div className="w-32 h-32 rounded-full bg-orange-600 border-black border hover:bg-white flex items-center justify-center">
            <a className="text-black font-bold" href="">
              Projects
            </a>
          </div> */}
          <div className="w-32 h-32 rounded-full bg-teal-300 border-black border hover:bg-white flex items-center justify-center">
            <a className="text-black font-bold" href="/contact" >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
