import { useState } from 'react';
import './PatentDraftingPage.css';

export default function PatentDraftingPage() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    title: '',
    type: '',
    drafter: '',
    status: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, form]);
    setForm({ title: '', type: '', drafter: '', status: '' });
  };

  const handleDelete = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  return (
    <div className="patent-container">
      <h2>Patent Drafting</h2>
      <p>Submit and review patent drafts and documentation.</p>

      <form className="patent-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Disclosure Title"
            required
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">Application Type</option>
            <option value="PCT">PCT</option>
            <option value="Provisional">Provisional</option>
            <option value="Non-Provisional">Non-Provisional</option>
          </select>
          <input
            name="drafter"
            value={form.drafter}
            onChange={handleChange}
            placeholder="Assigned Drafter"
            required
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            required
          >
            <option value="">Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>

      <h3>💡 Example Entry:</h3>
      <table className="patent-table">
        <thead>
          <tr>
            <th>Disclosure Title</th>
            <th>Application Type</th>
            <th>Assigned Drafter</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.title}</td>
              <td>{entry.type}</td>
              <td>{entry.drafter}</td>
              <td>{entry.status}</td>
              <td>
                [Edit] <span onClick={() => handleDelete(index)}>[Delete]</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
