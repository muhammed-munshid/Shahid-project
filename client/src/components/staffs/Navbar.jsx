// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  const handleLogout = () => {
    console.log('Logout clicked');
    localStorage.removeItem('staff-token');
    navigate('/staff-login');  // Navigate to login page after logout
  };

  return (
    <>
      <nav className="bg-cyan-600 p-3 flex justify-between items-center relative top-0 h-16">
        <div className="flex items-center space-x-4">
          {/* <button onClick={toggleSidebar} className="text-white bg-sky-700 p-2 rounded-full hover:bg-sky-800">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button> */}
          <a href="/" className="flex items-center">
            <img height="auto" src="/event logo.png" className="h-6 mr-3 sm:h-9" alt="Not working Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MGL Farm</span>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white p-2 hover:sky-red-800 px-4 py-2">
            Staff
          </button>
          <button onClick={handleLogout} className="text-white bg-sky-700 px-4 py-2 rounded hover:bg-sky-800">Logout</button>
        </div>
      </nav>

      {/* Sidebar with smooth transition */}
      {/* <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-purple-500 p-4 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Menu</h2>
          <ul>
 
 
            <li className="mb-2">
              <Link to="/staffs" className="block w-full py-2 px-4 text-left text-white rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                Staffs
              </Link>
            </li>


            <li className="mb-2">
              <button
                type="button"
                onClick={handleLogout}
                className="block w-full py-2 px-4 text-left text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>


        <div
          className={`relative inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out ${sidebarOpen ? 'opacity-30' : 'opacity-0'}`}
          onClick={toggleSidebar}
        ></div>
      </div> */}
    </>
  );
}

export default Navbar;
