import { useState } from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import AddLeadSourceModal from "./modals/AddLeadSourceModal";
import LeadsfromListModal from "./modals/LeadsfromListModal";
import { Handle, Position } from "reactflow";

const AddLeadSource = () => {
  const [isAddLeadSourceModalOpen, setAddLeadSourceModalOpen] = useState(false);
  const [isLeadsFromListModalOpen, setLeadsFromListModalOpen] = useState(false);

  return (
    <div
      onClick={() => setAddLeadSourceModalOpen(true)}
      className="w-52 flex flex-col items-center gap-1 bg-white border border-slate-500 rounded-md p-2 text-slate-600"
    >
      <HiOutlinePlusSmall className="text-md" />
      <p className="text-xs font-medium">Add Lead Source</p>
      <p className="text-xs">Click to add leads from List or CRM</p>
      {isAddLeadSourceModalOpen && (
        <AddLeadSourceModal
          isAddLeadSourceModalOpen={isAddLeadSourceModalOpen}
          setAddLeadSourceModalOpen={setAddLeadSourceModalOpen}
          setLeadsFromListModalOpen={setLeadsFromListModalOpen}
        />
      )}
      {isLeadsFromListModalOpen && (
        <LeadsfromListModal
          isLeadsFromListModalOpen={isLeadsFromListModalOpen}
          setLeadsFromListModalOpen={setLeadsFromListModalOpen}
        />
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default AddLeadSource;
