// src/ProfileCard.js
import React from 'react';

const ProfileCard = ({ username, age, major, onButtonClick }) => (
  <div className="profile-card">
    <h2>{username}</h2>
    <p>Age: {age}</p>
    <p>Major: {major}</p>
    <button onClick={onButtonClick}>View Profile</button>
  </div>
);

export default ProfileCard;
