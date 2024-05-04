import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function AppScreen({ isClose, setIsClose }) {
	return (
		<>
			<NavBar isClose={isClose} setIsClose={setIsClose} />
			<Outlet />
		</>
	);
}

export default AppScreen;
