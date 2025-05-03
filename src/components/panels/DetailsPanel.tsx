
import React from 'react';
import { X } from 'lucide-react';
import useStore from '../../store/useStore';

interface DetailsPanelProps {
  onClose: () => void;
}

const DetailsPanel: React.FC<DetailsPanelProps> = ({ onClose }) => {
  const { selectedNode } = useStore();

  if (!selectedNode) return null;

  return (
    <div className="details-panel">
      <div className="panel-close" onClick={onClose}>
        <X size={14} />
      </div>
      
      <h3 className="text-lg font-semibold mb-4">
        {selectedNode.data?.label || 'Node Details'}
      </h3>
      
      {selectedNode.data?.label === 'Update Salesforce via API' && (
        <>
          <p className="text-sm text-gray-600 mb-4">
            Next to the component's name, click Edit, then select the Version Settings tab in the Version field for Salesforce API, select version 45.0 or later.
          </p>
          
          <div className="mt-6">
            <button className="w-full bg-black text-white py-2 px-4 rounded font-medium text-sm">
              Update process
            </button>
          </div>
        </>
      )}
      
      {selectedNode.data?.label !== 'Update Salesforce via API' && (
        <div className="text-sm text-gray-600">
          <p>ID: {selectedNode.id}</p>
          <p>Type: {selectedNode.type}</p>
          <p>Position: x={Math.round(selectedNode.position.x)}, y={Math.round(selectedNode.position.y)}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsPanel;
