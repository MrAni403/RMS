import { useState } from 'react';
import './Awards.css';

export default function AwardsCertificates() {
  const [awardData, setAwardData] = useState({
    projectName: '',
    researcher: '',
    awardType: '',
    awardTitle: '',
    date: '',
    description: '',
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'certificate') {
      setAwardData({ ...awardData, certificate: files[0] });
    } else {
      setAwardData({ ...awardData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Award Data:', awardData);
    alert('Award submitted (check console for data)');
  };

  return (
    <div className="award-container">
      <h2>🏆 Awards & Certificates for Best Projects</h2>

      <form className="award-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Project Name</label>
          <select name="projectName" onChange={handleChange} required>
            <option value="">Select Project</option>
            <option value="AI Drug Discovery v2.1">AI Drug Discovery v2.1</option>
            <option value="Nano Robotics Surgery">Nano Robotics Surgery</option>
            <option value="Green BioSensors">Green BioSensors</option>
          </select>
        </div>

        <div className="form-row">
          <label>Researcher Name</label>
          <select name="researcher" onChange={handleChange} required>
            <option value="">Select Researcher</option>
            <option value="Dr. Meera Singh">Dr. Meera Singh</option>
            <option value="Dr. Rajesh Kumar">Dr. Rajesh Kumar</option>
          </select>
        </div>

        <div className="form-row">
          <label>Award Type</label>
          <select name="awardType" onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Certificate">Certificate</option>
            <option value="Trophy">Trophy</option>
            <option value="Medal">Medal</option>
            <option value="Grant">Research Grant</option>
          </select>
        </div>

        <div className="form-row">
          <label>Award Title</label>
          <input
            type="text"
            name="awardTitle"
            placeholder="e.g. Best Innovation 2025"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Date Awarded</label>
          <input type="date" name="date" onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="e.g. For exceptional contribution to drug discovery."
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-row">
          <label>Upload Certificate</label>
          <input type="file" name="certificate" onChange={handleChange} />
        </div>

        <div className="submit-btn">
          <button type="submit">Submit Award</button>
        </div>
      </form>
    </div>
  );
}
