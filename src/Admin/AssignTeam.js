import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AssignTeam.css';

export default function AssignTeam() {
  const location = useLocation();
  const { project } = location.state || {}; // project passed from form

  const [teamMembers, setTeamMembers] = useState([]);
  const [memberData, setMemberData] = useState({
    name: '',
    university: '',
    email: '',
    phone: ''
  });

  if (!project) {
    return <p>No project data found. Please create a project first.</p>;
  }

  function handleInputChange(e) {
    setMemberData({ ...memberData, [e.target.name]: e.target.value });
  }

  function generateCredentials() {
    const username = memberData.email.split('@')[0];
    const password = Math.random().toString(36).slice(-8);
    return { username, password };
  }

  function sendEmail({ name, email, username, password }) {
    // Simulate sending email, replace with real API/email service
    alert(`Email sent to ${name} (${email}):
Username: ${username}
Password: ${password}`);
  }

  function handleAddMember(e) {
    e.preventDefault();

    if (!memberData.name || !memberData.email) {
      alert('Name and Email are required!');
      return;
    }

    const { username, password } = generateCredentials();

    // Add member to team
    setTeamMembers([...teamMembers, { ...memberData, username, password }]);

    // Send email with credentials
    sendEmail({ ...memberData, username, password });

    // Reset form
    setMemberData({ name: '', university: '', email: '', phone: '' });
  }

  return (
    <div className="assign-team-container">
      <h2>Assign Team Members to Project: {project.name}</h2>

      <form onSubmit={handleAddMember} className="team-member-form">
        <input
          type="text"
          name="name"
          placeholder="Member Name"
          value={memberData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="university"
          placeholder="University"
          value={memberData.university}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={memberData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={memberData.phone}
          onChange={handleInputChange}
        />
        <button type="submit" className="add-member-btn">Add Team Member</button>
      </form>

      <h3>Team Members</h3>
      {teamMembers.length === 0 ? (
        <p>No team members added yet.</p>
      ) : (
        <table className="team-members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>University</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, i) => (
              <tr key={i}>
                <td>{member.name}</td>
                <td>{member.university}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
