import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './components/admin/pages/Login';
import Users from './components/admin/pages/Users';
import SignUp from './components/admin/pages/SignUp';
import AddUser from './components/admin/pages/AddUser';
import MainPage from './components/mainPage';

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
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/signUp"
            element={(
              <SignUp />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
