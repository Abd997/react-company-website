import styled from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<Container>
			<Navbar />
			<Intro />
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
`;

export default App;
