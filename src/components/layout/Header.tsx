
import React from 'react';
import { Bell, Settings, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 h-14 px-4 flex items-center w-full">
      <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md bg-white mx-3">
        <div className="text-xs font-semibold flex items-center gap-2 text-gray-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          AG Process Model
        </div>
        <ChevronDown size={16} className="text-gray-500" />
      </div>
      
      <div className="flex-grow"></div>
      
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="user-avatar bg-blue-100">
            <img src="https://i.pravatar.cc/300?img=3" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-medium">Aron Hoffman</div>
            <div className="text-xs text-gray-500">hoffmann23@gmail.com</div>
          </div>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
        
        <Bell size={20} className="text-gray-600 cursor-pointer" />
        <Settings size={20} className="text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
