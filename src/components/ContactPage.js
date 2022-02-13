import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

function ContactPage() {
	return (
		<Container>
			<Wrapper>
				<FormContainer>
					<Title>Let's get in touch</Title>
					<Form>
						<LeftForm>
							<Input placeholder="Your name" />
							<Input placeholder="Your email" />
							<Input placeholder="Subject" />
						</LeftForm>
						<RightForm>
							<TextArea placeholder="Your message" />
							<Button>Send</Button>
						</RightForm>
					</Form>
				</FormContainer>
				<AddressContainer>
					<AddressItem>
						<Icon src={Map} />
						<Text>South Korea</Text>
					</AddressItem>
					<AddressItem>
						<Icon src={Phone} />
						<Text>001-002-003</Text>
					</AddressItem>
					<AddressItem>
						<Icon src={Send} />
						<Text>random_not_real_enki@hizafo.net</Text>
					</AddressItem>
				</AddressContainer>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	height: 90%;
	background: url("https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/watercolor.png");
`;

const Wrapper = styled.div`
	height: 100%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 480px) {
		flex-direction: column;
		justify-content: space-around;
	}
`;
const FormContainer = styled.div`
	width: 50%;

	@media only screen and (max-width: 480px) {
		width: 50%;
		height: 60%;
	}
`;

const Form = styled.form`
	height: 250px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

const LeftForm = styled.div`
	height: 100%;
	margin-right: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media only screen and (max-width: 480px) {
		height: 50%;
		margin-right: 0;
	}
`;
const RightForm = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media only screen and (max-width: 480px) {
	}
`;

const AddressContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AddressItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 50px;

	@media only screen and (max-width: 480px) {
		margin-bottom: 0;
	}
`;

const Icon = styled.img`
	width: 30px;
	margin-right: 20px;
`;

const Text = styled.p`
	font-size: 20px;
`;

const Input = styled.input`
	width: 200px;
	padding: 20px;

	@media only screen and (max-width: 480px) {
		padding: 5px;
		margin-top: 20px;
	}
`;

const TextArea = styled.textarea`
	width: 200px;
	height: 60%;
	padding: 20px;

	@media only screen and (max-width: 480px) {
		padding: 5px;
		padding-bottom: 20px;
		margin-top: 40px;
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
`;

const Title = styled.h1`
	margin: 65px;
	margin-top: 0;

	@media only screen and (max-width: 480px) {
		margin: 20px;
	}
`;

export default ContactPage;
