import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Characters = ({ resident }) => {
	const [pj, setPj] = useState([]);

	useEffect(() => {
		axios.get(resident).then((res) => setPj(res.data));
	}, []);

	return (
		<div className="Characters">
			<h3 className="Status">{pj.status}</h3>
			<img src={pj.image} className="Img-Perfil" />
			<h2>Name:{pj.name}</h2>
			<h3>Origin:{pj.origin?.name}</h3>
			<h3>Episode:{pj.episode?.length}</h3>
		</div>
	);
};

export default Characters;
