
import { Link } from 'react-router-dom';

export default function FeatureCard({ icon, title, path }) {
  return (
    <Link to={path} className="feature-card">
      <span className="feature-card-icon">{icon}</span>
      <span className="feature-card-title">{title}</span>
    </Link>
  );
}
