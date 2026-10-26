import Navbar from "./Navbar";

function Dashboard({ student, onLogout }) {

  return (
    <>
      <Navbar onLogout={onLogout} />

      <div className="dashboard">

        <h1>
          Welcome, {student.name}!
        </h1>

        <p className="welcome-text">
          Welcome to the University Student Portal.
        </p>

        <div className="dashboard-grid">

          <div className="info-card">
            <h3>Student ID</h3>
            <p>{student.rollNo}</p>
          </div>

          <div className="info-card">
            <h3>Department</h3>
            <p>{student.department}</p>
          </div>

          <div className="info-card">
            <h3>Academic Year</h3>
            <p>{student.year}</p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p>{student.email}</p>
          </div>

        </div>

        <div className="notice-card">

          <h2>Important Information</h2>

          <ul>
            <li>Semester examinations begin next month.</li>
            <li>Check the notice board regularly.</li>
            <li>Complete course registration before the deadline.</li>
          </ul>

        </div>

      </div>
    </>
  );
}

export default Dashboard;
