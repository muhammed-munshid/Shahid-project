import { useState } from 'react';
import Navbar from '../Navbar';
import Layout from '../Layout';

function AddDiary() {
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
            <h2 className="text-2xl font-bold mb-6 text-center">Add Diary</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">പുറത്തേക്കു ജീവികളെ  തുറന്നു വിട്ട സമയം</label>
                <input
                  type="text"
                  value={name}
                  required
                  placeholder="Enter notes"
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ജീവികളെ കൂട്ടിൽ കയറ്റിയ സമയം</label>
                <input
                  type="text"
                  value={email}
                  required
                  placeholder="Enter notes"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Mobile Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ജീവികളെ തുറന്നു വിട്ടപ്പോലുള്ള എണ്ണം(കോഴി)</label>
                <input
                  type="number"
                  value={mobile}
                  required
                  placeholder="Enter notes"
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Address Input */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ജീവികളെ തുറന്നു വിട്ടപ്പോലുള്ള എണ്ണം(താറാവ്)</label>
                <input
                  type="text"
                  value={address}
                  required
                  placeholder="Enter notes"
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700"> ജീവികളെ കൂട്ടിൽ കയറ്റിയപ്പോലുള്ള  എണ്ണം(കോഴി )</label>
                <input
                  type="number"
                  value={mobile}
                  required
                  placeholder="Enter notes"
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ജീവികളെ കൂട്ടിൽ കയറ്റിയപ്പോലുള്ള  എണ്ണം(താറാവ്)</label>
                <input
                  type="text"
                  value={address}
                  required
                  placeholder="Enter notes"
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

export default AddDiary;
