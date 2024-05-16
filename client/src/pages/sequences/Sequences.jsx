import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  useEdgesState,
  useNodesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import AddLeadSource from "../../components/sequences/AddLeadSource";
import SequenceStartPoint from "../../components/sequences/SequenceStartPoint";
import AddBlock from "../../components/sequences/AddBlock";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "addLeadSource",
    draggable: false,
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
    type: "sequenceStartPoint",
    draggable: false,
  },
  {
    id: "3",
    position: { x: 0, y: 170 },
    data: { label: "3" },
    type: "addBlock",
    draggable: false,
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

const nodeTypes = {
  "addLeadSource": AddLeadSource,
  "sequenceStartPoint": SequenceStartPoint,
  "addBlock": AddBlock,
};

export default function Sequences() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => {
      const edge = {
        ...connection,
        id: `${edges.length} + 1`,
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [edges]
  );

  return (
    <div className="w-full h-full bg-white p-10">
      <div className="flex flex-col items-start justify-center p-5 gap-2">
        <h2 className="text-xl font-semibold">
          Anurag&apos;s First Sequence 🚀
        </h2>
        <p>Click on a block to configure and add it in sequence.</p>
      </div>
      <div className="w-[90vw] h-[68vh] mx-auto bg-grey-100 border border-slate-500 rounded-lg">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
