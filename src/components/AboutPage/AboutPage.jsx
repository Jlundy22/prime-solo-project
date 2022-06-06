import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
         <h1>About</h1>
        <h4>Drop Zone was built with</h4>
        <ul>
          <li>React</li>
          <li>React Redux</li>
          <li>React Sagas</li>
          <li>PostgreSQL</li>
          <li>Material UI</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
        <h4>What's next?</h4>
        <ul>
          <li>The ability to hold an auction for your disc.</li>
          <li>Messaging directly on the app.</li>
        </ul>
        <h4>Special thanks to</h4>
        <ul>
          <li>Prime Digital Academy</li>
          <li>Matt Black</li>
          <li>Dahl Cohort</li>
          <li>My Friends and Family</li>
        </ul>
        
      </div>
    </div>
  );
}

export default AboutPage;
