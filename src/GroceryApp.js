import React, { useState } from 'react';

//Components
import GroceryList from './GroceryList';
import GroceryForm from './GroceryForm';
//Material UI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import uuid from 'uuid/dist/v4';

function GroceryApp() {
	const initialItems = [
		{ id: uuid(), item: 'milk', completed: false, quantity: 1 },
		{ id: uuid(), item: 'bread', completed: true, quantity: 1 },
		{ id: uuid(), item: 'bananas', completed: false, quantity: 6 }
	]

	const [items, setItems] = useState(initialItems);

	const addItem = newItemText => {
		setItems([...items, { id: uuid(), item: newItemText, completed: false, quantity: 1 }]);
	};

	const removeItem = itemId => {
		const updatedItems = items.filter(item => item.id !== itemId);
		setItems(updatedItems)
	};

	const toggleItem = itemId => {
		const updatedItems = items.map(item =>
			item.id === itemId ? { ...item, completed: !item.completed } : item
		);
		setItems(updatedItems);
	}

	const editItem = (itemId, newItem) => {
		const updatedItems = items.map(item =>
			item.id === itemId ? { ...item, item: newItem } : item
		);
		setItems(updatedItems);
	}

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: "100vh",
				backgroundColor: "#fafafa"
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{ height: '64px' }}>
				<Toolbar>
					<Typography color='inherit'>Grocery List</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify='center' style={{ marginTop: '1rem' }}>
				<Grid item xs={11} md={8} lg={4} >
					<GroceryForm addItem={addItem} />
					<GroceryList
						items={items}
						removeItem={removeItem}
						toggleItem={toggleItem}
						editItem={editItem}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default GroceryApp;