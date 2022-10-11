import styled from "styled-components";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const Container = styled.div``;
const Contain = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <Header></Header>
      <Contain>
        <Posts />
        <Sidebar />
      </Contain>
    </Container>
  );
};

export default Home;
