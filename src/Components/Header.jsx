import React, { useState } from 'react';
import Modal from 'react-modal';
import UserNotifications from './UserNotifications'; // Import the UserNotifications component
import SearchInput from './SearchInput'; // Import the SearchInput component


const Header = () => {
  const user = {
    userPic: './images/userPic.jpg',
    connect:true,
    userName: 'John Doe',
    userNameLink:'google.com',
    userDescription: 'Frontend Developer',
    hasNotifications: true,
    notificationCount: 3,
    onOptionsClick: () => {
      // Handle options click
    },
  };


  return (
    
    
    <header className="flex items-center justify-between bg-gray-500  ">
      

       {/* Right side of the header */}
       <div className="flex items-center">
        <SearchInput /> {/* Render SearchInput component */}
      </div>
      {/* Left side of the header */}
      <div className="flex items-center">
      <UserNotifications {...user} />{/* Render UserNotifications component */}
      </div>

     
    </header>
  );
};

export default Header;
