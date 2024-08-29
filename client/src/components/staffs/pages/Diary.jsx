import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Layout from '../Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { mainUrl } from '../../../API/Api';

function Diary() {
  const [diaryList, setDiaryList] = useState([]);

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
            {/* <td className="px-6 py-4 whitespace-nowrap">
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
            </td> */}
          </tr>
        );
      })}
    </tbody>
  );

  return (
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
  );
}

export default Diary;
