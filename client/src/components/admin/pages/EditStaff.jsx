import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Layout from '../Layout';
import axios from 'axios';
import { mainUrl } from '../../../API/Api';
import toast from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
function EditStaff({ id, onEditComplete, cancelPath }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const staffData = { name, email, mobile, password };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${mainUrl}get-staff-by-id/${id}`);
        const { name, email, mobile, password } = response.data.data;
        setName(name);
        setEmail(email);
        setMobile(mobile);
        setPassword(password);
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch staff data');
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${mainUrl}edit-staff/${id}`, staffData)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          onEditComplete(response.data.data); // Pass the updated staff data back to the parent
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      });
  };

  const handleCancel = () => {
    cancelPath()
  }

  return (
    <div>
      <Navbar />
      <Layout>
        <div className="flex justify-center items-center h-full px-4">
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Edit Staff</h2>

            <form onSubmit={handleSubmit}>
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

                {/* Password Input */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    value={password}
                    required
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className='mx-4'>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-200"
                >
                  Cancel
                </button>
                </div>
                <div className='mx-4'>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-200"
                >
                  Update Staff
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default EditStaff;
