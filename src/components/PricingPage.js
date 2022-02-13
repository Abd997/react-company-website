import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

function PricingPage() {
	return (
		<Container>
			<PriceCard price="10" plan="Basic" />
			<PriceCard price="30" plan="Intermediate" />
			<PriceCard price="100" plan="Advance" />
		</Container>
	);
}

const Container = styled.div`
	align-items: center;
	height: 100%;
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

export default PricingPage;
