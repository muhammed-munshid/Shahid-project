import { useState } from 'react';
import Navbar from '../Navbar';
import Layout from '../Layout';

function AddDiary() {
  const [note1, setNote1] = useState('00:00 AM');
  const [note2, setNote2] = useState('00:00 AM');
  const [note3, setNote3] = useState('');
  const [note4, setNote4] = useState('');
  const [note5, setNote5] = useState('');
  const [note6, setNote6] = useState('');
  const [note7, setNote7] = useState('');
  const [note8, setNote8] = useState('');
  const [note9, setNote9] = useState('');
  const [note10, setNote10] = useState('');
  const [note11, setNote11] = useState('');
  const [note12, setNote12] = useState('');

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
                  value={note1}
                  placeholder="Enter notes"
                  onChange={(e) => setNote1(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ജീവികളെ കൂട്ടിൽ കയറ്റിയ സമയം</label>
                <input
                  type="text"
                  value={note2}
                  placeholder="Enter notes"
                  onChange={(e) => setNote2(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ജീവികളെ തുറന്നു വിട്ടപ്പോലുള്ള എണ്ണം(കോഴി)</label>
                <input
                  type="number"
                  value={note3}
                  placeholder="Enter notes"
                  onChange={(e) => setNote3(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ജീവികളെ തുറന്നു വിട്ടപ്പോലുള്ള എണ്ണം(താറാവ്)</label>
                <input
                  type="number"
                  value={note4}
                  placeholder="Enter notes"
                  onChange={(e) => setNote4(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700"> ജീവികളെ കൂട്ടിൽ കയറ്റിയപ്പോലുള്ള  എണ്ണം(കോഴി)</label>
                <input
                  type="number"
                  value={note5}
                  placeholder="Enter notes"
                  onChange={(e) => setNote5(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ജീവികളെ കൂട്ടിൽ കയറ്റിയപ്പോലുള്ള  എണ്ണം(താറാവ്)</label>
                <input
                  type="number"
                  value={note6}
                  placeholder="Enter notes"
                  onChange={(e) => setNote6(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ഇന്ന് കിട്ടിയ മുട്ടയുടെ എണ്ണം(കോഴി)</label>
                <input
                  type="number"
                  value={note7}
                  placeholder="Enter notes"
                  onChange={(e) => setNote7(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ഇന്ന് കിട്ടിയ മുട്ടയുടെ എണ്ണം(താറാവ്)</label>
                <input
                  type="number"
                  value={note8}
                  placeholder="Enter notes"
                  onChange={(e) => setNote8(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ആകെയുള്ള (ആഴ്ചയിൽ) മുട്ടയുടെ എണ്ണം(കോഴി)</label>
                <input
                  type="number"
                  value={note9}
                  placeholder="Enter notes"
                  onChange={(e) => setNote9(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">ആകെയുള്ള (ആഴ്ചയിൽ) മുട്ടയുടെ എണ്ണം(താറാവ്)</label>
                <input
                  type="number"
                  value={note10}
                  placeholder="Enter notes"
                  onChange={(e) => setNote10(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">പുതുതായി പൊരുന്തിയ ജീവികൾ(കോഴി)</label>
                <input
                  type="number"
                  value={note11}
                  placeholder="Enter notes"
                  onChange={(e) => setNote11(e.target.value)}
                  className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">പുതുതായി പൊരുന്തിയ ജീവികൾ(താറാവ്)</label>
                <input
                  type="number"
                  value={note12}
                  placeholder="Enter notes"
                  onChange={(e) => setNote12(e.target.value)}
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
