import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditItemForm({ editItem, id, item, toggleEdit }) {
    const [value, handleChange, reset] = useInputState(item)
    return (
        <form onSubmit={e => {
            e.preventDefault();
            editItem(id, value);
            reset();
            toggleEdit();
        }}
        style={{marginLeft: "1rem", width: "50%"}}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditItemForm;