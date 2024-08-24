import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Layout from '../Layout';

function Diary() {
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="mt-[4rem] pe-4"> {/* Add some margin to position content below the navbar */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Day Diary</h1>
            <Link to='/add-diary' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
              Add Day Diary
            </Link>
          </div>

          {/* Make the table container horizontally scrollable */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-slate-300">
                    <tr>
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
                    </tr>
                  </thead>
                  {/* Add responsive classes to handle smaller screens */}
                  <tbody className="bg-slate-400 divide-y divide-gray-200 text-xs md:text-sm">
                    {/* Example static row */}
                    <tr className="hover:bg-slate-200 transition duration-300">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">10:30 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">11:00 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">20</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">25</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">20</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">25</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">20</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">25</div>
                      </td>
                    </tr>
                  </tbody>
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
