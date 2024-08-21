import { useState } from 'react';
import Navbar from '../Navbar';
import Layout from '../Layout';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div>
      <Navbar />
      <Layout>
        <div className="flex justify-center items-center h-full px-4">
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Add User</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  required
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  required
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Mobile Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Mobile</label>
                <input
                  type="number"
                  value={mobile}
                  required
                  placeholder="Enter mobile number"
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Address Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={address}
                  required
                  placeholder="Enter address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-200">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default AddUser;
