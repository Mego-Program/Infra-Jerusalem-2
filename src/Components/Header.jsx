import React, { useState } from 'react';
import Modal from 'react-modal';
import UserNotifications from './UserNotifications'; // Import the UserNotifications component
import SearchInput from './SearchInput'; // Import the SearchInput component

const customStyles = {
  content: {
    top: '0', // Position from the top
    right: '0', // Position from the right
    bottom: '0', // Position from the bottom
    left: 'auto', // Do not specify 'left' to ensure it's on the right
  },
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 ">

       {/* Right side of the header */}
       <div className="flex items-center">
        <SearchInput /> {/* Render SearchInput component */}
      </div>
      {/* Left side of the header */}
      <div className="flex items-center">
        <UserNotifications /> {/* Render UserNotifications component */}
      </div>

     
    </header>
  );
};

export default Header;
