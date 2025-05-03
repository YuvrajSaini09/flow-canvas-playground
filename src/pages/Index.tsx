
import React, { useEffect } from 'react';
import FlowDashboard from '../components/FlowDashboard';
import useStore from '../store/useStore';
import { initialNodes, initialEdges } from '../data/initialElements';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Index = () => {
  const { onNodesChange, onEdgesChange, nodes, edges } = useStore();
  
  // Initialize the flow with sample data
  useEffect(() => {
    const initializeFlow = async () => {
      initialNodes.forEach(node => {
        onNodesChange([{ type: 'add', item: node }]);
      });
      
      initialEdges.forEach(edge => {
        onEdgesChange([{ type: 'add', item: edge }]);
      });
    };
    
    if (nodes.length === 0 && edges.length === 0) {
      initializeFlow();
    }
  }, [onNodesChange, onEdgesChange, nodes.length, edges.length]);

  return (
    <DndProvider backend={HTML5Backend}>
      <FlowDashboard />
    </DndProvider>
  );
};

export default Index;
