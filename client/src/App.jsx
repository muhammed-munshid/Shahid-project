import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainPage from './components/MainPage';
import Login from './components/staffs/pages/Login';
import SignUp from './components/staffs/pages/SignUp';
import AdminLogin from './components/admin/pages/AdminLogin';
import AdminSignUp from './components/admin/pages/AdminSignUp';
import Diary from './components/staffs/pages/Diary';
import AddDiary from './components/staffs/pages/AddDiary';
import AdminChat from './components/admin/pages/AdminChat';
import Chat from './components/staffs/pages/Chat';
import AddStaff from './components/admin/pages/AddStaff';
import Staffs from './components/admin/pages/Staffs';

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
            path="/add-diary"
            element={
              <AddDiary />
            }
          />
          <Route
            path="/diary"
            element={
              <Diary />
            }
          />
          <Route
            path="/staff-chat"
            element={
              <Chat />
            }
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
            path="/add-staff"
            element={
              <AddStaff />
            }
          />
          <Route
            path="/staffs"
            element={
              <Staffs />
            }
          />
          <Route
            path="/chat"
            element={
              <AdminChat />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
