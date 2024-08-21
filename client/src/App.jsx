import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './components/pages/Login';
import Users from './components/pages/Users';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route
            path="/"
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
