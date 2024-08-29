import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-slate-300 border-gray-200 px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img height="auto" src="/event logo.png" className="h-6 mr-3 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MGL Farm</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleSidebar}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`md:flex ${isOpen ? 'block' : 'hidden'} bg-gray-200 md:bg-white w-full md:w-64 lg:static`}>
        <ul className="flex flex-col md:space-y-2 p-4">
          <li>
            <a href="/staffs" className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Staffs</a>
          </li>
          <li>
            <button
              type="button"
              onClick={handleLogout}
              className="block w-full py-2 px-4 text-left text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {children} {/* Render children */}
      </div>
    </div>
  );
}

export default Layout;
