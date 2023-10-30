import React from 'react';

const SearchInput = () => {
  return (
    <div>dashboard
    <div class="relative w-72 ml-60">
        
    <input
      class="w-full h-10 pl-10 pr-4 text-gray-700 placeholder-gray-400 border rounded-lg focus:outline-none "
      type="text"
      placeholder="Search..."
    />
    <div class="absolute top-0 left-0 flex items-center h-10 pl-3">
      <svg
        class="w-5 h-5 text-gray-400 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        
        <path
          class="heroicon-ui"
          d="M21.293 20.293l-5.852-5.852C16.033 13.482 17 11.782 17 10c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8c1.782 0 3.482-.967 4.441-2.441l5.852 5.852c.39.39 1.024.39 1.414 0 .39-.39.39-1.025 0-1.414zM2 10c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z"
        />
      </svg>
    </div>
    </div>
  </div>
  
  );
};

export default SearchInput;
