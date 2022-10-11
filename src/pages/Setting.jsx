import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  flex: 9;
  margin: 10px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SpanU = styled.div`
  font-size: 30px;
`;
const SpanD = styled.div`
  color: red;
  margin: 20px;
  cursor: pointer;
`;
const Center = styled.div``;
const SpanC = styled.span``;
const Profile = styled.div`
display: flex;
align-items: center;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
`;
const ProfileLabel = styled.label``
const ProfileInput = styled.input`
    display: none;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    background-color: lightcoral;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
`;
const SettingForm = styled.form`
display: flex;
  flex-direction: column;
  margin-top: 10px;
`
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
  border-bottom: 1px solid gray;
  padding: 10px;
  font-size: 20px;
`;
const UserInput = styled.input`
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px;
  font-size: 20px;
`;

const PassInput = styled.input`
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ButtonR = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  margin: 10px 300px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0b8989;
  }
`;

const Setting = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <SpanU>Update Your Account</SpanU>
          <SpanD>Delete Your Account</SpanD>
        </Top>
        <Center>
          <SpanC>Profile Picture</SpanC>
          <Profile>
            <Image src="https://i.ibb.co/3mGKzdJ/offset.jpg"></Image>
            <ProfileLabel htmlFor="fileInput">
            <Icon>
              <PersonOutlineIcon />
            </Icon>
            </ProfileLabel>
            <ProfileInput type="file" id="fileInput"></ProfileInput>
          </Profile>
        </Center>
        <SettingForm>
        <Label>Email</Label>
          <EmailInput type="email" placeholder="Email"></EmailInput>

          <Label>Username</Label>
          <UserInput type="text" placeholder="Username"></UserInput>

          <Label>Password</Label>
          <PassInput type="password" placeholder="Password"></PassInput>
          <ButtonR>Update</ButtonR>
        </SettingForm>
      </Wrapper>
      <Sidebar></Sidebar>
    </Container>
  );
};

export default Setting;
