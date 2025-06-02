import { useState } from 'react';
import './ReferencePapersPage.css';

export default function ReferencePapersPage() {
  const [projects, setProjects] = useState(() => {
  const storedProjects = localStorage.getItem('projects');
  return storedProjects ? JSON.parse(storedProjects) : [];
});
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  function openUploadModal(project) {
    setSelectedProject(project);
    setShowUpload(true);
    setSelectedFile(null);
  }

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleUpload() {
    if (!selectedFile) {
      alert('Please select a PDF file.');
      return;
    }
    alert(`Uploading ${selectedFile.name} for project ${selectedProject.name}`);
    setShowUpload(false);
  }

  return (
    <div className="refpapers-container">
      <h2>Reference Papers</h2>
      <p>Access and manage academic and research references.</p>

      <table className="refpapers-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Project Name</th>
            <th>Add Reference Paper</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, idx) => (
            <tr key={project.id}>
              <td>{idx + 1}</td>
              <td>{project.name}</td>
              <td>
                <button 
                  className="upload-btn"
                  onClick={() => openUploadModal(project)}
                >
                  Add PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpload && (
        <div className="upload-modal-overlay">
          <div className="upload-modal">
            <h3>Add Reference Paper</h3>
            <p>Project: <strong>{selectedProject.name}</strong></p>

            <input 
              type="file" 
              accept="application/pdf" 
              onChange={handleFileChange} 
              className="file-input"
            />

            <div className="modal-buttons">
              <button className="btn cancel-btn" onClick={() => setShowUpload(false)}>Cancel</button>
              <button 
                className="btn upload-btn" 
                onClick={handleUpload} 
                disabled={!selectedFile}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
