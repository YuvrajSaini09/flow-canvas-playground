
// Define the data type for each node type
export interface NodeData {
  label?: string;
  subtitle?: string;
  branchId?: string;
  bgClass?: string;
  iconName?: string;
  color?: string;
  type?: string;
}

// Export specific data types for each node type (for clarity)
export type DiamondNodeData = Pick<NodeData, 'label' | 'subtitle' | 'branchId'>;
export type ProcessNodeData = NodeData;
export type StartNodeData = Pick<NodeData, 'label'>;
export type EndNodeData = Pick<NodeData, 'label'>;
