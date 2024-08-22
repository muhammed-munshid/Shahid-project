import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Users from './components/admin/pages/Users';
import AddUser from './components/admin/pages/AddUser';
import MainPage from './components/mainPage';
import Chat from './components/admin/pages/Chat';
import Login from './components/staffs/pages/Login';
import SignUp from './components/staffs/pages/SignUp';
import AdminLogin from './components/admin/pages/AdminLogin';
import AdminSignUp from './components/admin/pages/AdminSignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage />
            }
          />
          <Route
            path="/staff-login"
            element={
              <Login />
            }
          />
          <Route
            path="/staff-signUp"
            element={(
              <SignUp />
            )}
          />
          <Route
            path="/login"
            element={
              <AdminLogin />
            }
          />
          <Route
            path="/signUp"
            element={(
              <AdminSignUp />
            )}
          />
          <Route
            path="/add-user"
            element={
              <AddUser />
            }
          />
          <Route
            path="/users"
            element={
              <Users />
            }
          />
          <Route
            path="/chat"
            element={
              <Chat />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
