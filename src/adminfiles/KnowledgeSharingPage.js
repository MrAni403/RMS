import { useState } from 'react';
import './KnowledgeSharingPage.css';

export default function KnowledgeSharingPage() {
  const [topics, setTopics] = useState([]);
  const [form, setForm] = useState({
    topic: '',
    postedBy: '',
    comments: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentArray = form.comments.split('\n').map((c, i) => `User${i + 1}: ${c}`);
    setTopics([...topics, { ...form, comments: commentArray }]);
    setForm({ topic: '', postedBy: '', comments: '' });
  };

  const handleDelete = (index) => {
    const updated = [...topics];
    updated.splice(index, 1);
    setTopics(updated);
  };

  return (
    <div className="knowledge-container">
      <h2>📋 Knowledge Sharing Table Format (with Forums/Comments)</h2>

      <form className="knowledge-form" onSubmit={handleSubmit}>
        <input
          name="topic"
          value={form.topic}
          onChange={handleChange}
          placeholder="Project Name"
          required
        />
        <input
          name="postedBy"
          value={form.postedBy}
          onChange={handleChange}
          placeholder="Posted By"
          required
        />
        <textarea
          name="comments"
          value={form.comments}
          onChange={handleChange}
          placeholder="Enter comments (one per line)"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <table className="knowledge-table">
        <thead>
          <tr>
            <th>Topic Name</th>
            <th>Posted By</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((item, index) => (
            <tr key={index}>
              <td>{item.topic}</td>
              <td>{item.postedBy}</td>
              <td>
                {item.comments.map((comment, i) => (
                  <div key={i}>- {comment}</div>
                ))}
              </td>
              <td>
                View / Edit / <span onClick={() => handleDelete(index)}>Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
