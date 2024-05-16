import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Handle, Position } from "reactflow";
import AddBlockModal from "./modals/AddBlockModal";
import ColdEmailModal from "./modals/ColdEmailModal";
import WaitModal from "./modals/WaitModal";

const AddBlock = () => {
  const [isAddBlockModalOpen, setAddBlockModalOpen] = useState(false);
  const [isColdEmailModalOpen, setColdEmailModalOpen] = useState(false);
  const [isWaitModalOpen, setWaitModalOpen] = useState(false);

  return (
    <div className="w-52 flex items-center justify-center">
      <div
        onClick={() => setAddBlockModalOpen(true)}
        className="flex items-center border-2 border-sky-400 rounded-xs p-1 cursor-pointer"
      >
        <MdClose className="text-md font-bold text-sky-400" />
      </div>
      <Handle type="target" position={Position.top} />
      <Handle type="source" position={Position.Bottom} />
      {isAddBlockModalOpen && (
        <AddBlockModal
          isAddBlockModalOpen={isAddBlockModalOpen}
          setAddBlockModalOpen={setAddBlockModalOpen}
          setColdEmailModalOpen={setColdEmailModalOpen}
          setWaitModalOpen={setWaitModalOpen}
        />
      )}
      {isColdEmailModalOpen && (
        <ColdEmailModal
          isColdEmailModalOpen={isColdEmailModalOpen}
          setColdEmailModalOpen={setColdEmailModalOpen}
        />
      )}
      {isWaitModalOpen && (
        <WaitModal
          isWaitModalOpen={isWaitModalOpen}
          setWaitModalOpen={setWaitModalOpen}
        />
      )}
    </div>
  );
};

export default AddBlock;
