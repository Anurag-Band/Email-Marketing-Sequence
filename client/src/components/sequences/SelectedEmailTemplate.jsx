import { MdMailOutline } from "react-icons/md";
import { Handle, Position } from "reactflow";

const SelectedEmailTemplate = () => {
  return (
    <div className="w-52 flex items-center gap-1 bg-white border border-slate-500 rounded-md p-2 text-slate-600">
      <div className="flex items-center justify-center p-3 border border-violet-500 bg-violet-200 rounded-md">
        <MdMailOutline className="text-2xl font-bold text-violet-600" />
      </div>
      <div>
        <p className="text-xs font-bold">Email</p>
        <p className="text-xs text-violet-600">
          <span className="text-slate-600">Template:</span> Sample Template
        </p>
      </div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default SelectedEmailTemplate;

