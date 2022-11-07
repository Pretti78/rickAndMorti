import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Characters from './Characters';

const Location = () => {
	const [location, SetLocation] = useState({});

	const [locId, setLocID] = useState('');

	useEffect(() => {
		const randomLoc = Math.floor(Math.random() * 20);

		axios
			.get(`https://rickandmortyapi.com/api/location/${randomLoc}`)
			.then((res) => SetLocation(res.data));
	}, []);

	const searchLoc = () => {
		axios
			.get(`https://rickandmortyapi.com/api/location/${locId}`)
			.then((res) => SetLocation(res.data));
	};

	return (
		<div className="Main">
			<div className="header">
				<h1 className="Tittle">Rick And Morty </h1>
				<div className="Search-main">
					<input
						type="text"
						value={locId}
						onChange={(e) => setLocID(e.target.value)}
						className="Search"
					></input>
					<button onClick={searchLoc} className="Btn-Search">
						<i class="fa-solid fa-magnifying-glass"></i>
					</button>
				</div>
			</div>
			<div className="Info-Dim">
				<h3>Dim: {location.dimension}</h3>
				<h3>Name: {location.name}</h3>
				<h3>Poblation: {location.residents?.length}</h3>
			</div>
			<div className="List-Characters">
				{location.residents?.map((resident) => (
					<Characters resident={resident} key={resident} />
				))}
			</div>
			<footer>Todos los derechos reservados Pretti Omar D © </footer>
		</div>
	);
};

export default Location;
