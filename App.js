import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <Authenticator>
          {({ signOut, user }) => (
            <div className="auth-container">
              <header className="App-header">
                <h1>Welcome, {user.username}</h1>
              </header>
              <main>
                <p>You are logged in!</p>
                <button onClick={signOut} className="sign-out-button">
                  Log Out
                </button>
              </main>
            </div>
          )}
        </Authenticator>
      </div>
    </div>
  );
}

export default App;
