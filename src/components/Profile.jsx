import Navbar from "./Navbar";

function Profile({ student, onLogout }) {

  return (
    <>
      <Navbar onLogout={onLogout} />

      <div className="profile-container">

        <div className="profile-card">

          <h1>Student Profile</h1>

          <div className="profile-row">
            <strong>Name</strong>
            <span>{student.name}</span>
          </div>

          <div className="profile-row">
            <strong>Roll Number</strong>
            <span>{student.rollNo}</span>
          </div>

          <div className="profile-row">
            <strong>Department</strong>
            <span>{student.department}</span>
          </div>

          <div className="profile-row">
            <strong>Academic Year</strong>
            <span>{student.year}</span>
          </div>

          <div className="profile-row">
            <strong>Email</strong>
            <span>{student.email}</span>
          </div>

          <div className="profile-row">
            <strong>Phone</strong>
            <span>{student.phone}</span>
          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;
