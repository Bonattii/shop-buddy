import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { ListItem } from './types';
import { api } from '@/app/server/api';
import { getTokenFromLocalStorage } from '@/app/utils/storage';

const useList = (listId: string, listTitle: string) => {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [listItemNameForm, setListItemNameForm] = useState('');
  const [editableItemId, setEditableItemId] = useState<string | null>(null);

  // Get List Items from the server
  useEffect(() => {
    if (getTokenFromLocalStorage()) {
      api
        .post(
          '/listItems',
          { listId },
          {
            headers: {
              Authorization: `Bearer ${getTokenFromLocalStorage()}`
            }
          }
        )
        .then(response => setListItems(response.data))
        .catch(error => console.error(error));
    }
  }, [listId]);

  const handleToggleListItemBought = async (
    id: string,
    itemName: string,
    isBought: boolean
  ) => {
    await api
      .put(
        '/listItems/update',
        { id, itemName, isBought: !isBought },
        {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`
          }
        }
      )
      .then(response => {
        const updatedItem = response.data;

        setListItems(prevListItems =>
          prevListItems.map(item => {
            if (item.id === updatedItem.id) {
              return updatedItem;
            }

            return item;
          })
        );
      })
      .catch(error => console.error(error));
  };

  const handleCreateListItem = async (event: FormEvent | KeyboardEvent) => {
    event.preventDefault();

    await api
      .post(
        '/listItems/create',
        {
          listId,
          isBought: false,
          itemName: listItemNameForm
        },
        {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`
          }
        }
      )
      .then(response => {
        setListItems(prevListItems => [...prevListItems, response.data]);
        setListItemNameForm('');
      })
      .catch(error => console.error(error));

    setListItemNameForm('');
  };

  const handleDeleteListItem = async (id: string) => {
    await api
      .delete('/listItems/delete', {
        data: { id },
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      })
      .then(() => {
        setListItems(prevListItems =>
          prevListItems.filter(item => item.id !== id)
        );
      })
      .catch(error => console.error(error));
  };

  const handleItemNameClick = (itemId: string) => {
    setEditableItemId(itemId);
  };

  const handleEditItemName = async (
    id: string,
    itemName: string,
    isBought: boolean
  ) => {
    if (itemName === '') {
      handleDeleteListItem(id);
    } else {
      await api
        .put(
          '/listItems/update',
          { id, itemName, isBought: isBought },
          {
            headers: {
              Authorization: `Bearer ${getTokenFromLocalStorage()}`
            }
          }
        )
        .then(reponse => {
          const updatedItem = reponse.data;

          setListItems(prevListItems =>
            prevListItems.map(item => {
              if (item.id === updatedItem.id) {
                return updatedItem;
              }

              return item;
            })
          );
        })
        .catch(error => console.error(error));
    }
  };

  return {
    listItems,
    handleToggleListItemBought,
    handleCreateListItem,
    setListItemNameForm,
    listItemNameForm,
    handleDeleteListItem,
    handleItemNameClick,
    handleEditItemName,
    editableItemId,
    setEditableItemId
  };
};

export default useList;
