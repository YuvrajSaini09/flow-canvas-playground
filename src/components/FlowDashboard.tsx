
import React from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import SideNav from './layout/SideNav';
import LeftSidebar from './layout/LeftSidebar';
import FlowCanvas from './flow/FlowCanvas';
import Header from './layout/Header';

const FlowDashboard: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SideNav />
      
      <div className="flex flex-col flex-grow">
        <Header />
        
        <div className="flex flex-grow overflow-hidden">
          <LeftSidebar />
          
          <div className="flex-grow">
            <ReactFlowProvider>
              <FlowCanvas />
            </ReactFlowProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDashboard;
