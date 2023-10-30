import React from 'react';

const LayoutComponent = () => {
  return (
    <div className="flex">
      <div className="w-1/7 h-screen bg-blue-900"> {/* 15% of the page with dark blue */}
        {/* Your content for the left side */}
      </div>
      <div className="w-6/7 h-screen bg-blue-300"> {/* 85% of the page with lighter blue */}
        {/* Your content for the right side */}
      </div>
    </div>
  );
};

export default LayoutComponent;
