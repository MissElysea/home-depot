import React, { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div className={styles.container}>
        <div>
          <h3
            className={showLogin ? styles.signUpText : styles.logInText}
            onClick={() => setShowLogin(!showLogin)}
          >
            {showLogin ? 'Sign In' : 'Create an Account'}
          </h3>
        </div>
        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
      </div>
    </main>
  );
}

// need to implement guest login


