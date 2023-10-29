import React from 'react';

const UserNotifications = () => {
  return (
    <div className="flex items-center text-white">
      {/* User image, name, and description */}
      <div className="flex items-center mr-4">
        <img
          src="/path-to-your-user-image.jpg"
          alt="User Image"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-2">
          <p>User Name</p>
          <p>User Description</p>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-blue-500 text-white rounded p-2 mr-4">
        {/* Notifications content */}
      </div>
    </div>
  );
};

export default UserNotifications;
