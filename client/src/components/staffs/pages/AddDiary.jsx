import { useState } from 'react';
import Navbar from '../Navbar';
import Layout from '../Layout';
import axios from 'axios';
import { mainUrl } from '../../../API/Api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function AddDiary() {
  const [note1, setNote1] = useState('00:00 AM');
  const [note2, setNote2] = useState('00:00 AM');
  const [note3, setNote3] = useState(0);
  const [note4, setNote4] = useState(0);
  const [note5, setNote5] = useState(0);
  const [note6, setNote6] = useState(0);
  const [note7, setNote7] = useState(0);
  const [note8, setNote8] = useState(0);
  const [note9, setNote9] = useState(0);
  const [note10, setNote10] = useState(0);
  const [note11, setNote11] = useState('');
  const [note12, setNote12] = useState('');
  const [note13, setNote13] = useState('');
  const [note14, setNote14] = useState('');
  const [note15, setNote15] = useState('');
  const [note16, setNote16] = useState('');
  const [note17, setNote17] = useState(0);
  const [note18, setNote18] = useState(0);
  const [note19, setNote19] = useState(new Date());
  const [note20, setNote20] = useState(new Date());
  const [note21, setNote21] = useState(new Date());
  const [note22, setNote22] = useState(new Date());
  const [note23, setNote23] = useState(new Date());
  const [note24, setNote24] = useState('');
  const [note25, setNote25] = useState(new Date());
  const [note26, setNote26] = useState('');
  const [note27, setNote27] = useState(0);
  const [note28, setNote28] = useState('');
  const [note29, setNote29] = useState('');
  const [note30, setNote30] = useState(0);
  const [note31, setNote31] = useState(0);
  const [note32, setNote32] = useState(0);
  const [note33, setNote33] = useState(0);
  const [note34, setNote34] = useState('');
  const [note35, setNote35] = useState('');
  const [note36, setNote36] = useState(0);
  const [note37, setNote37] = useState('');
  const navigate = useNavigate();

  const diaryData = {
    note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16,
    note17, note18, note19, note20, note21, note22, note23, note24, note25, note26, note27, note28, note29, note30,
    note31, note32, note33, note34, note35, note36, note37,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('staff-token');
    axios.post(`${mainUrl}add-diary`, diaryData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          navigate('/diary')
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      })
  }

  return (
    <div>
      <Navbar />
      <Layout>
        <div className="flex justify-center items-center h-full px-4">
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Diary</h2>

            <form onSubmit={handleSubmit} action="">
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
                  <label className="text-sm font-medium text-gray-700">പുതുതായി പൊരുന്തിയ ജീവികൾ<br />(ഉണ്ടോ?)</label>
                  <input
                    type="text"
                    value={note11}
                    placeholder="Enter notes"
                    onChange={(e) => setNote11(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതുതായി പൊരുന്തിയ ജീവികൾ(ഏതൊക്കെ?)</label>
                  <input
                    type="text"
                    value={note12}
                    placeholder="Enter notes"
                    onChange={(e) => setNote12(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതുതായി രോഗമുള്ള  ജീവികൾ<br />(ഉണ്ടോ?)</label>
                  <input
                    type="text"
                    value={note13}
                    placeholder="Enter notes"
                    onChange={(e) => setNote13(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതുതായി രോഗമുള്ള  ജീവികൾ(ഏതൊക്കെ?)</label>
                  <input
                    type="text"
                    value={note14}
                    placeholder="Enter notes"
                    onChange={(e) => setNote14(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതുതായി രോഗമുള്ള ജീവികൾ(രോഗത്തിന്റെ പേര്?)</label>
                  <input
                    type="text"
                    value={note15}
                    placeholder="Enter notes"
                    onChange={(e) => setNote15(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതുതായി രോഗമുള്ള ജീവികൾ(മരുന്ന് തുടങ്ങിയോ?)</label>
                  <input
                    type="text"
                    value={note16}
                    placeholder="Enter notes"
                    onChange={(e) => setNote16(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">നിലവിൽ  രോഗം ഉള്ള ജീവികളുടെ എണ്ണം(കോഴി)</label>
                  <input
                    type="number"
                    value={note17}
                    placeholder="Enter notes"
                    onChange={(e) => setNote17(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">നിലവിൽ  രോഗം ഉള്ള ജീവികളുടെ എണ്ണം(താറാവ്)</label>
                  <input
                    type="number"
                    value={note18}
                    placeholder="Enter notes"
                    onChange={(e) => setNote18(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതിയ തീറ്റകൾ വന്ന തിയതി<br />(Child Food (CF))</label>
                  <input
                    type="date"
                    value={note19}
                    placeholder="Enter notes"
                    onChange={(e) => setNote19(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതിയ തീറ്റകൾ വന്ന തിയതി<br />(Child & Mother Food (CMF))</label>
                  <input
                    type="date"
                    value={note20}
                    placeholder="Enter notes"
                    onChange={(e) => setNote20(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതിയ തീറ്റകൾ വന്ന തിയതി<br />(Adult Food (AF))</label>
                  <input
                    type="date"
                    value={note21}
                    placeholder="Enter notes"
                    onChange={(e) => setNote21(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതിയ തീറ്റകൾ വന്ന തിയതി<br />(Parents Stock Food (PSF))</label>
                  <input
                    type="date"
                    value={note22}
                    placeholder="Enter notes"
                    onChange={(e) => setNote22(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതിയ തീറ്റകൾ വന്ന തിയതി<br />(Meat Propose Food (MPF))
                  </label>
                  <input
                    type="date"
                    value={note23}
                    placeholder="Enter notes"
                    onChange={(e) => setNote23(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">അപ്രത്യക്ഷമായി എന്തെകിലും<br />ഉണ്ടായോ?</label>
                  <input
                    type="text"
                    value={note24}
                    placeholder="Enter notes"
                    onChange={(e) => setNote24(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതിയ കോഴികൾ വിരിഞ്ഞ<br />(തിയതി)</label>
                  <input
                    type="date"
                    value={note25}
                    placeholder="Enter notes"
                    onChange={(e) => setNote25(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതിയ കോഴികൾ വിരിഞ്ഞ<br />(തള്ള കോഴി ഏത്?)</label>
                  <input
                    type="text"
                    value={note26}
                    placeholder="Enter notes"
                    onChange={(e) => setNote26(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">പുതിയ കോഴികൾ വിരിഞ്ഞ<br />(കുട്ടികളുടെ എണ്ണം)</label>
                  <input
                    type="number"
                    value={note27}
                    placeholder="Enter notes"
                    onChange={(e) => setNote27(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">ഇ ആഴ്ചയിലെ extra work<br />(a)</label>
                  <input
                    type="text"
                    value={note28}
                    placeholder="Enter notes"
                    onChange={(e) => setNote28(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">ഇ ആഴ്ചയിലെ extra work(b)</label>
                  <input
                    type="text"
                    value={note29}
                    placeholder="Enter notes"
                    onChange={(e) => setNote29(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">A എടുത്ത മുട്ടകളുടെ എണ്ണം(കോഴി)</label>
                  <input
                    type="number"
                    value={note30}
                    placeholder="Enter notes"
                    onChange={(e) => setNote30(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">A എടുത്ത മുട്ടകളുടെ എണ്ണം<br />(താറാവ്)</label>
                  <input
                    type="number"
                    value={note31}
                    placeholder="Enter notes"
                    onChange={(e) => setNote31(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">വീട്ടിലേക് എടുത്ത മുട്ടകളുടെ എണ്ണം(കോഴി)</label>
                  <input
                    type="number"
                    value={note32}
                    placeholder="Enter notes"
                    onChange={(e) => setNote32(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">വീട്ടിലേക് എടുത്ത മുട്ടകളുടെ എണ്ണം(താറാവ്)</label>
                  <input
                    type="number"
                    value={note33}
                    placeholder="Enter notes"
                    onChange={(e) => setNote33(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">ജീവികൾ ഏതെങ്കിലും മരണപെട്ടോ?(ബാഹ്യ അടയാളങ്ങൾ)</label>
                  <input
                    type="text"
                    value={note34}
                    placeholder="Enter notes"
                    onChange={(e) => setNote34(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">ജീവികൾ ഏതെങ്കിലും വിൽക്കപ്പെട്ടോ?(ബാഹ്യ അടയാളങ്ങൾ)</label>
                  <input
                    type="text"
                    value={note35}
                    placeholder="Enter notes"
                    onChange={(e) => setNote35(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">തിങ്കളായിച്ചകളിൽ മംഗലശ്ശേരി കോയി കടയിൽ (refrigerator) ഉള്ള മുട്ടയുടെ എണ്ണം</label>
                  <input
                    type="number"
                    value={note36}
                    placeholder="Enter notes"
                    onChange={(e) => setNote36(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">ഇന്നത്തെ വീഴ്ചകൾ</label>
                  <input
                    type="text"
                    value={note37}
                    placeholder="Enter notes"
                    onChange={(e) => setNote37(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

              </div>


              {/* Submit Button */}
              <div className="mt-6 text-center">
                <button type='submit' className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default AddDiary;
