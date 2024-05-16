/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { GoPersonAdd } from "react-icons/go";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function AddBlockModal({
  isAddBlockModalOpen,
  setAddBlockModalOpen,
  setColdEmailModalOpen,
}) {
  function close() {
    setAddBlockModalOpen(false);
  }

  return (
    <>
      <Transition appear show={isAddBlockModalOpen}>
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
                <DialogPanel className="w-[60vw] h-[80vh] rounded-xl bg-gray-100 p-5 backdrop-blur-2xl flex flex-col gap-3">
                  <div className="flex items-center justify-end">
                    <div
                      onClick={() => setAddBlockModalOpen(false)}
                      className="flex items-center border-2 border-red-600 rounded-sm p-1 cursor-pointer"
                    >
                      <MdClose className="text-xl font-bold text-red-600" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="border-b border-slate-300" />
                    <h2 className="text-xl font-semibold">Add Blocks</h2>
                    <p className="text-sm font-normal">
                      Click on a block to configure and add it in sequence.
                    </p>
                    <p className="border-b border-slate-300" />
                  </div>
                  <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-semibold">Outreach</h2>
                    <div className="flex flex-wrap gap-6">
                      {/* box */}
                      <div className="flex items-center gap-5 w-full">
                        <div
                          onClick={() => {
                            setAddBlockModalOpen(false);
                            setColdEmailModalOpen(true);
                          }}
                          className="flex items-center gap-5 bg-white rounded-md p-4 border border-slate-300 w-1/2 cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out h-26"
                        >
                          <div className="flex items-center justify-center p-3 border border-violet-500 bg-violet-200 rounded-md">
                            <GoPersonAdd className="text-2xl font-bold text-violet-600" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold">
                              Cold Email
                            </h3>
                            <p className="text-md">Send an email to a lead.</p>
                          </div>
                        </div>

                        {/* box */}
                        <div className="flex items-center gap-5 bg-white rounded-md p-4 border border-slate-300 w-1/2 cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out h-26">
                          <div className="flex items-center justify-center p-3 border border-violet-500 bg-violet-200 rounded-md">
                            <BsFillPersonCheckFill className="text-2xl font-bold text-violet-600" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold">Task</h3>
                            <p className="text-md">Schedule a manual task.</p>
                          </div>
                        </div>
                      </div>
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
