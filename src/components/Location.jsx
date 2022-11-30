import axios from 'axios';
import image from '../assets/img/backImage.jpg';
import React, { useEffect, useState } from 'react';
import {
	Button,
	Col,
	Form,
	InputGroup,
	ListGroup,
	Pagination,
	Row,
} from 'react-bootstrap';
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
				<img
					src={image}
					alt=""
					className="img-fluid"
					style={{ height: '35rem', width: '100%' }}
				/>
				<InputGroup
					className="mb-3 mx-auto"
					style={{
						width: '50rem',
						height: '4rem',
						marginTop: '1rem',
					}}
				>
					<Form.Control
						placeholder="find dimension between 1 and 126"
						aria-label="find dimension between 1 and 126"
						aria-describedby="basic-addon2"
						value={locId}
						onChange={(e) => setLocID(e.target.value)}
						style={{
							fontSize: '2rem',
						}}
					/>
					<Button
						id="button-addon2"
						onClick={searchLoc}
						style={{ width: '5rem' }}
					>
						<i className="fa-solid fa-magnifying-glass"></i>
					</Button>
				</InputGroup>
			</div>
			<div>
				<div className="container ">
					<ListGroup horizontal className="my-2" style={{ fontSize: '1.5rem' }}>
						<div className="mx-auto">
							<ListGroup.Item>Dim: {location.dimension}</ListGroup.Item>
							<ListGroup.Item>Name: {location.name}</ListGroup.Item>
							<ListGroup.Item>
								Population: {location.residents?.length}
							</ListGroup.Item>
						</div>
					</ListGroup>
				</div>
				<div className="container">
					<Row xs={1} md={2} lg={4}>
						{location.residents?.map((resident) => (
							<Col key={resident}>
								<Characters resident={resident} key={resident} />
							</Col>
						))}
					</Row>
				</div>
			</div>
			<footer className="container">
				<a href="https://github.com/Pretti78">
					<p className="col-md-3 mx-auto">check my GitHub</p>
				</a>
				<a href="https://www.linkedin.com/in/pretti-omar/">
					<p className="col-md-3 mx-auto">check my Linkedin</p>
				</a>
				<p className="col-md-3 mx-auto">All rights reserved Pretti Omar ©</p>
			</footer>
		</div>
	);
};

export default Location;
