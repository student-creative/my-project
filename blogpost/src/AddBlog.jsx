import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = ({ setPosts }) => {
  const [form, setForm] = useState({
    title: "", author: "", date: "", content: "", image: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts(prev => [...prev, { ...form, id: Date.now() }]);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="card shadow p-4">
      <h4 className="mb-3">Add New Blog</h4>

      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Blog Title"
          value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      </div>

      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Author"
          value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} required />
      </div>

      <div className="mb-3">
        <input type="date" className="form-control"
          value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      </div>

      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Image URL"
          value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required />
      </div>

      <div className="mb-3">
        <textarea className="form-control" placeholder="Blog Content" rows="5"
          value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />
      </div>

      <button type="submit" className="btn btn-success">Add Blog</button>
    </form>
  );
};

export default AddBlog;
