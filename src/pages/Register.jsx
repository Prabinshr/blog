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
  margin: 10px 0;
`;
const EmailInput = styled.input`
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid;
  padding: 10px;
  font-size: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  background-color: lightcoral;
  margin: 10px 60px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 60px;
  right: 20px;
  &:hover {
    background-color: #f07373;
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
  &:hover {
    background-color: #009200;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Label>Email</Label>
          <EmailInput type="email" placeholder="Email"></EmailInput>

          <Label>Username</Label>
          <UserInput type="text" placeholder="Username"></UserInput>

          <Label>Password</Label>
          <PassInput type="password" placeholder="Password"></PassInput>
          <ButtonR>Register</ButtonR>
        </Form>
        <ButtonL>Login</ButtonL>
      </Wrapper>
    </Container>
  );
};

export default Register;
