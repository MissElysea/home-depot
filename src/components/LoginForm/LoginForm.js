import React, { useState } from 'react';
import styles from './LoginForm.module.scss'; // Import the styles

import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the login service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError(
        'We\'re sorry, the password you entered is incorrect. Please try again or reset your password.'
      );
    }
  }

  return (
    <div>
      <div className={styles['login-form-container']}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className={styles['login-label']}>Email Address</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className={styles['login-input']}
          />
          <label className={styles['login-label']}>Enter Your Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            className={styles['login-input']}
          />
          <button type="submit" className={styles['login-button']}>Sign In</button>
        </form>
      </div>
      <p className={styles['login-error-message']}>&nbsp;{error}</p>
    </div>
  );
}

