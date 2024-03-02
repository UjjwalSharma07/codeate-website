import React, { useState } from 'react'

const PopupForm = ({ onCancel, onSubmit }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [userType, setUserType] = useState('student') // Default to 'student'

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ fullName, email, phoneNo })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90">
      <div className="bg-white p-6 rounded shadow-lg w-96 mt-20">
        <h2 className="text-2xl font-semibold mb-4 text-black">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="border rounded w-full py-2 px-3"
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
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNo"
            >
              Phone No.
            </label>
            <input
              type="tel"
              id="phoneNo"
              className="border rounded w-full py-2 px-3"
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
                checked={userType === 'student'}
                onChange={() => setUserType('student')}
                className="mr-2"
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
                className="mr-2"
              />
              <label htmlFor="professional" className="text-black">
                Professional
              </label>
            </div>
          </div>
          {userType === 'student' && (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="collegeName"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  className="border rounded w-full py-2 px-3"
                  placeholder="College Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="year"
                >
                  Year
                </label>
                <input
                  type="text"
                  id="year"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Year"
                />
              </div>
            </>
          )}
          {userType === 'professional' && (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="experience"
                >
                  Experience (In Yrs)
                </label>
                <input
                  type="text"
                  id="experience"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Experience (In Yrs)"
                />
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
  )
}

export default PopupForm
