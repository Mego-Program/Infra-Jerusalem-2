import React from 'react';

const UserNotifications = ({ userPic,connect, userName,userNameLink, userDescription, hasNotifications, notificationCount, onOptionsClick }) => {
  return (
    <div className="w-437 h-76 border-none rounded-lg p-4 flex items-center space-x-4 bg-slate-700">
      <div className="flex items-center">
        <img src={userPic} class="object-cover object-center w-full h-full" alt="User Pic" className="w-12 h-12 rounded-full" />
        {connect &&(<span className="w-4 h-4 bg-green-500 rounded-full absolute ml-9 mt-8">
            </span>)}
        <div className="ml-4">
            <a className="text-lg font-bold" href={userNameLink}>{userName}</a>
          <div className="text-sm">{userDescription}</div>
        </div>
      </div>
      {hasNotifications && (
        <div className="flex items-center rounded-full">
          <div className="mr-2 relative">
            <span className="w-4 h-4 bg-red-500 text-white rounded-full absolute -top-0.5 -right-0.5 text-center text-xs">
              {notificationCount}
            </span>
            <div className='w-45 h-45 rounded-3xl p-2 flex items-center  bg-blue-500 '>
            <svg
            svg width="22"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer"
              fill="none"
              viewBox="0 0 22 18"
              stroke="currentColor"
              
            >
              <path d="M8.5 3.22222C8.5 2.63285 8.76339 2.06762 9.23223 1.65087C9.70107 1.23413 10.337 1 11 1C11.663 1 12.2989 1.23413 12.7678 1.65087C13.2366 2.06762 13.5 2.63285 13.5 3.22222C14.9355 3.82559 16.1593 4.76481 17.0401 5.93922C17.9209 7.11364 18.4255 8.47897 18.5 9.88889V13.2222C18.5941 13.913 18.8693 14.5745 19.3035 15.1535C19.7377 15.7324 20.3188 16.2127 21 16.5556H1C1.68117 16.2127 2.26226 15.7324 2.69648 15.1535C3.13071 14.5745 3.40593 13.913 3.5 13.2222V9.88889C3.57445 8.47897 4.07913 7.11364 4.95994 5.93922C5.84075 4.76481 7.06449 3.82559 8.5 3.22222" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

            </svg>
            </div>
            
          </div>
        </div>
      )}
      <div className='w-45 h-45 rounded-3xl p-2 flex items-center  bg-blue-500 '>
      <svg width="19" height="5" viewBox="0 0 19 5" fill="none" className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" onClick={onOptionsClick}>
<circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
<circle cx="9.5" cy="2.5" r="2.5" fill="white"/>
<circle cx="16.5" cy="2.5" r="2.5" fill="white"/>
</svg>

      </div>
    </div>
  );
};

export default UserNotifications;
