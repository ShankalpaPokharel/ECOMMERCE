
import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from "joi";
import axios from 'axios';

const schema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required'
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Invalid email',
    'any.required': 'Email is required'
  }),
  age: Joi.number().integer().positive().required().messages({
    'number.base': 'Age must be a number',
    'number.integer': 'Age must be an integer',
    'number.positive': 'Age must be a positive number',
    'any.required': 'Age is required'
  }),
  password: Joi.string().required().min(8).pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/).messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be at least 8 characters',
    'string.pattern.base': 'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character',
    'any.required': 'Password is required'
  })
});

const Myform = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('your-backend-url', data);
      console.log(response.data); // Assuming backend returns some data
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name")} placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input type="number" {...register("age")} placeholder="Age" />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <input type="email" {...register("email")} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input type="password" {...register("password")} placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
};

export default Myform;
