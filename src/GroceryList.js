import React from 'react';

import Item from './Item';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';




function GroceryList(props) {
    return (
        <Paper>
            <List>
                {props.items.map(item => (
                    <>
                        <Item item={item.item} key={item.id} completed={item.completed} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
};

export default GroceryList;