'use client';

import useList from './controller';
import { ListProps } from './types';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { ChangeEvent } from 'react';
import Link from 'next/link';
import { manrope } from '@/app/fonts';

const ListContent = ({ params: { id, title } }: ListProps) => {
  const {
    listItems,
    handleToggleListItemBought,
    handleCreateListItem,
    setListItemNameForm,
    listItemNameForm,
    editableItemId,
    handleEditItemName,
    handleItemNameClick,
    setEditableItemId
  } = useList(id, title);

  return (
    <div className="content-container mx-0 md:mx-36 lg:mx-48 xl:mx-72 2xl:mx-80 pt-12 min-h-screen flex flex-col items-center justify-center gap-3">
      <nav className="self-start pl-3">
        <Link
          href="/dashboard"
          className={`${manrope.className} text-white text-xl flex items-center gap-3`}
        >
          Back to dashboard
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </nav>

      <div className="bg-zinc-900 rounded-lg px-8 lg:px-12 py-8 lg:py-12 min-h-[600px] max-h-[600px] w-full overflow-auto scrollbar-hide">
        <h1 className="text-white text-2xl capitalize leading-loose">
          {title}
        </h1>

        <div className="mt-8 mx-4">
          {listItems.length === 0 ? (
            <form onSubmit={handleCreateListItem}>
              <input
                type="text"
                value={listItemNameForm}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setListItemNameForm(event.target.value)
                }
                placeholder="Add new item to the list..."
                className="bg-transparent mt-4 w-full focus:placeholder-transparent focus:outline-none caret-white placeholder:text-white text-white"
              />
              <button type="submit" className="hidden" />
            </form>
          ) : (
            <>
              {listItems.map(listItem => (
                <div
                  key={listItem.id}
                  className="flex items-center mb-2 mr-3 gap-3"
                >
                  <Checkbox.Root
                    onCheckedChange={() =>
                      handleToggleListItemBought(
                        listItem.id,
                        listItem.itemName,
                        listItem.isBought
                      )
                    }
                    checked={listItem.isBought}
                    className="group focus:outline-none disabled:cursor-not-allowed "
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full flex items-center justify-center bg-zinc-900 border-2 border-gray-400 group-data-[state=checked]:bg-purple-700 group-data-[state=checked]:border-purple-700 transition-colors ">
                        <Checkbox.Indicator>
                          <CheckIcon className="h-5 w-5 text-white" />
                        </Checkbox.Indicator>
                      </div>
                    </div>
                  </Checkbox.Root>

                  {editableItemId === listItem.id ? (
                    <input
                      type="text"
                      value={listItem.itemName}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleEditItemName(
                          listItem.id,
                          event.target.value,
                          listItem.isBought
                        )
                      }
                      onBlur={() => setEditableItemId(null)}
                      className="bg-transparent w-full text-lg focus:placeholder-transparent focus:outline-none caret-white placeholder:text-white text-white"
                    />
                  ) : (
                    <p
                      onClick={() => handleItemNameClick(listItem.id)}
                      className="text-white capitalize text-lg group-data-[state=checked]:line-through group-data-[state=checked]:text-gray-500 w-full cursor-pointer"
                    >
                      {listItem.itemName}
                    </p>
                  )}
                </div>
              ))}

              <form onSubmit={handleCreateListItem}>
                <input
                  type="text"
                  value={listItemNameForm}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setListItemNameForm(event.target.value)
                  }
                  placeholder="Add new item to the list..."
                  className="bg-transparent mt-4 w-full focus:placeholder-transparent focus:outline-none caret-white placeholder:text-white text-white"
                />
                <button type="submit" className="hidden" />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListContent;
