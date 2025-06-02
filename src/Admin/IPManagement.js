import { useState } from 'react';
import './AdminIPManagement.css';

export default function AdminIPManagement() {
  // Example projects - in real app, fetch from backend
  const [projects] = useState([
    { id: 'PROJ-2025-123', name: 'Nanotech Research' },
    { id: 'PROJ-2025-456', name: 'AI Drug Discovery' }
  ]);

  const [ipAssets, setIpAssets] = useState([]);
  const [newIP, setNewIP] = useState({
    name: '',
    type: '',
    status: 'Pending',
    projectId: '',
    filingDate: '',
    description: ''
  });

  const handleChange = (e) => {
    setNewIP({ ...newIP, [e.target.name]: e.target.value });
  };

  const handleAddIP = () => {
    if (!newIP.name || !newIP.projectId) {
      alert('IP Name and Project must be selected.');
      return;
    }

    const project = projects.find(p => p.id === newIP.projectId);
    const newAsset = {
      ...newIP,
      id: ipAssets.length + 1,
      projectName: project.name
    };

    setIpAssets([...ipAssets, newAsset]);
    setNewIP({
      name: '',
      type: '',
      status: 'Pending',
      projectId: '',
      filingDate: '',
      description: ''
    });
  };

  return (
    <div className="ip-management">
      <h1>IP Assets Management</h1>

      <div className="ip-form">
        <h3>Add New IP Asset</h3>
        <input
          type="text"
          name="name"
          placeholder="IP Name"
          value={newIP.name}
          onChange={handleChange}
          required
        />
        <select name="type" value={newIP.type} onChange={handleChange} required>
          <option value="">Select IP Type</option>
          <option value="Patent">Patent</option>
          <option value="Trademark">Trademark</option>
          <option value="Copyright">Copyright</option>
        </select>
        <select name="status" value={newIP.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
        </select>
        <select name="projectId" value={newIP.projectId} onChange={handleChange} required>
          <option value="">Select Project</option>
          {projects.map(p => (
            <option key={p.id} value={p.id}>{p.name} ({p.id})</option>
          ))}
        </select>
        <input
          type="date"
          name="filingDate"
          value={newIP.filingDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Short Description"
          rows="3"
          value={newIP.description}
          onChange={handleChange}
        ></textarea>

        <button className="add-button" onClick={handleAddIP}>+ Add IP</button>
      </div>

      <table className="ip-table">
        <thead>
          <tr>
            <th>IP Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Project</th>
            <th>Filing Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {ipAssets.map(asset => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.type}</td>
              <td>
                <span className={`status-badge ${asset.status.toLowerCase()}`}>
                  {asset.status}
                </span>
              </td>
              <td>{asset.projectName}</td>
              <td>{asset.filingDate}</td>
              <td>{asset.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
