
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
  branchId?: string;
  apiVersion?: string;
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
  updateNodeData: (nodeId: string, newData: any) => void;
  deleteNode: (nodeId: string) => void;
  deleteEdge: (edgeId: string) => void;
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
          animated: true,
          style: { strokeWidth: 2 },
          markerEnd: { type: 'arrow' },
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
  
  updateNodeData: (nodeId: string, newData: any) => {
    set({
      nodes: get().nodes.map(node => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              ...newData,
            },
          };
        }
        return node;
      }),
      selectedNode: get().selectedNode?.id === nodeId
        ? {
            ...get().selectedNode!,
            data: {
              ...get().selectedNode!.data,
              ...newData,
            },
          }
        : get().selectedNode,
    });
  },
  
  deleteNode: (nodeId: string) => {
    set({
      nodes: get().nodes.filter(node => node.id !== nodeId),
      // Also delete any connected edges
      edges: get().edges.filter(
        edge => edge.source !== nodeId && edge.target !== nodeId
      ),
    });
  },
  
  deleteEdge: (edgeId: string) => {
    set({
      edges: get().edges.filter(edge => edge.id !== edgeId),
    });
  },
}));

export default useStore;
