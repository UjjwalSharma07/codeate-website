import React, {useState} from 'react'

import PopupForm from './PopupForm';
const ChooseMentor = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleSubmit = (data) => {
    // Handle form submission, e.g., send data to the server or payment gateway
    console.log('Form data:', data);
    // For payment gateway integration, you would typically redirect the user to the payment gateway here.
    // Implement the payment gateway logic as needed.
    // After successful payment, you can redirect the user to the next page.
    setShowPopup(false);
  };
  return (
    <div className="bg-gray-900 py-20">
        <div>
        <h1 className="md:text-5xl text-4xl text-center  font-bold "> Join As A &nbsp;
                      <span className="text-blue-500">Web  Dev</span>  Mentor
        <hr className="my-4 max-w-3xl border-[1px] border-white mx-auto" />
          </h1>
        </div>
        <div className="space-x-8 mt-8 flex items-center justify-center">
            <a className="bg-blue-500 px-6 py-3 rounded-md" href="https://forms.gle/QyyJpBcjiV5pCKfL9" target="_blank" rel="noreferrer">
              Apply Now
            </a>
            {/* <a className="bg-blue-500 px-6 py-3 rounded-md cursor-pointer"   onClick={() => setShowPopup(true)}>
              Apply Now
            </a> */}
            {/* <a href="https://discord.gg/2UEY4KAQcG" target="_blank" rel="noreferrer" className="border-blue-500 border-[1px] px-6 py-3 rounded-md">
              <i className="fab fa-discord"></i> Join Discord
            </a> */}
              {showPopup && <PopupForm onCancel={handleCancel} onSubmit={handleSubmit} />}
          </div>
    </div>
  )
}

export default ChooseMentor