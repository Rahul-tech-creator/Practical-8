import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const student = {
    name: "Rahul Kumar",
    rollNo: "25CS101",
    department: "Computer Science and Engineering",
    year: "III Year",
    email: "rahul@university.edu",
    phone: "9876543210"
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>

      {/* Default Route */}
      <Route
        path="/"
        element={
          <Navigate
            to={isLoggedIn ? "/dashboard" : "/login"}
          />
        }
      />

      {/* Login */}
      <Route
        path="/login"
        element={
          isLoggedIn
            ? <Navigate to="/dashboard" />
            : <Login onLogin={handleLogin} />
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          isLoggedIn
            ? <Dashboard
                student={student}
                onLogout={handleLogout}
              />
            : <Navigate to="/login" />
        }
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={
          isLoggedIn
            ? <Profile
                student={student}
                onLogout={handleLogout}
              />
            : <Navigate to="/login" />
        }
      />

      {/* Invalid URL */}
      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}

export default App;
