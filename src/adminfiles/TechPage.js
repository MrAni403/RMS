import { useState } from 'react';
import './TechTransferActivities.css';

export default function TechTransferActivities() {
  const [form, setForm] = useState({
    projectName: '',
    agency: '',
    date: '',
    status: '',
    referenceId: '',
    attachments: [],
    contact: '',
    nextSteps: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachments') {
      setForm({ ...form, attachments: Array.from(files) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', form);
    alert('Submission logged to console!');
  };

  return (
    <div className="tech-transfer-container">
      <h2>📤 Tech Transfer Activities <i>(Purpose: Send approved projects to government)</i></h2>

      <form className="tech-transfer-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Project Name</label>
          <select name="projectName" value={form.projectName} onChange={handleChange} required>
            <option value="">Select a project</option>
            <option value="AI Drug Discovery v2.1">AI Drug Discovery v2.1</option>
            <option value="Green BioSensors">Green BioSensors</option>
          </select>
          <button type="button">View Project Details</button>
        </div>

        <div className="form-row">
          <label>Government Agency</label>
          <select name="agency" value={form.agency} onChange={handleChange} required>
            <option value="">Select an agency</option>
            <option value="DST">DST</option>
            <option value="DBT">DBT</option>
            <option value="ICMR">ICMR</option>
          </select>
          <button type="button">Filter by Agency</button>
        </div>

        <div className="form-row">
          <label>Submission Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
          <button type="button">Set Reminder</button>
        </div>

        <div className="form-row">
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange} required>
            <option value="">Choose status</option>
            <option value="Draft">Draft</option>
            <option value="Submitted">Submitted</option>
            <option value="Approved">Approved</option>
          </select>
          <button type="button">Edit Submission</button>
        </div>

        <div className="form-row">
          <label>Reference ID</label>
          <input
            type="text"
            name="referenceId"
            value={form.referenceId}
            onChange={handleChange}
            placeholder='e.g. GOV-REF-2025-089'
            required
          />
          <button type="button">Track Status</button>
        </div>

        <div className="form-row">
          <label>Attachments</label>
          <input type="file" name="attachments" multiple onChange={handleChange} />
          <button type="button">Download / Preview</button>
        </div>

        <div className="form-row">
          <label>Contact Person</label>
          <select name="contact" value={form.contact} onChange={handleChange} required>
            <option value="">Select contact</option>
            <option value="Dr. Rajesh Kumar">Dr. Rajesh Kumar</option>
            <option value="Dr. Nisha Sharma">Dr. Nisha Sharma</option>
          </select>
          <button type="button">Send Notification</button>
        </div>

        <div className="form-row">
          <label>Next Steps</label>
          <textarea
            name="nextSteps"
            value={form.nextSteps}
            onChange={handleChange}
            placeholder="e.g. Awaiting approval from DBT"
            required
          ></textarea>
          <button type="button">Add Comment / Update</button>
        </div>

        <div className="submit-btn">
          <button type="submit">Submit Tech Transfer</button>
        </div>
      </form>
    </div>
  );
}
