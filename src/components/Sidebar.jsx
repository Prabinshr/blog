import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Container = styled.div`
  background-color: #fcfcf4;
  flex: 3;
  margin: 20px 20px 0 0;
  border-radius: 10px;
`;
const Wrapper = styled.div`
  padding: 10px;
`;
const Top = styled.div`

`;
const TopTitle = styled.h2`
  font-size: 25px;
  font-weight: 400;
  text-transform: uppercase;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-top: 10px;
  border-radius: 5px;
`;
const TopDesc = styled.span`
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  line-height: 15px;
  font-size: 15px;
  font-weight: 100;
  margin: 10px 0;
`
const Center = styled.div``;
const CatTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-family: "Josefin Sans", sans-serif;
`;
const CatDiv = styled.div``;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin-top: 10px;
`;
const Li = styled.li`
  margin-right: 20px;
`;
const Button = styled.div`
  margin-top: 10px;
`;
const ButtonTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-family: "Josefin Sans", sans-serif;
`;
const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 10px;
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
const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <TopTitle>About us</TopTitle>
          <Image src="https://i.ibb.co/0ypk5rm/photo-15.jpg"></Image>
          <TopDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aut
            ducimus, porro, natus omnis illum itaque error praesentium odio
            recusandae obcaecati similique perferendis enim molestiae
            accusantium optio reiciendis iure voluptate?
          </TopDesc>
        </Top>
        <Center>
          <CatTitle>Categories</CatTitle>
          <CatDiv>
            <Ul>
              <Li>Life</Li>
              <Li>Music</Li>
            </Ul>
          </CatDiv>
        </Center>
        <Button>
          <ButtonTitle>Follow us</ButtonTitle>
          <IconDiv>
            <Icon>
              <FacebookIcon />
            </Icon>
            <Icon>
              <InstagramIcon />
            </Icon>
            <Icon>
              <TwitterIcon />
            </Icon>
          </IconDiv>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
