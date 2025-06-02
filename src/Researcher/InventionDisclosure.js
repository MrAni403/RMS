import './InventionDisclosure.css';
import { useState } from 'react';

export default function InventionDisclosure() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    inventors: [''],
    files: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Disclosure submitted successfully!');
    // Reset form
    setForm({
      title: '',
      description: '',
      inventors: [''],
      files: null
    });
  };

  const addInventor = () => {
    setForm({...form, inventors: [...form.inventors, '']});
  };

  return (
    <div className="disclosure-form">
      <h1>Invention Disclosure</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title of Invention</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({...form, title: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Detailed Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
            rows="6"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Inventors</label>
          {form.inventors.map((inventor, index) => (
            <input
              key={index}
              type="text"
              value={inventor}
              onChange={(e) => {
                const newInventors = [...form.inventors];
                newInventors[index] = e.target.value;
                setForm({...form, inventors: newInventors});
              }}
              required
            />
          ))}
          <button type="button" onClick={addInventor} className="add-button">
            + Add Another Inventor
          </button>
        </div>
        
        <div className="form-group">
          <label>Supporting Documents</label>
          <input
            type="file"
            onChange={(e) => setForm({...form, files: e.target.files})}
            multiple
          />
        </div>
        
        <button type="submit" className="submit-button">Submit Disclosure</button>
      </form>
    </div>
  );
}