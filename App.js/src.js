// U78784426
import React from 'react';
import Gallery from './Gallery';

const teamMembers = [
  {name: 'Johnny Bartow', role: 'CEO', photo: 'JohnnyB.jpg'},
  {name: 'Janet Curdy', role: 'CTO', photo: 'JanetC.jpg'},
 {name: 'Sandra Toppin', role: 'CTO', photo: 'SandraT.jpg'},
  // Add more team members here
];

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery members={teamMembers} />
    </div>);}

export default App;

// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1> Meeting the Team </h1>
    </header>);};

export default Header;

// Gallery.js
import React from 'react';
import Profile from './Profile';

function Gallery({ members }) {
  return (
    <div className="Meet the Team!">
      {members.map((member, index) => (
        <Profile key={index} name={member.name} role={member.role} photo={member.photo} />
      ))}
    </div>);}

export default Gallery;

// Profile.js
import React from 'react';

const Profile = ({ member }) => {
  return (
    <div className='Profile'>
      <img src={member.photo} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>);};

export default Profile;