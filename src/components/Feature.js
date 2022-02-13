import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

function Feature() {
	return (
		<Container>
			<AnimatedShapes />
			<Left>
				<Image src={App} />
			</Left>
			<Right>
				<Title>
					Lean Design company <br />
				</Title>
				<SubTitle>Cheaper, Faster and better</SubTitle>
				<Desc>
					We help our clients by building aesthetic looking, fast and modern
					websites for their buisiness
				</Desc>
				<br />
				<Desc>
					We are here to put your business online and get you more customers.
				</Desc>
				<Button>Learn More</Button>
			</Right>
		</Container>
	);
}

const Title = styled.span`
	font-weight: bold;
	font-size: 70px;
`;
const SubTitle = styled.span`
	font-size: 24px;
	font-style: italic;
	color: gray;
	margin-top: 30px;
`;
const Desc = styled.p`
	font: 20px;
	color: gray;
	margin-top: 30px;
`;
const Button = styled.button`
	width: 180px;
	border: none;
	padding: 15px 20px;
	background-color: darkblue;
	color: white;
	font-size: 20px;
	margin-top: 30px;
	border-radius: 20px;
	cursor: pointer;
	letter-spacing: 2px;
`;

const Image = styled.img`
	height: 110%;
`;

const Right = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Left = styled.div`
	width: 55%;
`;

const Container = styled.div`
	display: flex;
`;

export default Feature;
