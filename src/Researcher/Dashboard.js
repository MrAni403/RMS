import './ResearcherDashboard.css';
import FeatureCard from './FeatureCard';
import { Outlet } from 'react-router-dom';

export default function ResearcherDashboard() {
  const researcherFeatures = [
    { id: 1, title: 'My Projects', icon: '📋', path: '/researcher/projects' },
    { id: 2, title: 'IP Trainings', icon: '🎓', path: '/researcher/ip-trainings' },
    { id: 3, title: 'Invention Disclosure', icon: '💡', path: '/researcher/invention-disclosure' },
    { id: 4, title: 'Facilities Booking', icon: '🏢', path: '/researcher/facilities' }
  ];

  return (
    <div className="researcher-dashboard">
      <h1>Researcher Dashboard</h1>
      <div className="welcome-message">
        <p>Welcome back! Here's what you can work on today:</p>
      </div>
      <div className="features-grid">
        {researcherFeatures.map(feature => (
          <FeatureCard 
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            path={feature.path}
          />
        ))}
      </div>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}
