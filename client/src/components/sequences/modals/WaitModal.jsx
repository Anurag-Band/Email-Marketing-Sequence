/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import { MdClose } from "react-icons/md";

import Select from "react-select";

export default function WaitModal({ isWaitModalOpen, setWaitModalOpen }) {
  const [waitFor, setWaitFor] = useState(1);
  const [selectedWaitType, setSelectedWaitType] = useState([]);
  function close() {
    setWaitModalOpen(false);
  }

  const WAIT_TYPE_OPTIONS = [
    {
      value: "Minutes",
      label: "Minutes",
    },
    {
      value: "Hours",
      label: "Hours",
    },
    {
      value: "Days",
      label: "Days",
    },
  ];

  const handleWaitTypeChange = (selectedOptions) => {
    setSelectedWaitType(selectedOptions);
  };
  return (
    <>
      <Transition appear show={isWaitModalOpen}>
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
                      onClick={() => setWaitModalOpen(false)}
                      className="flex items-center border-2 border-red-600 rounded-sm p-1 cursor-pointer"
                    >
                      <MdClose className="text-xl font-bold text-red-600" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="border-b border-slate-300" />
                    <h2 className="text-xl font-bold">Wait</h2>
                    <p className="text-md font-normal">
                      Add a delay between blocks.
                    </p>
                    <p className="border-b border-slate-300" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <h3>Wait For</h3>
                      <input
                        type="number"
                        value={waitFor}
                        onChange={(e) => {
                          if (e.target.value <= 0) return;
                          setWaitFor(e.target.value);
                        }}
                        className="border border-slate-300 bg-white text-black px-3 py-1 rounded-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3>Wait Type</h3>
                      <Select
                        name="waitType"
                        options={WAIT_TYPE_OPTIONS}
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Please Select an Option..."
                        onChange={handleWaitTypeChange}
                        value={selectedWaitType}
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => setWaitModalOpen(false)}
                        className="p-1 w-24 text-md border-4 border-sky-400 rounded-md text-white bg-blue-600"
                      >
                        Insert
                      </button>
                    </div>
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
