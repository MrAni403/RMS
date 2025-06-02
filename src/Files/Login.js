import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [role, setRole] = useState('Researcher'); // Default to Researcher
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally validate credentials here

    if (role === 'Admin') {
      navigate('/admin');
    } else {
      navigate('/researcher');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">RESEARCH PORTAL LOGIN</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <select className="role-select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Researcher">Researcher</option>
            <option value="Admin">Admin</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}
