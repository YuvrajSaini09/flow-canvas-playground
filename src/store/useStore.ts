
import { create } from 'zustand';
import { 
  Edge, 
  EdgeChange, 
  Node, 
  NodeChange, 
  OnNodesChange, 
  OnEdgesChange, 
  applyNodeChanges, 
  applyEdgeChanges, 
  addEdge,
  Connection
} from '@xyflow/react';

export type NodeData = {
  label: string;
  icon?: React.ReactNode;
  iconBgClass?: string;
  subtitle?: string;
  type?: string;
  color?: string;
  bgClass?: string;
};

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;
  showDetailsPanel: boolean;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: (connection: Connection) => void;
  addNode: (node: Node) => void;
  selectNode: (node: Node | null) => void;
  setShowDetailsPanel: (show: boolean) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNode: null,
  showDetailsPanel: false,
  
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          animated: false,
          style: { strokeWidth: 2 },
        }, 
        get().edges
      ),
    });
  },
  
  addNode: (node: Node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },
  
  selectNode: (node: Node | null) => {
    set({
      selectedNode: node,
    });
  },
  
  setShowDetailsPanel: (show: boolean) => {
    set({
      showDetailsPanel: show,
    });
  },
}));

export default useStore;
