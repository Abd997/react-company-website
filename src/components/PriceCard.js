import React from "react";
import styled from "styled-components";

function PriceCard(props) {
	return (
		<Container>
			<PriceContainer>
				$<Price>{props.price}</Price>/month
			</PriceContainer>
			<Type>{props.plan} plan</Type>
			<List>
				<ListItem>5 webpages</ListItem>
				<ListItem>Responsive website</ListItem>
				<ListItem>React used as frontend</ListItem>
			</List>
			<Button>Join now</Button>
		</Container>
	);
}

const Container = styled.div`
	margin-right: 70px;
	padding: 20px;
	background-color: white;
	-webkit-box-shadow: 1px 6px 16px 7px rgba(0, 0, 0, 0.4);
	box-shadow: 1px 6px 16px 7px rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (max-width: 480px) {
		margin-right: 0;
		margin-bottom: 20px;
		padding: 10px;
	}
`;
const PriceContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Price = styled.span`
	font-weight: bold;
	font-size: 50px;

	@media only screen and (max-width: 480px) {
		font-size: 30px;
	}
`;
const Type = styled.button`
	padding: 10px;
	margin: 10px 0;
	border: 1.5px solid crimson;
	color: crimson;
	background-color: white;
	border-radius: 10px;

	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const List = styled.ul`
	list-style: none;
`;
const ListItem = styled.li`
	margin: 20px 0;

	@media only screen and (max-width: 480px) {
		margin: 10px;
		font-size: 12px;
	}
`;
const Button = styled.button`
	margin-top: 20px;
	border: none;
	background-color: darkblue;
	color: white;
	font-size: 16px;
	padding: 15px;
	border-radius: 10px;
	cursor: pointer;

	@media only screen and (max-width: 480px) {
		font-size: 10px;
		padding: 12px;
	}
`;

export default PriceCard;
