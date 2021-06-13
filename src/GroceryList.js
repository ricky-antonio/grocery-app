import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';




function GroceryList(props) {
    return (
        <Paper>
            <List>
                {props.items.map(item => (
                    <>
                        <ListItem>
                            <ListItemText>{item.item}</ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
};

export default GroceryList;