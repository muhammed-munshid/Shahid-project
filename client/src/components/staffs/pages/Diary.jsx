import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Layout from '../Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { mainUrl } from '../../../API/Api';
import EditDiary from './EditDiary';
import toast from 'react-hot-toast';

function Diary() {
  const [diaryList, setDiaryList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState('');

  useEffect(() => {
    const getDiary = async () => {
      try {
        const response = await axios.get(`${mainUrl}get-diary`);
        setDiaryList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDiary();
  }, []);

  const handleEdit = (id) => {
    setIsEdit(true);
    setEditId(id);
  };


  const handleEditCompletion = (updatedStaff) => {

    setDiaryList((prevList) =>
      prevList.map((staff) => (staff._id === updatedStaff._id ? updatedStaff : staff))
    );
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,Delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`${mainUrl}delete-diary/${id}`)
            .then((response) => {
              if (response.data.success) {
                Swal.fire(
                  'Diary deleted!',
                  'Your diary has been removed.',
                  'success',
                ).then(() => {
                  window.location.reload();
                });
              } else {
                toast.error('Something error');
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    });
    // try {
    //   const response = axios.delete(`${mainUrl}delete-diary/${id}`);
    //   if (response.data.success) {
    //     toast.success(response.data.message)
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Table headers (separate from the map function)
  const tableHeaders = (
    <thead className="bg-slate-300">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Date
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുറത്തേക്കു ജീവികളെ  തുറന്നു വിട്ട സമയം
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ജീവികളെ കൂട്ടിൽ കയറ്റിയ സമയം
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ജീവികളെ തുറന്നു വിട്ടപ്പോലുള്ള എണ്ണം(കോഴി)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ജീവികളെ തുറന്നു വിട്ടപ്പോലുള്ള എണ്ണം(താറാവ്)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ജീവികളെ കൂട്ടിൽ കയറ്റിയപ്പോലുള്ള  എണ്ണം(കോഴി)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ജീവികളെ കൂട്ടിൽ കയറ്റിയപ്പോലുള്ള  എണ്ണം(താറാവ്)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ഇന്ന് കിട്ടിയ മുട്ടയുടെ എണ്ണം(കോഴി)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ഇന്ന് കിട്ടിയ മുട്ടയുടെ എണ്ണം(താറാവ്)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ആകെയുള്ള (ആഴ്ചയിൽ) മുട്ടയുടെ എണ്ണം(കോഴി)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ആകെയുള്ള (ആഴ്ചയിൽ) മുട്ടയുടെ എണ്ണം(താറാവ്)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതുതായി പൊരുന്തിയ ജീവികൾ<br />(ഉണ്ടോ?)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതുതായി പൊരുന്തിയ ജീവികൾ<br />(ഏതൊക്കെ?)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതുതായി രോഗമുള്ള ജീവികൾ<br />(ഉണ്ടോ?)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതുതായി രോഗമുള്ള ജീവികൾ<br />(ഏതൊക്കെ?)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതുതായി രോഗമുള്ള ജീവികൾ<br />(രോഗത്തിന്റെ പേര്?)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതുതായി രോഗമുള്ള ജീവികൾ<br />(മരുന്ന് തുടങ്ങിയോ?)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          നിലവിൽ  രോഗം ഉള്ള ജീവികളുടെ എണ്ണം(കോഴി)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          നിലവിൽ  രോഗം ഉള്ള ജീവികളുടെ എണ്ണം(താറാവ്)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതിയ തീറ്റകൾ വന്ന തിയതി(Child Food (CF))
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതിയ തീറ്റകൾ വന്ന തിയതി(Child & Mother Food (CMF))
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതിയ തീറ്റകൾ വന്ന തിയതി(Adult Food (AF))
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതിയ തീറ്റകൾ വന്ന തിയതി(Parents Stock Food (PSF))
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതിയ തീറ്റകൾ വന്ന തിയതി(Meat Propose Food (MPF))
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          അപ്രത്യക്ഷമായി എന്തെകിലും ഉണ്ടായോ?
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതിയ കോഴികൾ വിരിഞ്ഞ (തിയതി)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതിയ കോഴികൾ വിരിഞ്ഞ (തള്ള കോഴി ഏത്?)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          പുതിയ കോഴികൾ വിരിഞ്ഞ (കുട്ടികളുടെ എണ്ണം)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ഇ ആഴ്ചയിലെ extra work(a)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ഇ ആഴ്ചയിലെ extra work(b)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          A എടുത്ത മുട്ടകളുടെ എണ്ണം(കോഴി)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          A എടുത്ത മുട്ടകളുടെ എണ്ണം(താറാവ്)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          വീട്ടിലേക് എടുത്ത മുട്ടകളുടെ എണ്ണം(കോഴി)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          വീട്ടിലേക് എടുത്ത മുട്ടകളുടെ എണ്ണം(താറാവ്)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ജീവികൾ ഏതെങ്കിലും മരണപെട്ടോ?(ബാഹ്യ അടയാളങ്ങൾ)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ജീവികൾ ഏതെങ്കിലും വിൽക്കപ്പെട്ടോ?(ബാഹ്യ അടയാളങ്ങൾ)
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          തിങ്കളായിച്ചകളിൽ മംഗലശ്ശേരി കോയി കടയിൽ (refrigerator) ഉള്ള മുട്ടയുടെ എണ്ണം
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ഇന്നത്തെ വീഴ്ചകൾ
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Edit
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Delete
        </th>
      </tr>
    </thead>
  );

  // Rendering the table body
  const tableBody = (
    <tbody className="bg-slate-400 divide-y divide-gray-200 text-xs md:text-sm">
      {diaryList.map((data) => {
        const formattedDate = new Date(data.date).toLocaleDateString('en-GB'); // Formatting date to DD-MM-YYYY
        const formattedDate2 = new Date(data.note19).toLocaleDateString('en-GB');
        const formattedDate3 = new Date(data.note20).toLocaleDateString('en-GB');
        const formattedDate4 = new Date(data.note21).toLocaleDateString('en-GB');
        const formattedDate5 = new Date(data.note22).toLocaleDateString('en-GB');
        const formattedDate6 = new Date(data.note23).toLocaleDateString('en-GB');
        const formattedDate7 = new Date(data.note25).toLocaleDateString('en-GB');

        return (
          <tr className="hover:bg-slate-200 transition duration-300" key={data._id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{formattedDate}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note1}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note2}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note3}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note4}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note5}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note6}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note7}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note8}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note9}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note10}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note11}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note12}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note13}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note14}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note15}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note16}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note17}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note18}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{formattedDate2}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{formattedDate3}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{formattedDate4}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{formattedDate5}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{formattedDate6}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note24}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{formattedDate7}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note26}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note27}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note28}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note29}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note30}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note31}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note32}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note33}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note34}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note35}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note36}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{data.note37}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => handleEdit(data._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
              >
                Edit
              </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => handleDelete(data._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <div>
      {isEdit ? (
        <EditDiary id={editId} onEditComplete={handleEditCompletion} cancelPath={handleCancel} />
      ) : (
        <div>
          <Navbar />
          <Layout>
            <div className="mt-[4rem] pe-4">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Day Diary</h1>
                <Link to='/add-diary' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                  Add Day Diary
                </Link>
              </div>

              <div className="overflow-x-auto">
                <div className="inline-block min-w-full">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      {/* Render headers */}
                      {tableHeaders}

                      {/* Render body */}
                      {tableBody}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      )}
    </div>
  );
}

export default Diary;
