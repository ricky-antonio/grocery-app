import React from 'react';

import Item from './Item';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';




function GroceryList({ items, removeItem, toggleItem, editItem }) {
    return (
        <Paper>
            <List>
                {items.map((item, i) => (
                    <>
                        <Item
                            item={item.item}
                            id={item.id}
                            key={item.id}
                            completed={item.completed}
                            removeItem={removeItem}
                            toggleItem={toggleItem}
                            editItem={editItem}
                        />
                        {i < items.length -1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    );
};

export default GroceryList;