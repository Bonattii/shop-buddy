import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { api } from '../../server/api';
import ModalSelect from '../ModalSelect';
import { getTokenFromLocalStorage } from '@/app/utils/storage';

interface User {
  id: string;
  name: string;
}

export function CreateListModal() {
  let [isOpen, setIsOpen] = useState(false);
  let [title, setTitle] = useState('');
  let [listOfSelectedUsers, setListOfSelectedUsers] = useState<User[]>([]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function addUserToListOfSelectedUsers(newUser: User) {
    const found = listOfSelectedUsers.find((user) => user.id === newUser.id);
    if (!found) {
      setListOfSelectedUsers([...listOfSelectedUsers, newUser]);
    }
  }

  function deleteUserFromListOfSelectedUsers(removeUserById: string) {
    let copyArray = [
      ...listOfSelectedUsers.filter((user) => user.id !== removeUserById),
    ];

    setListOfSelectedUsers([...copyArray]);
  }

  const handleSubmit = () => {
    api
      .post(
        'lists/create',
        {
          title,
          otherUserIDs: listOfSelectedUsers.map((user) => user.id),
        },
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      .then((res) => {
        closeModal();
      });
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="ml-12 flex space-x-1 font-semibold mt-2 rounded-full px-3 py-2 bg-gradient-to-r from-indigo-950 to-indigo-700 hover:from-indigo-900 hover:to-indigo-900 text-white text-sm ...">
        <PlusIcon className="w-4 h-4 mr-1" />
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-6 w-80 py-2 text-slate-100 px-3 bg-gray-700 rounded-md shadow-none"
                      type="text"
                      placeholder="Title"></input>
                  </div>
                  <div className="mt-12">
                    <h2 className="text-white text-xl">
                      Who would you like to add to your list?
                    </h2>
                    <ModalSelect addToList={addUserToListOfSelectedUsers} />
                    <ul className=" list-disc ">
                      {listOfSelectedUsers.map((user) => (
                        <li
                          key={user.id}
                          onClick={() =>
                            deleteUserFromListOfSelectedUsers(user.id)
                          }
                          className={
                            'bg-gray-700 text-gray-300 list-none px-3 py-1 mr-1 mt-2 space-x-2 cursor-pointer rounded-md inline-flex items-center hover:opacity-75'
                          }>
                          <span>{user.name}</span>
                          <XMarkIcon className="w-4 h-4 text-slate-300" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-5 mt-14 pb-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-gray-500 px-6 py-2 text-md font-normal text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="flex justify-center rounded-full  bg-gradient-to-r from-indigo-950 to-indigo-800 px-5 py-2 text-md font-normal text-white hover:to-indigo-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2">
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
