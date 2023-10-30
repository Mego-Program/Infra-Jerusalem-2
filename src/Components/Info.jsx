import React from 'react';
import info from '../assets/info.svg'; // Import the SVG file

export default function Info() {
  return (
    <>
      <div></div>
      <div className="text-white flex space-x-7 pl-10 bg-custom-blue">
        <img src={info} alt="Info Icon"/>
        <a href='' className="text-white">Info</a> {/* Apply red text color to anchor text */}
      </div>
    </>
  );
}
