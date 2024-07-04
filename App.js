// U78784426
import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';

const teamMembers = [
  {name: 'Johnny Bartow',
    role: 'CEO',
    photo: 'JohnnyB.jpg'},
  {name: 'Janet Curdy',
    role: 'CTO',
    photo: 'JanetC.jpg'},
 {name: 'Sandra Toppin',
    role: 'CTO',
    photo: 'SandraT.jpg'},
  // Add more team members here
];

// src/components/Header.js
function App() {
  return (
    <div className="App">
      <Header />
      <Gallery members={teamMembers} />
    </div>);}

export default App;

import React from 'react';

function Header() {
  return (
    <header>
      <h1> Meeting the Team </h1>
    </header>);
}

export default Header;

// src/components/Gallery.js
import React from 'react';
import Profile from './Profile';

function Gallery({ members }) {
  return (
    <div className="gallery">
      {members.map((member, index) => (
        <Profile key={index} name={member.name} role={member.role} photo={member.photo} />
      ))}
    </div>);
}

export default Gallery;

// src/components/Profile.js
import React from 'react';

function Profile({ name, role, photo }) {
  return (
    <div className="profile">
      <img src={photo} alt={`${name}'s photo`} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>);
}

export default Profile;