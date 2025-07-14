import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UserForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', dob: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const url="http://localhost:8888"
  const url="https://server-node-express-backend.onrender.com"
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.dob) {
      setError('All fields are required.');
      return;
    }
    try {
      setLoading(true)
      await axios.post(`${url}/api/user`, form);
      setLoading(false)
      navigate('/display');
    } catch (err) {
      setLoading(false)
      setError('Failed to save user.');
    }
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">User Form</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" name="firstName" className="form-control" value={form.firstName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" name="lastName" className="form-control" value={form.lastName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" name="dob" className="form-control" value={form.dob} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}