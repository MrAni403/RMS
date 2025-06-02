import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import Sidebar from './Sidebar';

export default function AdminDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAtRoot = location.pathname === '/admin';

  const features = [
    { id: 1, title: 'Projects & Team', code: 'P&T', path: '/admin/projects' },
    { id: 2, title: 'IP Assets', code: 'IPA', path: '/admin/ip-management' },
    { id: 3, title: 'Contracts', code: 'CM', path: '/admin/contracts' },
    { id: 4, title: 'Research Funding', code: 'RF', path: '/admin/research-funding' },
    { id: 5, title: 'Patent Drafting', code: 'PD', path: '/admin/patent-drafting' },
    { id: 6, title: 'Reference Papers', code: 'RP', path: '/admin/reference-papers' },
    { id: 7, title: 'Knowledge Sharing', code: 'KS', path: '/admin/knowledge-sharing' },
    { id: 8, title: 'Tech Sharing', code: 'TS', path: '/admin/tech-share' },
    { id: 9, title: 'Awards&Certificates', code: 'AW', path: '/admin/awards' }
  ];

  return (
    <div className="admin-dashboard">
      <Sidebar role="admin" />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <button className="logout-button">Logout</button>
        </div>

        {isAtRoot && (
          <div className="feature-grid">
            {features.map(feature => (
              <div
                key={feature.id}
                className="feature-card admin-feature"
                onClick={() => navigate(feature.path)}
              >
                <div className="feature-code">{feature.code}</div>
                <h3>{feature.title}</h3>
                <button className="access-button">Access Feature</button>
              </div>
            ))}
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
}
