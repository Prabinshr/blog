import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Container = styled.div`
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  height: 60px;
  display: flex;
`;
const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
`;
const Icon = styled.div`
  cursor: pointer;

  &:nth-child(1) {
    &:hover {
      color: #0675e8;
    }
  }
  &:nth-child(2) {
    &:hover {
      color: #f4078d;
    }
  }
  &:nth-child(3) {
    &:hover {
      color: #1da1f2;
    }
  }
`;
const Center = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;
const Li = styled.li`
  font-size: 30px;
  text-transform: upper;
  font-weight: 400;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: lightcoral;
  }
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
const RightR = styled.div`
    margin-right: 10px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Icon>
            <FacebookIcon />
          </Icon>
          <Icon>
            <InstagramIcon />
          </Icon>
          <Icon>
            <TwitterIcon />
          </Icon>
        </Left>
        <Center>
          <Ul>
            <Li>Home</Li>
            <Li>Write</Li>
            <Li>Logout</Li>
          </Ul>
        </Center>
        <Right>
            <Image src="https://i.ibb.co/3mGKzdJ/offset.jpg"></Image>
            <RightR>
                <Ul>
                    <Li>Login</Li>
                    <Li>Register</Li>
                </Ul>
            </RightR>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
