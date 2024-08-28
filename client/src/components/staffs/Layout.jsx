import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleLayout = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('staff-token');
    navigate('/staff-login')
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-300 dark:bg-gray-900 transform
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out lg:static lg:transform-none h-screen`}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between p-4 lg:hidden">
              {/* Only show toggle button on smaller screens */}
              <a href="/" className="flex items-center">
                <img src="/event logo.png" className="h-8" alt="Logo" />
                <span className="ml-3 text-2xl font-semibold text-black dark:text-white">Layout</span>
              </a>
              <button className="text-gray-500 focus:outline-none" onClick={toggleLayout}>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <ul className="space-y-2 p-4">
              <li>
                <a href="/diary" className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Day Diary</a>
              </li>
              <li>
                <a href="/staff-chat" className="block py-2 px-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Chat</a>
              </li>
              <li>
                <button type='button' onClick={handleLogout} className="block w-full py-2 px-4 text-left text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Logout</button>
              </li>
              {/* Add more links here */}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-4 transition-all duration-300 ease-in-out lg:ml-24 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <button className="lg:hidden bg-indigo-500 text-white p-2 rounded focus:outline-none" onClick={toggleLayout}>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        {children} {/* Render children */}
      </div>
    </div>
  );
}

export default Layout;
