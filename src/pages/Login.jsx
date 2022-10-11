import styled from "styled-components";
import img from "../img/photo.jpg";

const Container = styled.div`
  background-image: url(${img});
  height: calc(100vh - 60px);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div``;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  font-family: "Varela Round", sans-serif;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fffdfd9b;
  padding: 20px;
  border-radius: 10px;
`;
const Label = styled.label`
  font-size: 25px;
  font-weight: 300;
  font-family: "Urbanist", sans-serif;
  margin: 15px 0;
`;
const UserInput = styled.input`
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid;
  padding: 10px;
  font-size: 20px;
`;

const PassInput = styled.input`
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ButtonL = styled.button`
  padding: 10px;
  border: none;
  background-color: #f07373;
  margin: 10px 60px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: lightcoral;
  }
`;
const ButtonR = styled.button`
  padding: 10px;
  border: none;
  background-color: green;
  margin: 10px 60px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 60px;
  right: 20px;
  &:hover {
    background-color: #009200;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log in</Title>
        <Form>
          <Label>Username</Label>
          <UserInput type="text" placeholder="Username"></UserInput>

          <Label>Password</Label>
          <PassInput type="password" placeholder="Password"></PassInput>

          <ButtonL>Login</ButtonL>
        </Form>
        <ButtonR>Register</ButtonR>
      </Wrapper>
    </Container>
  );
};

export default Login;
