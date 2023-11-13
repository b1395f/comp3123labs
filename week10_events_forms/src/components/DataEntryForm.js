import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Address 2:</label>
          <input
            type="text"
            className="form-control"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label>City:</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Province:</label>
            <select
              className="form-control"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a province</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label>Postal Code:</label>
            <input
              type="text"
              className="form-control"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {submitted && (
        <div className="mt-4">
          <h2>Entered Information:</h2>
          <p>Email: {formData.email}</p>
          <p>Name: {formData.name}</p>
          <p>Address: {formData.address}</p>
          <p>Address 2: {formData.address2}</p>
          <p>City: {formData.city}</p>
          <p>Province: {formData.province}</p>
          <p>Postal Code: {formData.postalCode}</p>
        </div>
      )}
    </div>
  );
};

export default MyForm;