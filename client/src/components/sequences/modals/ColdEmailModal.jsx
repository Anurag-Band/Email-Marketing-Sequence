/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import Select from "react-select";

export default function ColdEmailModal({
  isColdEmailModalOpen,
  setColdEmailModalOpen,
}) {
  const [selectedLists, setSelectedLists] = useState([]);
  function close() {
    setColdEmailModalOpen(false);
  }

  const LIST_OPTIONS = [
    { value: "Sample Template", label: "Sample Template" },
    {
      value: "Sample Template - Follow Up",
      label: "Sample Template - Follow Up",
    },
  ];

  const handleListChange = (selectedOptions) => {
    setSelectedLists(selectedOptions);
  };
  return (
    <>
      <Transition appear show={isColdEmailModalOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none text-slate-800"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-[40vw] h-[85vh] rounded-xl bg-gray-100 p-5 backdrop-blur-2xl flex flex-col gap-3">
                  <div className="flex items-center justify-end">
                    <div
                      onClick={() => setColdEmailModalOpen(false)}
                      className="flex items-center border-2 border-red-600 rounded-sm p-1 cursor-pointer"
                    >
                      <MdClose className="text-xl font-bold text-red-600" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="border-b border-slate-300" />
                    <h2 className="text-xl font-bold">Cold Email</h2>
                    <p className="text-md font-normal">
                      Send an email to a lead.
                    </p>
                    <p className="border-b border-slate-300" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start justify-between p-1">
                      <h3 className="text-lg font-semibold">Email Template</h3>
                      <button className="flex items-center justify-center gap-2 p-1 px-4 border-4 border-sky-400 rounded-md text-sky-400">
                        <p className="text-md font-medium">New Template</p>
                        <FiPlusCircle className="text-xl font-bold" />
                      </button>
                    </div>
                    <Select
                      isMulti
                      name="lists"
                      options={LIST_OPTIONS}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Search for an Email Template..."
                      onChange={handleListChange}
                      value={selectedLists}
                    />
                    {selectedLists.length > 0 && (
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => setColdEmailModalOpen(false)}
                          className="p-1 w-24 text-md border-4 border-sky-400 rounded-md text-white bg-blue-600"
                        >
                          Insert
                        </button>
                      </div>
                    )}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
