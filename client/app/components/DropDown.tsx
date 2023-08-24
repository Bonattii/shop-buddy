import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { api } from '@/app/server/api';
import { getTokenFromLocalStorage } from '@/app/utils/storage';

interface IconProps {
  className?: string;
  'aria-hidden'?: boolean;
}

interface DropDownProps {
  setselectedListOfSelectedUsers: any;
  setselectedid: any;
  setselectedTitle: any;
  onUpdate: any;
  listId: string;
  setIsOpen: any;
  titleProp: string;
  listOfUsers: any;
}

export function DropDown({
  onUpdate,
  listId,
  setselectedListOfSelectedUsers,
  setselectedid,
  setselectedTitle,
  setIsOpen,
  titleProp,
  listOfUsers
}: DropDownProps) {
  const handleDeleteList = () => {
    api
      .delete(
        'lists/delete',

        {
          data: {
            id: listId
          },
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
        }
      )
      .then(res => onUpdate());
  };

  return (
    <div className=" w-50 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-black bg-opacity-20 px-1 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <ChevronDownIcon
              className="  h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 pt-1 ">
              <Menu.Item>
                {({ close }) => (
                  <button
                    onClick={e => {
                      e.preventDefault();
                      close();

                      setselectedTitle(titleProp);
                      setselectedid(listId);
                      setselectedListOfSelectedUsers(listOfUsers);
                      setIsOpen(true);
                    }}
                    className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
                  >
                    <EditInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden={true}
                    />
                    Edit
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 pb-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={e => {
                      e.preventDefault();
                      handleDeleteList();
                    }}
                    className={`${
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-indigo-400"
                        aria-hidden={true}
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden={true}
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export function EditInactiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#6240DC"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#7C5CF2"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function MoveInactiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#6240DC"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#7C5CF2"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
