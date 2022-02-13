import React from "react";
import styled from "styled-components";
import How from "../img/creative-transparent.png";
import MiniCard from "./MiniCard";
import FiverLogo from "../img/fiver.png";

function Service() {
	return (
		<Container>
			<Left>
				<Image src={How} />
			</Left>
			<Right>
				<Wrapper>
					<Title>How to avail our services?</Title>
					<Description>
						Get in touch with us at our Fiver and lets get your project started
					</Description>
					<CardContainer>
						<MiniCard image={FiverLogo} />
					</CardContainer>
					<Button>Get in touch</Button>
				</Wrapper>
			</Right>
		</Container>
	);
}

const Button = styled.button`
	width: 180px;
	border: none;
	border-radius: 10px;
	margin-top: 40px;
	background-color: #e8312e;
	font-size: 20px;
	color: white;
	padding: 16px;
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
`;

const Title = styled.h1``;
const Description = styled.p`
	font-size: 20px;
	margin-top: 20px;
`;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: 480px) {
		padding: 30px;
		width: 90%;
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	padding-top: 7%;
`;

const Left = styled.div`
	width: 50%;

	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const Right = styled.div`
	width: 50%;

	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Container = styled.div`
	display: flex;

	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

export default Service;
