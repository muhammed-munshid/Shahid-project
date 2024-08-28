import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Layout from '../Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { mainUrl } from '../../../API/Api';
import EditStaff from './EditStaff';
import toast from 'react-hot-toast';
import AdminDmChat from './AdminDmChat';

function Staffs() {
  const [staffList, setStaffList] = useState([]);
  const [isChat, setIsChat] = useState(false);
  const [chatId, setChatId] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState('');

  useEffect(() => {
    const getStaff = async () => {
      try {
        const response = await axios.get(`${mainUrl}get-staff`);
        setStaffList(response.data.data || []); // Ensure it's at least an empty array
      } catch (error) {
        console.log(error);
      }
    };
    getStaff();
  }, []);

  const handleChat = (id) => {
    setIsChat(true);
    setChatId(id);
  };

  const handleEdit = (id) => {
    setIsEdit(true);
    setEditId(id);
  };

  const handleToggleBlock = async (id) => {
    try {
      const response = await axios.post(`${mainUrl}block-staff/${id}`);
      const data = response.data.data
      if (response.data.success) {
        toast.success(response.data.message)
        setStaffList(prevStaffs =>
          prevStaffs.map(staff =>
            staff._id === id ? { ...staff, isBlocked: data.isBlocked } : staff
          )
        );
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChatCompletion = () => {
    setIsChat(false)
  }

  const handleEditCompletion = (updatedStaff) => {
    console.log('up: ', updatedStaff);

    setStaffList((prevList) =>
      prevList.map((staff) => (staff._id === updatedStaff._id ? updatedStaff : staff))
    );
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <div>
      {isChat ? (
        <AdminDmChat id={chatId} backtoList={handleChatCompletion} />
      ) : isEdit ? (
        <EditStaff id={editId} onEditComplete={handleEditCompletion} cancelPath={handleCancel} />
      ) : (
        <div>
          <Navbar />
          <Layout>
            <div className="mt-[4rem] pe-4">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Staff List</h1>
                <Link
                  to="/add-staff"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Add Staff
                </Link>
              </div>

              <div className="overflow-x-auto">
                <div className="inline-block min-w-full">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-slate-300">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mobile
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Chat
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Edit
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-slate-400 divide-y divide-gray-200">
                        {/* Ensure staffList is defined before mapping */}
                        {staffList.length > 0 ? (
                          staffList.map((data) => (
                            <tr
                              className="hover:bg-slate-200 transition duration-300"
                              key={data._id}
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {data.name}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{data.email}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{data.mobile}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                  onClick={() => handleChat(data._id)}
                                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-200"
                                >
                                  Chat
                                </button>
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
                                {data.isBlocked ? (
                                  <button
                                    onClick={() => handleToggleBlock(data._id)}
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-200">
                                    Unblock
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleToggleBlock(data._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200">
                                    Block
                                  </button>
                                )}

                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6" className="text-center py-4">
                              No staff members found.
                            </td>
                          </tr>
                        )}
                      </tbody>
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

export default Staffs;
