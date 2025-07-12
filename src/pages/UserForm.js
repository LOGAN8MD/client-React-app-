import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UserForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', dob: '' });
  const [error, setError] = useState('');

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
      await axios.post('http://localhost:8888/api/user', form);
      navigate('/display');
    } catch (err) {
      setError('Failed to save user.');
    }
  };

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