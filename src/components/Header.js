import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';

import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


const sidebarMenuItems = [
	'Existing Inventory',
	'Used Inventory',
	'Trade-in',
	'Cybertruck',
	'Roadster',
	'Semi',
	'Charging',
	'PowerWall',
	'Commercial Energy',
	'Utilities',
	'Find Us',
	'Support',
	'Investor Relations',
];

export default function Header() {
	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);

	return (
		<Container>
			<a style={{ cursor: 'pointer' }} href='#'>
				<img src='../images/logo.svg' alt='' />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						<a href='#' key={index}>
							{car}
						</a>
					))}
				{/* <a href='#'>Model S</a>

				<a href='#'>Model 3</a>

				<a href='#'>Model X</a>

				<a href='#'>Model Y</a> */}
			</Menu>
			<RightMenu>
				<a href='#'>Shop</a>
				<a href='#'>Account</a>
				<CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
			</RightMenu>
			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerStatus(false)}></CustomClose>
				</CloseWrapper>
				{cars &&
					cars.map((car, index) => (
						<li key={index}>
							<a href='#'>{car}</a>
						</li>
					))}

				{sidebarMenuItems.map((item, index) => (
					<li key={index}>
						<a href='#'>{item}</a>
					</li>
				))}

				{/* <li>
					<a href='#'>Existing Inventory</a>
				</li>
				<li>
					<a href='#'>Used Inventory</a>
				</li>
				<li>
					<a href='#'>Trade-in</a>
				</li>
				<li>
					<a href='#'>Cybertruck</a>
				</li>
				<li>
					<a href='#'>Roadster</a>
				</li>
				<li>
					<a href='#'>Semi</a>
				</li>
				<li>
					<a href='#'>Charging</a>
				</li>
				<li>
					<a href='#'>PowerWall</a>
				</li>
				<li>
					<a href='#'>Commercial Energy</a>
				</li>
				<li>
					<a href='#'>Utilities</a>
				</li>
				<li>
					<a href='#'>Find Us</a>
				</li>
				<li>
					<a href='#'>Support</a>
				</li>
				<li>
					<a href='#'>Investor Relations</a>
				</li> */}
			</BurgerNav>
			
		</Container>
	);
}

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;
const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;

	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;
const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background: white;
	width: 300px;
	z-index: 16;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;

	transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};

	transition: transform 0.2s;

	overflow: scroll;

	li {
		padding: 15px 0px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		a {
			font-weight: 600;
		}
	}
`;

const CustomClose = styled(Close)`
	cursor: pointer;
`;
const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
