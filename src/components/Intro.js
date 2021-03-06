import React from "react";
import styled from "styled-components";
import Creative from "../img/creative-transparent.png";
import AnimatedShapes from "./AnimatedShapes";

function Intro() {
	return (
		<Container>
			<Left>
				<Title>Adventures in creative age</Title>
				<Desc>
					We believe that designing products and services in close partnership
					with our clients is the only way to have a real impact on their
					business.
				</Desc>
				<Info>
					<Button>Start a project</Button>
					<Contact>
						<Phone>Call us at 001-002-003</Phone>
						<ContactText>For any inquiry</ContactText>
					</Contact>
				</Info>
			</Left>
			<Right>
				<Image src={Creative} />
				<AnimatedShapes />
			</Right>
		</Container>
	);
}

const Image = styled.img`
	width: 100%;
	margin-top: 20%;

	@media only screen and (max-width: 480px) {
		width: 0%;
	}
`;

const ContactText = styled.span`
	color: gray;
	margin-top: 5px;
`;
const Phone = styled.span`
	color: #f0667d;
	font-weight: bold;
`;

const Contact = styled.div`
	display: flex;
	flex-direction: column;
`;

const Button = styled.button`
	padding: 15px;
	background-color: darkblue;
	color: white;
	border-radius: 10px;
	font-weight: bold;
	border: none;
	cursor: pointer;
	letter-spacing: 2px;

	@media only screen and (max-width: 480px) {
		margin-bottom: 50px;
	}
`;

const Info = styled.div`
	width: 60%;
	display: flex;
	margin-top: 50px;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 480px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Desc = styled.p`
	width: 60%;
	font-size: 20px;
	margin-top: 20px;

	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Title = styled.h1`
	font-size: 60px;
	width: 60%;

	@media only screen and (max-width: 480px) {
		width: 100%;
		font-size: 50px;
	}
`;

const Right = styled.div`
	width: 40%;
`;

const Left = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 480px) {
		height: 100%;
		width: 100%;
	}
`;

const Container = styled.div`
	height: calc(100vh - 60px);
	display: flex;
	padding: 20px;

	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

export default Intro;
