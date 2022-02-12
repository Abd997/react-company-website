import React from "react";
import styled from "styled-components";

function Intro() {
	return (
		<Container>
			<Left>
				<Title>Adventures in creative age</Title>
			</Left>
			<Right />
		</Container>
	);
}

const Desc = styled.p`
	width: 60%;
	font-size: 20px;
`;

const Title = styled.h1`
	font-size: 60px;
	width: 60%;
`;

const Right = styled.div`
	width: 40%;
`;

const Left = styled.div`
	width: 60%;
`;

const Container = styled.div`
	height: calc(100vh - 60px);
	display: flex;
	padding: 20px;
`;

export default Intro;
