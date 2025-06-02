import './ContractsPage.css';

export default function ContractsPage() {
  return (
    <div className="contracts-container">
      <h2>
        2. Contracts Management{" "}
        <span className="purpose">
          (Purpose: Handle legal and funding documents)
        </span>
      </h2>

      <form className="contracts-form">
        <table className="contracts-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Input</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contract Name</td>
              <td>Text Input</td>
              <td>
                <input type="text" placeholder="Enter contract name" />
              </td>
              <td>
                <button type="button">View PDF</button> /{" "}
                <button type="button">Share</button>
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>Dropdown</td>
              <td>
                <select>
                  <option value="">Select Type</option>
                  <option value="NDA">NDA</option>
                  <option value="Funding">Funding</option>
                  <option value="Collaboration">Collaboration</option>
                </select>
              </td>
              <td>
                <button type="button">Filter by Type</button>
              </td>
            </tr>
            <tr>
              <td>Signing Party</td>
              <td>Text Input</td>
              <td>
                <input type="text" placeholder="Enter signing party" />
              </td>
              <td>
                <button type="button">Edit Details</button>
              </td>
            </tr>
            <tr>
              <td>Start/End Date</td>
              <td>Date Range</td>
              <td>
                <input type="date" /> to <input type="date" />
              </td>
              <td>
                <button type="button">Extend Contract</button>
              </td>
            </tr>
            <tr>
              <td>Funding Amount (if applicable)</td>
              <td>Number Input</td>
              <td>
                <input type="number" placeholder="$" />
              </td>
              <td>
                <button type="button">Generate Invoice</button>
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>Status Tag</td>
              <td>
                <select>
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Expired">Expired</option>
                  <option value="Under Review">Under Review</option>
                </select>
              </td>
              <td>
                <button type="button">Set Reminder</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
