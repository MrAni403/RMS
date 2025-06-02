import { useState } from 'react';
import './ResearchFundingPage.css';

export default function ResearchFundingPage() {
  const [form, setForm] = useState({
    projectName: '',
    allocated: '',
    fundingAgency: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (e.g., send to backend)
    alert('Funding details submitted successfully!');
  };

  return (
    <div className="funding-container">
      <h2>
        3. Research Funding Allocation{' '}
        <span className="purpose">
          (Purpose: Allocate budget to projects)
        </span>
      </h2>

      <form className="funding-form" onSubmit={handleSubmit}>
        <table className="funding-table">
          <tbody>
            <tr>
              <td>Project Name</td>
              <td>
                <select
                  name="projectName"
                  value={form.projectName}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Project</option>
                  <option value="ai-drug">AI Drug Discovery</option>
                  <option value="nanotech">Nanotech Research</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Total Budget ($)</td>
              <td>
                <input type="text" value="$1,000,000" disabled />
              </td>
            </tr>
            <tr>
              <td>Allocated ($)</td>
              <td>
                <input
                  type="number"
                  name="allocated"
                  placeholder="Enter allocated amount"
                  value={form.allocated}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Utilization (%)</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Funding Agency</td>
              <td>
                <select
                  name="fundingAgency"
                  value={form.fundingAgency}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Agency</option>
                  <option value="nih">NIH</option>
                  <option value="nsf">NSF</option>
                  <option value="private">Private Grant</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Deadline</td>
              <td>
                <input type="date" value="2025-12-15" disabled />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Save Funding Details
          </button>
        </div>
      </form>
    </div>
  );
}
