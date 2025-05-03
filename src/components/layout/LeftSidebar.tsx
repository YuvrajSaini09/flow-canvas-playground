
import React from 'react';
import { Search } from 'lucide-react';
import SidebarTabs from '../sidebar/SidebarTabs';
import NodesCatalog from '../sidebar/NodesCatalog';

const LeftSidebar: React.FC = () => {
  const tabs = [
    {
      id: 'core',
      label: 'CORE',
      content: <NodesCatalog />
    },
    {
      id: 'helpers',
      label: 'HELPERS',
      content: <div className="p-4 text-sm text-gray-500">Helper components will appear here</div>
    },
    {
      id: 'triggers',
      label: 'TRIGGERS',
      content: <div className="p-4 text-sm text-gray-500">Trigger components will appear here</div>
    },
    {
      id: 'api',
      label: 'API',
      content: <div className="p-4 text-sm text-gray-500">API components will appear here</div>
    }
  ];

  return (
    <div className="bg-white border-r border-gray-200 w-64 h-full overflow-hidden flex flex-col">
      <div className="p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search elements..."
            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Search size={16} className="absolute left-2.5 top-2.5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex-grow overflow-auto">
        <SidebarTabs tabs={tabs} />
      </div>
    </div>
  );
};

export default LeftSidebar;
