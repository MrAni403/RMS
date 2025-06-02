import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ role }) {
  const adminLinks = [
    { to: '/admin', text: 'Dashboard' },
    { to: '/admin/projects-team', text: 'Projects & Team' },
    { to: '/admin/ip-assets', text: 'IP Assets' },
    { to: '/admin/contracts', text: 'Contracts' },
    { to: '/admin/research-funding', text: 'Research Funding' },
    { to: '/admin/patent-drafting', text: 'Patent Drafting' },
    { to: '/admin/reference-papers', text: 'Reference Papers' },
    { to: '/admin/knowledge-sharing', text: 'Knowledge Sharing' },
    { to: '/admin/tech-share', text: 'Tech Sharing' },
     { to: '/admin/awards', text: 'Awards & Certificates' }
  ];

  const researcherLinks = [
    { to: '/researcher', text: 'Dashboard' },
    { to: '/researcher/projects', text: 'My Projects' },
    { to: '/researcher/invention-disclosure', text: 'Invention Disclosure' }
  ];

  const links = role === 'admin' ? adminLinks : researcherLinks;

  return (
    <div className="sidebar">
      {links.map(link => (
        <NavLink 
          key={link.to}
          to={link.to}
          className={({ isActive }) => 
            isActive ? 'sidebar-link active' : 'sidebar-link'
          }
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}
