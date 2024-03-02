import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {toast, Toaster}  from "react-hot-toast";


const HeroTezos = () => {
  const [openForm, setOpenForm] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [userType, setUserType] = useState('student') // Default value, adjust as needed
  const [collegeName, setCollegeName] = useState('')
  const [collegeyear, setCollegeyear] = useState('')
  const [paymentphoneNo, setPaymentphoneNo] = useState('')
  const [companyyear, setCompanyyear] = useState('')
  const [year, setYear] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [experience, setExperience] = useState('')
  const [showPaymentPopup, setShowPaymentPopup] = useState(false)
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [registrationData, setRegistrationData] = useState([])
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textFieldValid, setTextFieldValid] = useState(false);
  const [UPI, setUPI] = useState("");
  const [utmContent, setUtmContent] = useState(null);

  useEffect(() => {
    // Sample URL
    const url = window.location.href

    // Parse the URL and extract the utm_content parameter
    const urlParams = new URLSearchParams(url);
    const utmContentValue = urlParams.get("utm_content");

    // Set the utmContent state with the extracted value
    setUtmContent(utmContentValue);
  }, []);
  const handleOpen = () => {
    setOpenForm(true)
  }

  console.log('====================================');
  console.log('the utm us', utmContent);
  console.log('====================================');
 

  const handleShowPaymentPopup = () => {
    setShowPaymentPopup(true)
    setOpenForm(false)
  }

const handleFormSubmit = () => {  

  handleShowPaymentPopup();
};
const handleSubmit = () => {
 
 
  const userData = {
    fullName: fullName,
    email: email,
    phoneNo: phoneNo,
    userType: userType,
    collegeName: collegeName,
    collegeYear: collegeyear,
    companyName: companyName,
    companyYear: companyyear,
    upiID: UPI,
    paymentphoneNo: paymentphoneNo,
    referredBy: utmContent
  };
  console.log(userData);
  
  setRegistrationData([...registrationData, userData]);
  // console.log(userData)
  
  // fetch("https://sheet.best/api/sheets/2e861318-6ec7-4a16-acaf-5aa5cb9b9e38", {
  fetch("https://sheet.best/api/sheets/7ab993b0-fb86-49de-aea7-48ff77370d5b", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData), 
  })
    .then((r) => r.json())
    .then((data) => {
     
      console.log(data);
    })
    .catch((error) => {
     
      console.log(error);
    });

    toast.success("Registered Successfully!")
 
 
};




  // console.log(registrationData)

  const onCancel = () => {
    setOpenForm(false)
  }


  return (
    <div className="flex justify-between items-center md:p-24 p-4">
      <Toaster />
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
      <div className="mt-16">
        <div className="text-white">
          <h1 className="md:text-6xl text-4xl font-bold leading-snug text-blue-500">
            Web Development Cohort
          </h1>
          <hr className="my-4 border-[1px] border-white mx-auto" />
          <p className="text-lg font-400 mt-4 leading-7">
            Extend your specialized skill set. Learn Front-End Development
            and explore exciting opportunities with Codeate.
            <br />
            <br />
            <span className="text-blue-500 text-3xl font-semibold">
              1st Oct 2023 - 12th Nov 2023
            </span>
            <br />
            <br />
          </p>
        </div>
        <div className="space-x-8 mt-8 flex justify-center">
  <button
    className="bg-blue-500 px-6 py-3  cursor-pointer rounded-md text-white"
    onClick={() => handleOpen()}
  >
    Register Now
  </button>
  <a
    href="https://discord.com/invite/v4vZBMt9hQ"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-blue-500 px-6 py-3 rounded-md flex items-center"
  >
    <i className="fab fa-discord mr-2"></i> Join Discord
  </a>
</div>




      </div>

        {openForm && !showPaymentPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90">
            <div className="bg-white p-6 rounded shadow-lg md:w-[600px] w-[400px] mt-20">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Registration Form
              </h2>
              <form onSubmit={handleFormSubmit} >
                <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="fullName"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="border text-black bg-white  border-black rounded w-full py-2 px-3"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email ID *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border text-black bg-white  border-black  rounded w-full py-2 px-3"
                    placeholder="Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phoneNo"
                  >
                    Phone No. *
                  </label>
                  <input
                    type="tel"
                    id="phoneNo"
                    className="border text-black bg-white  border-black  rounded w-full py-2 px-3"
                    placeholder="Phone No."
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Are you a Student or a Working Professional?
                  </label>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="student"
                      value="student"
                      className='bg-white border mr-2 border-black '
                      checked={userType === 'student'}
                      onChange={() => setUserType('student')}
                      
                    />
                    <label htmlFor="student" className="mr-4 text-black">
                      Student
                    </label>
                    <input
                      type="radio"
                      id="professional"
                      value="professional"
                      checked={userType === 'professional'}
                      onChange={() => setUserType('professional')}
                      className="mr-2 bg-white active:bg-black"
                    />
                    <label htmlFor="professional" className="text-black">
                      Professional 
                    </label>
                  </div>
                </div>
                {userType === 'student' && (
                  <>
                  <div className="grid md:grid-cols-2 gap-4 ">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="collegeName"
                      >
                        College Name *
                      </label>
                      <input
                        type="text"
                        id="collegeName"
                        className="border bg-white border-black text-black rounded w-full py-2 px-3"
                        placeholder="College Name"
                        onChange={(e) => {
                          userType === 'student' ? setCollegeName(e.target.value) : setCompanyyear(e.target.value)}}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="year"
                      >
                        Year *
                      </label>
                      <input
                        type="text"
                        id="year"
                        className="border bg-white border-black text-black rounded w-full py-2 px-3"
                        placeholder="Year"
                        onChange={(e) => setCollegeyear(e.target.value)}
                      />
                    </div>
                    </div>
                  </>
                )}
                {userType === 'professional' && (
                  <>
                  <div className="grid md:grid-cols-2 gap-4 ">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="companyName"
                      >
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        className="border text-black bg-white border-black rounded w-full py-2 px-3"
                        placeholder="Company Name"
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="experience"
                      >
                        Experience (In Yrs) *
                      </label>
                      <input
                        type="text"
                        id="experience"
                        className="border text-black bg-white border-black rounded w-full py-2 px-3"
                        placeholder="Experience (In Yrs)"
                        onChange={(e) => setExperience(e.target.value)}
                      />
                    </div>
                    </div>
                  </>
                )}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onCancel}
                    className="mr-2 text-red-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

{showPaymentPopup && (
  // Second Popup (Payment Option)
  <div className="fixed inset-0 flex items-center justify-center mt-20 z-50 bg-black/90">
  <div className="bg-white p-6 rounded shadow-lg w-[700px] overflow-y-auto pb-32 max-h-screen mt-20">
 
    {paymentCompleted ? (
      // Payment Confirmation Message
      <>
        <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">
          Payment Successful
        </h2>
        
        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <p className="text-lg text-green-700 mb-2">
            Hi there! 🎉 Thank you for your interest in our WDC - 2023 Program.
          </p>
          <p className="text-lg text-green-700">
            In the next 24 hours, you will receive an email from our team to confirm your registration and provide further instructions.
          </p>
        </div>
        <button
          onClick={() => setShowPaymentPopup(false)}
          className="bg-blue-500 text-white py-2 px-4 rounded-full w-full mt-4 hover:bg-blue-600 transition duration-300"
        >
          Close
        </button>
      </>
    ) : (
      // Payment Options and Text Field
      <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold  text-black">
          Payment Options
        </h2>
        <button
      onClick={() => setShowPaymentPopup(false)}
      className=" text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    </div>
        <p className="text-2xl font-bold text-blue-500">Rs 299</p>
        <p className="text-sm text-gray-700 mb-2">
          To complete your registration, please make a payment of Rs 299 using one of the following methods:
        </p>
        <div className="flex items-center justify-center">
          <img
            src="/images/qrcode.jpeg"
            alt="QR Code"
            className="w-40 h-40 mx-auto mb-2"
          />
        </div>
        <p className="text-center text-gray-500 mb-4">
          Scan the QR code above to make the payment.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          You can also make the payment via Paytm at the following number:
        </p>
        <p className="text-lg font-semibold text-blue-500 mb-4">
          9009750909@paytm
        </p>

        {/* Text Field for Validation */}
        <p className="text-sm text-gray-700 mb-2">
          Kindly, please enter the authentic UPI ID/Phone Number via which you have done the payment. You can submit only after entering the UPI ID.
        </p>
        <p className="text-sm font-bold text-red-700 mb-2">
        Exact 3+ Characters in case of UPI  ID/ 10 digits required for Phone Number*
        </p>
        
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter your UPI ID*"
            className="w-full px-4 py-2 text-black bg-white border border-black rounded mb-4 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              setUPI(e.target.value);
              if (textFieldValid || (e.target.value.length >= 3 &&  e.target.value.includes('@'))) {
                setTextFieldValid(true);
              } else {
                setTextFieldValid(false);
              }
            }}
          />
          <div className='mx-2 mb-5 text-black font-bold'>OR</div>
          <input
            type="text"
            placeholder="Enter your Phone Number*"
            className="w-full px-4 py-2 bg-white text-black border border-black rounded mb-4 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              setPaymentphoneNo(e.target.value);
              if (textFieldValid || e.target.value.length === 10) {
                setTextFieldValid(true);
              } else {
                setTextFieldValid(false);
              }
            }}
          />
          {textFieldValid ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : null}
        </div>

        {/* Submit & Pay Button */}
        <button
          onClick={() => {
            if (textFieldValid) {
              handleSubmit(); // Call the handleSubmit function
              setPaymentCompleted(true);
            }
          }}
          className={`bg-blue-500 text-white py-2 px-4 rounded w-full mt-2 ${
            textFieldValid ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!textFieldValid}
        >
          Submit & Pay
        </button>
      </div>
    )}
  </div>
</div>

)}

        <div className="md:mt-0 mt-20">
          <Image
            src="/images/tezohero.png"
            alt=""
            height="500px"
            width="600px"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroTezos
