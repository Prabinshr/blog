import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Container = styled.div`
  flex: 9;
`;
const Wrapper = styled.div`
  margin: 10px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 5px;
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
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
      color: red;
    }
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
const Author = styled.div``;
const AutTitle = styled.span`
  font-size: 23px;
  font-weight: bold;
`;
const AutName = styled.span`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    color: lightcoral;
  }
`;
const Date = styled.span`
  font-size: 15px;
  font-weight: 400;
  font-family: "Lora", serif;
  color: lightcoral;
`;

const Buttom = styled.div`
   text-align: justify;
   margin-top: 15px;
`;
const Desc = styled.span`
 
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 0.8px;
  line-height: 15px;
`;

const SinglePost = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Image src="https://i.ibb.co/0ypk5rm/photo-15.jpg"></Image>
          <Title>Lorem ipsum dolor sit amet</Title>
          <IconDiv>
            <Icon>
              <EditIcon />
            </Icon>
            <Icon>
              <DeleteIcon />
            </Icon>
          </IconDiv>
        </Top>

        <Center>
          <Author>
            <AutTitle>Author: </AutTitle>
            <AutName>Prabin</AutName>
          </Author>
          <Date>1 hour ago</Date>
        </Center>
        <Buttom>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non
            velit, obcaecati veritatis voluptas voluptates impedit officia
            incidunt laborum nam necessitatibus magni magnam excepturi, dolore
            fuga consequuntur quia quidem! Deserunt. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Amet, quasi repellat porro ipsa
            molestiae nihil distinctio ab eaque doloribus maxime harum
            doloremque, vitae nesciunt suscipit cumque perferendis eligendi
            animi at? lorem Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aperiam facilis, earum quasi, saepe maxime architecto
            laboriosam explicabo deserunt minus totam rem soluta ratione amet
            eius recusandae sint natus. Culpa, provident.
          </Desc>
        </Buttom>
      </Wrapper>
    </Container>
  );
};

export default SinglePost;
