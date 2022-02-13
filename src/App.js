import styled, { css } from "styled-components";
import ContactPage from "./components/ContactPage";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import PricingPage from "./components/PricingPage";
import Service from "./components/Service";

const App = () => {
	return (
		<>
			<Container>
				<Navbar />
				<Intro />
				<IntoShape />
			</Container>
			<Container>
				<Feature />
				<FeatureShape />
			</Container>
			<Container>
				<Service />
				<ServiceShape />
			</Container>
			<Container>
				<PricingPage />
				<PriceShape />
			</Container>
			<Container>
				<ContactPage />
				<Footer />
			</Container>
		</>
	);
};

const Shape = css`
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`;

const PriceShape = styled.div`
	${Shape}
	clip-path: polygon(55% 0%, 100% 0%, 100% 100%, 10% 100%);
	background-color: crimson;
`;

const ServiceShape = styled.div`
	${Shape}
	clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 55% 100%);
	background-color: lightsalmon;
`;

const FeatureShape = styled.div`
	${Shape}
	clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
	background-color: pink;
`;

const IntoShape = styled.div`
	${Shape}
	clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
	background-color: crimson;
`;

const Container = styled.div`
	height: 100vh;
	overflow: hidden;
	position: relative;
`;

export default App;
