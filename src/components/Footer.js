import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<Container>
			<Wrapper>
				<List>
					<ListItem>Guide</ListItem>
					<ListItem>Support</ListItem>
					<ListItem>Community</ListItem>
				</List>
				<Copyright>Educational project made by github/Abd997</Copyright>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	height: 10%;
	background-color: #111;
	color: lightgray;
`;

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	justify-content: space-between;
`;
const List = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
`;
const ListItem = styled.li`
	margin-right: 20px;
`;
const Copyright = styled.span``;

export default Footer;
