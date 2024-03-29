import React, { useState } from 'react';

const CertificateForm = () => {
  const [ok, setok] = useState(false);
  const [certificateId, setCertificateId] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(certificateId);

    let result = await fetch("http://localhost:5000/verify/add",{
        method:'post',
        body:JSON.stringify({certificateId}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result = await result.json();
  if(result)setok(true);
    console.warn(result);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="p-8 rounded shadow-md w-40 md:w-1/2 lg:w-1/3  text-center mx-auto w-40 text-left mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Certificate Form</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Name"
              required
            />
          </div> */}
          <div className="mb-4">
            <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700">
              Certificate ID
            </label>
            <input
              type="text"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Certificate ID"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
        <div>
            {ok && <h2>Certification Id Added Successfully</h2>}
        </div>
      </div>
    </div>
  );
};

export default CertificateForm;
