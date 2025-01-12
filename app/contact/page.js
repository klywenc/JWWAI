'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
}
