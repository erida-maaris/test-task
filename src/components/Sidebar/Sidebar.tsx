import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`transition-width duration-300 ease-in-out ${isCollapsed ? 'w-14' : 'md:w-64'} h-full bg-gray-800 text-white flex flex-col justify-between md:flex hidden`}>
      <div className="flex-1">
        <div
          className={`${isCollapsed ? 'hidden' : 'flex'} items-center justify-center bg-blue-500 text-white py-2 px-4 m-4 rounded-lg`}
        >
          Weather
        </div>
      </div>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center mb-4"
      >
        {isCollapsed ? '>' : '<'}
      </button>
    </div>
  );
};

export default Sidebar;
