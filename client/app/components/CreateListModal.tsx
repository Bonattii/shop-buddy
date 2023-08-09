import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { PlusIcon } from './icons/PlusIcon';
import ModalSelect from './ModalSelect';

export function CreateListModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="flex space-x-1 font-semibold mt-2 rounded-full px-4 py-3 bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-900 hover:to-indigo-900 text-white ...">
        <PlusIcon />
        New List
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-gray-800 p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="pt-8 text-3xl font-medium leading-6 text-white">
                    Name Your List
                  </Dialog.Title>
                  <div>
                    <input
                      className="mt-8 w-80 py-2 text-slate-100 px-3 bg-gray-700 rounded-md shadow-none"
                      type="text"
                      placeholder="Title"></input>
                  </div>
                  <div className="mt-12">
                    <h2 className="text-white text-xl">
                      Who would you like to add to your list?
                    </h2>
                    <ModalSelect />
                  </div>
                  <div className="flex gap-5 mt-6 pb-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-gray-500 px-6 py-2 text-md font-normal text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="flex justify-center rounded-full  bg-gradient-to-r from-indigo-950 to-indigo-800 px-5 py-2 text-md font-normal text-white hover:to-indigo-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      Continue
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
