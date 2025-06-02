import { useState } from 'react';
import './Projects.css';
export default function ProjectAndTeamPage() {
  const [step, setStep] = useState('createProject'); // or 'assignTeam'
  const [createdProject, setCreatedProject] = useState(null);

  // Project form state
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    startDate: '',
    deadline: '',
    status: 'Planning',
  });

  // Team form state
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberData, setMemberData] = useState({
    name: '',
    university: '',
    email: '',
    phone: '',
  });

  const generateProjectId = () => {
    const year = new Date().getFullYear();
    const randomId = Math.floor(100 + Math.random() * 900);
    return `PROJ-${year}-${randomId}`;
  };

  // When project is created
  const handleProjectSubmit = (e) => {
  e.preventDefault();
  const newProjectId = generateProjectId();
  const newProject = {
    ...projectData,
    projectId: newProjectId,
    createdAt: new Date().toISOString(),
  };

  // Save project to localStorage
  const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
  const updatedProjects = [...existingProjects, newProject];
  localStorage.setItem('projects', JSON.stringify(updatedProjects));

  setCreatedProject(newProject);
  setStep('assignTeam');
};


  // When a new team member is added
  const handleAddTeamMember = (e) => {
    e.preventDefault();
    setTeamMembers([...teamMembers, memberData]);
    // TODO: Call backend API to send email with credentials here

    setMemberData({ name: '', university: '', email: '', phone: '' });
  };

  return (
    <div>
      {step === 'createProject' && (
        <div className="project-form-container">
          <h2>Create New Project</h2>
          <form onSubmit={handleProjectSubmit}>
            <label>Project Name*</label>
            <input
              type="text"
              value={projectData.name}
              onChange={(e) =>
                setProjectData({ ...projectData, name: e.target.value })
              }
              required
              placeholder="Enter project name"
            />

            <label>Description</label>
            <textarea
              rows={3}
              value={projectData.description}
              onChange={(e) =>
                setProjectData({ ...projectData, description: e.target.value })
              }
              placeholder="Describe the project goals"
            />

            <label>Start Date*</label>
            <input
              type="date"
              value={projectData.startDate}
              onChange={(e) =>
                setProjectData({ ...projectData, startDate: e.target.value })
              }
              required
            />

            <label>Deadline*</label>
            <input
              type="date"
              value={projectData.deadline}
              min={projectData.startDate}
              onChange={(e) =>
                setProjectData({ ...projectData, deadline: e.target.value })
              }
              required
            />

            <label>Status</label>
            <select
              value={projectData.status}
              onChange={(e) =>
                setProjectData({ ...projectData, status: e.target.value })
              }
            >
              <option value="Planning">Planning</option>
              <option value="Active">Active</option>
              <option value="On Hold">On Hold</option>
            </select>

            <button type="submit">Create Project</button>
          </form>
        </div>
      )}

      {step === 'assignTeam' && createdProject && (
        <div className="team-assignment-container">
          <h2>
            Assign Team for Project: {createdProject.name} (ID:{' '}
            {createdProject.projectId})
          </h2>

          <form onSubmit={handleAddTeamMember}>
            <input
              type="text"
              placeholder="Name"
              value={memberData.name}
              onChange={(e) =>
                setMemberData({ ...memberData, name: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="University"
              value={memberData.university}
              onChange={(e) =>
                setMemberData({ ...memberData, university: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={memberData.email}
              onChange={(e) =>
                setMemberData({ ...memberData, email: e.target.value })
              }
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={memberData.phone}
              onChange={(e) =>
                setMemberData({ ...memberData, phone: e.target.value })
              }
              required
            />
            <button type="submit">Add Team Member</button>
          </form>

          <h3>Team Members:</h3>
          <ul>
            {teamMembers.map((member, idx) => (
              <li key={idx}>
                {member.name} — {member.university} — {member.email} —{' '}
                {member.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
