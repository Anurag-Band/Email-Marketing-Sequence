import { Handle, Position } from "reactflow";

const SequenceStartPoint = () => {
  return (
    <div className="w-52 flex items-center justify-center border border-slate-500 rounded-md bg-white text-slate-600 p-2">
      <h2 className="text-md">Sequence Start Point</h2>
      <Handle type="target" position={Position.top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default SequenceStartPoint;
