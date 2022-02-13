import React from "react";
import styled from "styled-components";

function MiniCard(props) {
	return (
		<Container>
			<Image src={props.image} />
			<Text>Lorem ipsum dolor sit amet, consectetur.</Text>
		</Container>
	);
}

const Text = styled.p`
	margin: 10px;
	text-align: center;
`;

const Image = styled.img`
	width: 70px;
`;

const Container = styled.div`
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default MiniCard;
