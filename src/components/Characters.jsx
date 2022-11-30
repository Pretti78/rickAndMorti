import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Characters = ({ resident }) => {
	const [pj, setPj] = useState([]);

	const boxShadowStatus = (state) => {
		if (pj.status === 'Dead') {
			state = '#d90429';
		} else if (pj.status === 'Alive') {
			state = '#70e000';
		} else {
			state = '#7d8597';
		}
		return state;
	};

	useEffect(() => {
		axios.get(resident).then((res) => setPj(res.data));
	}, []);

	return (
		<Card style={{ width: '25rem', margin: '1rem' }} border="success">
			<Card.Img variant="top" src={pj.image} />
			<Card.Body>
				<h4
					className="Status shadow-lg"
					style={{ color: boxShadowStatus(pj.status) }}
				>
					status: {pj.status}
				</h4>
				<br />
				<Card.Title style={{ fontSize: '2rem' }}>{pj.name}</Card.Title>
				<Card.Text>Species:{pj.species}</Card.Text>
				<Card.Text>Episode:{pj.episode?.length}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Characters;
