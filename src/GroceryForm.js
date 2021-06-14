import React from 'react';
//Components
import useInputState from './hooks/useInputState';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

function GroceryForm({addItem}) {
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper style={{margin:'1rem 0', padding: '0 1rem'}}>
            <form onSubmit={e => {
                e.preventDefault();
                addItem(value);
                reset();
            }}>
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin= 'normal'
                label= 'Add Grocery Item'
                fullWidth
            />
            </form>
        </Paper>
    );
};

export default GroceryForm;