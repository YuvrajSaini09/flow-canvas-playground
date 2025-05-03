
import React from 'react';
import { Home, BarChart, Settings, Search, Users, Inbox, FileText } from 'lucide-react';

const SideNav: React.FC = () => {
  return (
    <div className="bg-sidebar-bg w-16 h-screen flex flex-col items-center py-4">
      <div className="mb-8">
        <div className="w-8 h-8 bg-side-lime rounded-sm flex items-center justify-center">
          <span className="text-dark-blue text-lg font-bold">N</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="sidebar-menu-item">
          <Search size={20} color="#8A898C" />
        </div>
        <div className="sidebar-menu-item">
          <Home size={20} color="#8A898C" />
        </div>
        <div className="sidebar-menu-item active">
          <FileText size={20} color="#c1fc5c" />
        </div>
        <div className="sidebar-menu-item">
          <Users size={20} color="#8A898C" />
        </div>
        <div className="sidebar-menu-item">
          <Inbox size={20} color="#8A898C" />
        </div>
        <div className="sidebar-menu-item">
          <BarChart size={20} color="#8A898C" />
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="sidebar-menu-item">
          <Settings size={20} color="#8A898C" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
