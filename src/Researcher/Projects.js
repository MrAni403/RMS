import './ResearcherProjects.css';

export default function ResearcherProjects() {
  const projects = [
    { id: 1, name: 'Nanotech Research', progress: 65, nextMilestone: 'Phase 3 Testing' },
    { id: 2, name: 'AI Drug Discovery', progress: 30, nextMilestone: 'Data Collection' }
  ];

  return (
    <div className="researcher-projects">
      <h1>My Projects</h1>
      
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
              <span>{project.progress}% Complete</span>
            </div>
            <div className="milestone-info">
              <strong>Next Milestone:</strong> {project.nextMilestone}
            </div>
            <button className="project-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}