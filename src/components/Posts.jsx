import styled from "styled-components";
import Post from "./Post";

const Container = styled.div`
  flex: 9;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Posts = () => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Posts;
