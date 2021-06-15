import React from 'react';
//hooks
import UseToggleState from './hooks/useToggleState';
//Components
import EditItemForm from './EditItemForm';
//Material UI
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


function Item({ item, completed, id, removeItem, toggleItem, editItem }) {
    const [isEditing, toggleEdit] = UseToggleState(false);
    return (
        <>
            <ListItem>
                {isEditing ? (
                    <EditItemForm 
                    editItem={editItem} 
                    id={id} 
                    item={item}
                    toggleEdit={toggleEdit}
                    />
                ) : (
                    <>
                        <CheckBox tabIndex={-1} checked={completed} onClick={() => toggleItem(id)} />
                        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }} >{item}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label='delete' onClick={() => removeItem(id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label='edit' onClick={toggleEdit}>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                )}
            </ListItem>
        </>
    )
}

export default Item;