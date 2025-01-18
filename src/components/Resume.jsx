// import React from "react";

// function Resume() {
//   const downloadResume = () => {
//     // Open the Google Drive link in a new tab
//     const driveLink = "https://drive.google.com/file/d/1QIHAHpm805smrxE66v-E0LDSXDpvbWKO/view?usp=sharing";
//     const path = "public\My Resume (1).pdf"
//     window.open(driveLink, "_blank");
//   };
//   return (
    
//     <>
//     <div className="p-6 font-sans bg-gray-100 text-gray-800 w-2/3 mt-6 mx-auto mb-16">
//       <h1 className="text-3xl font-bold text-center underline mb-6">Resume</h1>
      
//       <h2 className="text-2xl font-semibold">Pooja Shindhe</h2>
//       <p className="mb-4">
//         <strong>Email:</strong> poojashindhe13@gmail.com<br />
//         {/* <strong>Phone:</strong> 8431821737<br /> */}
//         <strong>Location:</strong> Vijayapura, India<br />
//         <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pooja-shinde-936596195/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View LinkedIn</a><br />
//         <strong>GitHub:</strong> <a href="https://github.com/PoojShinde" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View GitHub</a>
//       </p>

//       <hr className="border-t-2 border-gray-300 mb-6" />

//       <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
//       <p className="mb-6">
//         Dedicated and detail-oriented Software Developer proficient in front-end and back-end development, 
//         with a strong foundation in data structures and algorithms.
//       </p>

//       <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
//       <ul className="list-disc list-inside mb-6">
//         <li className="mb-4">
//           <strong>Assistant System Engineer (Web Developer)</strong><br />
//           Tata Consultancy Services | 05/2024 - Present | Bangalore
//         </li>
//         <li className="mb-4">
//           <strong>Trainee - UI Full Stack (Angular)</strong><br />
//           HCL | 12/2022 - 07/2023 | Virtual<br />
//           <em>Highlights:</em> Comprehensive training on UI and full-stack development using modern web technologies like Angular, HTML, CSS, and Bootstrap.
//         </li>
//         <li className="mb-4">
//           <strong>MERN Full Stack Developer (Intern)</strong><br />
//           Lattech Hubli | 09/2023 - 11/2023 | Hubli<br />
//           <em>Highlights:</em> Contributed to real-world projects, creating and enhancing websites using the MERN stack.
//         </li>
//       </ul>

//       <h3 className="text-xl font-semibold mb-2">Education</h3>
//       <ul className="list-disc list-inside mb-6">
//         <li className="mb-4">
//           <strong>MERN Full Stack Developer</strong><br />
//           Masai | 02/2024 - Present | Bangalore
//         </li>
//         <li className="mb-4">
//           <strong>Bachelor of Engineering in Computer Science</strong><br />
//           BLDEA's V.P. Dr.P.G. Halakatti College Of Engineering & Technology, Bijapur | 07/2019 - 05/2023 | 7.2 CGPA
//         </li>
//         <li className="mb-4">
//           <strong>PUC</strong><br />
//           Tungal Independent Pre-University Science College, Vijayapura | 06/2017 - 04/2019 | 87.5%
//         </li>
//         <li className="mb-4">
//           <strong>SSLC</strong><br />
//           Tungal English Medium High School, Jamakhandi | 06/2015 - 05/2016 | 91.52%
//         </li>
//       </ul>

//       <h3 className="text-xl font-semibold mb-2">Skills</h3>
//       <ul className="list-disc list-inside mb-6">
//         <li>HTML, CSS, JavaScript, React.js, Node.js</li>
//         <li>Java, SQL, Bootstrap, Git & GitHub</li>
//         <li>Express.js, MongoDB, Python, Tailwind CSS</li>
//       </ul>

//       <h3 className="text-xl font-semibold mb-2">Personal Projects</h3>
//       <ul className="list-disc list-inside mb-6">
//         <li className="mb-4">
//           <strong>E-commerce Website</strong> | 08/2021 - 09/2021<br />
//           Developed an e-commerce platform with secure payment gateways using HTML, CSS, JavaScript, and SQL.
//         </li>
//         <li className="mb-4">
//           <strong>Car Rental System</strong> | 03/2023 - 04/2023<br />
//           Created a dynamic car rental system using Angular, JSON, and Bootstrap.
//         </li>
//         <li className="mb-4">
//           <strong>Voice-Based Email System for the Visually Impaired</strong> | 02/2023 - 05/2023<br />
//           Built an accessible email system using Python and AI technologies.
//         </li>
//       </ul>

//       <h3 className="text-xl font-semibold mb-2">Certificates</h3>
//       <ul className="list-disc list-inside mb-6">
//         <li>
//           <strong>Startup India Learning Program</strong><br />
//           National Investment Promotion Agency | 03/2020 - 01/2020
//         </li>
//       </ul>

//       <h3 className="text-xl font-semibold mb-2">Languages</h3>
//       <ul className="list-disc list-inside">
//         <li>English (60/100)</li>
//         <li>Kannada (100/100)</li>
//         <li>Hindi (100/100)</li>
//         <li>Marathi (80/100)</li>
//       </ul>
//     </div>
//     <div className="flex justify-center  mb-4">
//     <button  className="bg-black hover:bg-white hover:text-black text-white py-2 px-4 rounded " onClick={downloadResume}>Download Resume</button>
//     </div>
//     </>
//   );
// }

// export default Resume;

import React from "react";

function Resume() {
  const downloadResume = () => {
    // Open the Google Drive link in a new tab
    const driveLink = "https://drive.google.com/file/d/1aYM8CF07kJkl9pju8erTEhajFxp0uO0r/view?usp=sharing";
    const path = "public\My Resume (1).pdf"
    window.open(driveLink, "_blank");
  };

  return (
    <>
      <div className="p-6 font-sans bg-gray-100 text-gray-800 w-full md:w-2/3 mt-6 mx-auto mb-16">
        <h1 className="text-3xl font-bold text-center underline mb-6">Resume</h1>
        
        <h2 className="text-2xl font-semibold">Pooja Shindhe</h2>
        <p className="mb-4">
          <strong>Email:</strong> poojashindhe13@gmail.com<br />
          {/* <strong>Phone:</strong> 8431821737<br /> */}
          <strong>Location:</strong> Vijayapura, India<br />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pooja-shinde-936596195/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View LinkedIn</a><br />
          <strong>GitHub:</strong> <a href="https://github.com/PoojShinde" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View GitHub</a>
        </p>

        <hr className="border-t-2 border-gray-300 mb-6" />

        <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
        <p className="mb-6">
          Dedicated and detail-oriented Software Developer proficient in front-end and back-end development, 
          with a strong foundation in data structures and algorithms.
        </p>

        <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-4">
            <strong>Assistant System Engineer (Web Developer)</strong><br />
            Tata Consultancy Services | 05/2024 - Present | Bangalore
          </li>
          <li className="mb-4">
            <strong>Trainee - UI Full Stack (Angular)</strong><br />
            HCL | 12/2022 - 07/2023 | Virtual<br />
            <em>Highlights:</em> Comprehensive training on UI and full-stack development using modern web technologies like Angular, HTML, CSS, and Bootstrap.
          </li>
          <li className="mb-4">
            <strong>MERN Full Stack Developer (Intern)</strong><br />
            Lattech Hubli | 09/2023 - 11/2023 | Hubli<br />
            <em>Highlights:</em> Contributed to real-world projects, creating and enhancing websites using the MERN stack.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-4">
            <strong>MERN Full Stack Developer</strong><br />
            Masai | 02/2024 - Present | Bangalore
          </li>
          <li className="mb-4">
            <strong>Bachelor of Engineering in Computer Science</strong><br />
            BLDEA's V.P. Dr.P.G. Halakatti College Of Engineering & Technology, Bijapur | 07/2019 - 05/2023 | 7.2 CGPA
          </li>
          <li className="mb-4">
            <strong>PUC</strong><br />
            Tungal Independent Pre-University Science College, Vijayapura | 06/2017 - 04/2019 | 87.5%
          </li>
          <li className="mb-4">
            <strong>SSLC</strong><br />
            Tungal English Medium High School, Jamakhandi | 06/2015 - 05/2016 | 91.52%
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside mb-6">
          <li>HTML, CSS, JavaScript, React.js, Node.js</li>
          <li>Java, SQL, Bootstrap, Git & GitHub</li>
          <li>Express.js, MongoDB, Python, Tailwind CSS</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Personal Projects</h3>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-4">
            <strong>E-commerce Website</strong> | 08/2021 - 09/2021<br />
            Developed an e-commerce platform with secure payment gateways using HTML, CSS, JavaScript, and SQL.
          </li>
          <li className="mb-4">
            <strong>Car Rental System</strong> | 03/2023 - 04/2023<br />
            Created a dynamic car rental system using Angular, JSON, and Bootstrap.
          </li>
          <li className="mb-4">
            <strong>Voice-Based Email System for the Visually Impaired</strong> | 02/2023 - 05/2023<br />
            Built an accessible email system using Python and AI technologies.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Certificates</h3>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Startup India Learning Program</strong><br />
            National Investment Promotion Agency | 03/2020 - 01/2020
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Languages</h3>
        <ul className="list-disc list-inside">
          <li>English </li>
          <li>Kannada </li>
          <li>Hindi </li>
          <li>Marathi</li>
        </ul>
      </div>
      
      <div className="flex justify-center mb-4">
        <button 
          className="bg-black hover:bg-white hover:text-black text-white py-2 px-4 rounded transition duration-300"
          onClick={downloadResume}
        >
          Download Resume
        </button>
      </div>
    </>
  );
}

export default Resume;
