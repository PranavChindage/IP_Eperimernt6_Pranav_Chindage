// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Header from './Header';
import ProfileCard from './profilecard';
import Footer from './footer';
import './App.css';

const Home = () => (
  <div>
    <h2>Welcome to College Page</h2>
    <p>This is the home page of the college website.</p>
  </div>
);

const UserProfile = ({ match }) => (
  <div>
    <h2>User Profile</h2>
    <p>Welcome, {match.params.username}!</p>
  </div>
);

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Pranav', age: 20, major: 'Computer Science' },
    { id: 2, username: 'Soham', age: 22, major: 'Engineering' },
    // Add more users as needed
  ]);

  const handleButtonClick = (userId) => {
    // You could navigate to the user's profile page here
    console.log(`Viewing profile of user with ID ${userId}`);
  };

  return (
    <Router>
      <div>
        <Header />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile/Pranav">Pranav Profile</Link>
            </li>
            <li>
              <Link to="/profile/soham">Soham Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes path="/" exact component={Home} />
        <Routes
          path="/profile/:username"
          render={(props) => (
            <UserProfile {...props} />
          )}
        />

        <div className="user-list">
          {users.map((user) => (
            <ProfileCard
              key={user.id}
              {...user}
              onButtonClick={() => handleButtonClick(user.id)}
            />
          ))}
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
