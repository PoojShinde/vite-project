// import React, { useState } from 'react';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const serviceID = 'service_9mm7vur'; // Your EmailJS service ID
  
//     // Prepare the form data
//     const formData = new FormData(e.target);
    
//     // Send email using EmailJS
//     emailjs.sendForm(serviceID, 'template_yourTemplateID', formData)
//       .then((response) => {
//         console.log('Email sent successfully', response);
//         alert('Your message has been sent!');
//         // Optionally, reset the form after sending the email
//         setFormData({
//           name: '',
//           email: '',
//           message: ''
//         });
//       })
//       .catch((error) => {
//         console.error('Error sending email', error);
//         alert('Something went wrong, please try again!');
//       });
//   };
//   return (
//     <div className="relative mt-10 mb-10">


//       {/* Image Section */}
//       <div className="relative w-full ">

//         <img src="src/assets/call.png" alt="Call Image" className="w-4/5 h-auto mx-auto" />

//         {/* Form Section over the left side of the image */}
//         <div className="absolute top-1/2 right-2/4 transform -translate-y-1/2 p-6 bg-transparent bg-opacity-80 rounded-lg  w-1/3">
//           <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 className="w-full p-2 mt-2 border border-gray-300 rounded-md"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="w-full p-2 mt-2 border border-gray-300 rounded-md"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="w-full p-2 mt-2 border border-gray-300 rounded-md"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleInputChange}
//               />
//             </div>

//             {/* Send Button */}
//             <button
//               type="submit"
//               className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // This should be at the top

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  emailjs.init('your_user_id'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_9mm7vur'; // Your service ID
    const templateID = 'template_dukdixj'; // Your template ID

    // Send email using EmailJS
    emailjs.sendForm(serviceID, templateID, e.target,'ObkeGImf_ROWEN8dH')
      .then((response) => {
        console.log('Email sent successfully', response);
        alert('Your message has been sent!');
        // Optionally, reset the form after sending the email
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email', error);
        alert('Something went wrong, please try again!');
      });
  };

  return (
    <div className="relative mt-10 mb-10">
      <div className="relative w-full">
        <img src="src/assets/call.png" alt="Call Image" className="w-4/5 h-auto mx-auto" />

        {/* Form Section over the left side of the image */}
        <div className="absolute top-1/2 right-2/4 transform -translate-y-1/2 p-6 bg-transparent bg-opacity-80 rounded-lg w-1/3">
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
