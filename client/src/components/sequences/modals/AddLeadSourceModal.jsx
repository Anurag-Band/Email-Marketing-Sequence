/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { GoPersonAdd } from "react-icons/go";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function AddLeadSourceModal({
  isAddLeadSourceModalOpen,
  setAddLeadSourceModalOpen,
  setLeadsFromListModalOpen,
}) {
  function close() {
    setAddLeadSourceModalOpen(false);
  }

  return (
    <>
      <Transition appear show={isAddLeadSourceModalOpen}>
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
                      onClick={() => setAddLeadSourceModalOpen(false)}
                      className="flex items-center border-2 border-red-600 rounded-sm p-1 cursor-pointer"
                    >
                      <MdClose className="text-xl font-bold text-red-600" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="border-b border-slate-300" />
                    <h2 className="text-xl font-semibold">
                      Add a Source Block
                    </h2>
                    <p className="text-sm font-normal">
                      Pick a block & configure, any new leads that match rules
                      will be added to sequence automatically.
                    </p>
                    <p className="border-b border-slate-300" />
                  </div>
                  <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-semibold">Sources</h2>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-5">
                        {/* box */}
                        <div
                          onClick={() => {
                            setAddLeadSourceModalOpen(false);
                            setLeadsFromListModalOpen(true);
                          }}
                          className="flex items-center gap-5 bg-white rounded-md p-4 border border-slate-300 h-26 w-1/2 cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out h-26"
                        >
                          <div className="flex items-center justify-center p-3 border border-pink-500 bg-pink-200 rounded-md">
                            <GoPersonAdd className="text-2xl font-bold text-pink-600" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold">
                              Leads from List(s)
                            </h3>
                            <p className="text-md">
                              Connect multiple lists as source for this
                              sequence.
                            </p>
                          </div>
                        </div>

                        {/* box */}
                        <div className="flex items-center gap-5 bg-white rounded-md p-4 border border-slate-300 h-26 w-1/2 cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out h-26">
                          <div className="flex items-center justify-center p-3 border border-pink-500 bg-pink-200 rounded-md">
                            <BsFillPersonCheckFill className="text-2xl font-bold text-pink-600" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold">
                              Segment by Events
                            </h3>
                            <p className="text-md">
                              Create a segment of leads who have engaged with
                              emails previously.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">
                        {/* box */}
                        <div className="flex items-center gap-5 bg-white rounded-md p-4 border border-slate-300 h-26 w-1/2 cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out h-26">
                          <div className="flex items-center justify-center p-3 border border-pink-500 bg-pink-200 rounded-md">
                            <AiOutlineUsergroupAdd className="text-2xl font-bold text-pink-600" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold">
                              Segment of List
                            </h3>
                            <p className="text-md">
                              Create a segment of leads which match SalesBlink
                              Variables.
                            </p>
                          </div>
                        </div>

                        {/* box */}
                        <div className="flex items-center gap-5 bg-white rounded-md p-4 border border-slate-300 h-28 w-1/2 cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out h-26">
                          <div className="flex items-center justify-center p-3 border border-pink-500 bg-pink-200 rounded-md">
                            <HiOutlineLightningBolt className="text-2xl font-bold text-pink-600" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold">
                              Lead from CRM Integration
                            </h3>
                            <p className="text-md">
                              Pulls leads from your CRM integrations.
                            </p>
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
