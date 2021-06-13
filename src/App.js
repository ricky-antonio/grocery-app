import React, {useState} from 'react';
//Components
import GroceryApp from './GroceryApp';
import GroceryList from './GroceryList';
//Material UI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
// import './App.css';

function App() {
	const initialItems = [
		{id: 1, item: 'milk', completed: false, quantity: 1},
		{id: 2, item: 'bread', completed: true, quantity: 1},
		{id: 3, item: 'bananas', completed: false, quantity: 6}
	]

	const [items, setItems] = useState(initialItems);
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
			<AppBar color='primary' position='static' style={{height: '64px'}}>
				<Toolbar>
					<Typography color='inherit'>Grocery List</Typography>
				</Toolbar>
			</AppBar>
			<GroceryList  items={items} />
		</Paper>
	);
}

export default App;
