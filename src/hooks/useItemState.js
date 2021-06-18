import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/dist/v4';

const useItemState = initialItems => {
    const [items, setItems] = useLocalStorageState("items", initialItems);

    return {
        items,
        addItem: newItemText => {
            setItems([...items, { id: uuid(), item: newItemText, completed: false, quantity: 1 }]);
        },
        removeItem: itemId => {
            const updatedItems = items.filter(item => item.id !== itemId);
            setItems(updatedItems)
        },
        editItem: (itemId, newItem) => {
            const updatedItems = items.map(item =>
                item.id === itemId ? { ...item, item: newItem } : item
            );
            setItems(updatedItems);
        },
        toggleItem: itemId => {
            const updatedItems = items.map(item =>
                item.id === itemId ? { ...item, completed: !item.completed } : item
            );
            setItems(updatedItems);
        }

    }
}

export default useItemState;