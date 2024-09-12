import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

 
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.name.trim().length < 3) {
      newErrors.name =   'El nombre debe tener al menos 3 caracteres';
    }

    if (!emailRegex.test(form.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      setErrors({});
      
    } else {
      setErrors(validationErrors);
      setSuccess(false);
    }
  };

  return (
    <div>
    
      <div>
        {success && <p style={{ color: 'green' }}>Gracias. {form.name}, te contactaremos cuanto antes via email</p>}
        {!success && Object.keys(errors).length > 0 && (
          <div>
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label></label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div>
          <label></label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;

