import { MdOutlineWatchLater } from "react-icons/md";
import { Handle, Position } from "reactflow";

const SelectedWait = () => {
  return (
    <div className="w-52 flex items-center gap-1 bg-white border border-slate-500 rounded-md p-2 text-slate-600">
      <div className="flex items-center justify-center p-3 border border-blue-500 bg-blue-200 rounded-md">
        <MdOutlineWatchLater className="text-2xl font-bold text-blue-600" />
      </div>
      <div>
        <p className="text-xs font-bold">Delay</p>
        <p className="text-xs text-blue-600">
          <span className="text-slate-600">Wait:</span> 7 Days(s)
        </p>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default SelectedWait;

