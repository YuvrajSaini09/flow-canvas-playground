
import React, { useState } from 'react';
import { X } from 'lucide-react';
import useStore from '../../store/useStore';
import { Button } from '@/components/ui/button';
import CircuitPattern from './CircuitPattern';
import { useToast } from '@/hooks/use-toast';

interface DetailsPanelProps {
  onClose: () => void;
}

const DetailsPanel: React.FC<DetailsPanelProps> = ({ onClose }) => {
  const { selectedNode, updateNodeData } = useStore();
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);

  if (!selectedNode) return null;

  // Safely access label data with type checking
  const nodeLabel = selectedNode.data && typeof selectedNode.data.label === 'string' 
    ? selectedNode.data.label 
    : 'Node Details';

  const isSalesforceNode = nodeLabel === 'Update Salesforce via API';

  const handleUpdateProcess = () => {
    setIsUpdating(true);
    
    // Simulate API call
    setTimeout(() => {
      if (selectedNode && selectedNode.id) {
        updateNodeData(selectedNode.id, {
          ...selectedNode.data,
          apiVersion: '45.0'
        });
      }
      
      setIsUpdating(false);
      
      toast({
        title: "Process Updated",
        description: "Salesforce API version updated to 45.0",
      });
    }, 800);
  };

  return (
    <div className="fixed right-20 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg w-96 p-5 z-10 overflow-hidden">
      {/* Circuit pattern background for salesforce panel */}
      {isSalesforceNode && (
        <div className="absolute inset-0 bg-indigo-100 opacity-30"></div>
      )}
      {isSalesforceNode && (
        <CircuitPattern className="right-0 bottom-0 w-40 h-40" />
      )}
      
      <div className="relative z-10">
        <div className="absolute right-3 top-0" onClick={onClose}>
          <X size={18} className="cursor-pointer text-gray-500 hover:text-gray-700" />
        </div>
        
        <h3 className="text-lg font-semibold mb-4">
          {nodeLabel}
        </h3>
        
        {isSalesforceNode ? (
          <>
            <p className="text-sm text-gray-600 mb-4">
              Next to the component's name, click Edit, then select the Version Settings tab in the Version field for Salesforce API, select version 45.0 or later.
            </p>
            
            <div className="mt-6">
              <Button 
                className="w-full bg-black text-white py-2 px-4 rounded font-medium text-sm hover:bg-gray-800"
                onClick={handleUpdateProcess}
                disabled={isUpdating}
              >
                {isUpdating ? 'Updating...' : 'Update process'}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="text-sm text-gray-600 space-y-2">
              <p>ID: {selectedNode.id}</p>
              <p>Type: {selectedNode.type}</p>
              <p>Position: x={Math.round(selectedNode.position.x)}, y={Math.round(selectedNode.position.y)}</p>
              
              {/* Show additional data properties */}
              {selectedNode.data && Object.keys(selectedNode.data).map(key => (
                key !== 'label' && selectedNode.data[key] && (
                  <p key={key}>{key}: {selectedNode.data[key].toString()}</p>
                )
              ))}
            </div>
            
            <div className="mt-6 flex gap-2">
              <Button variant="outline" className="flex-1" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                className="flex-1 bg-black text-white hover:bg-gray-800"
                onClick={() => {
                  toast({
                    title: "Changes Applied",
                    description: `Updated ${selectedNode.data.label}`
                  });
                  onClose();
                }}
              >
                Apply
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsPanel;
