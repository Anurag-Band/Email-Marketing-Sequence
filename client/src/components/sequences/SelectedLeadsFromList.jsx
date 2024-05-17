import { HiOutlinePlusSmall } from "react-icons/hi2";
import { Handle, Position } from "reactflow";

const SelectedLeadsFromList = () => {
  return (
    <div className="w-52 flex items-center gap-1 bg-white border border-slate-500 rounded-md p-2 text-slate-600">
      <div className="flex items-center justify-center p-3 border border-pink-500 bg-pink-200 rounded-md">
        <HiOutlinePlusSmall className="text-2xl font-bold text-pink-600" />
      </div>
      <div>
        <p className="text-xs font-bold">Leads from</p>
        <p className="text-xs text-pink-600">Sample List - 01</p>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default SelectedLeadsFromList;

