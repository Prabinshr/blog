import styled from "styled-components";

const Container = styled.div`
width: 450px;
`;

const Wrapper = styled.div`
  margin-right: 20px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
`;
const PostCat = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: lightcoral;
  cursor: pointer;
`;
const Span = styled.span`
  font-size: 15px;
  font-weight: 200;
 
`;
const PostTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;

  &:hover{
    color: lightcoral;
  }
`;
const PostDate = styled.span`
    display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Lora', serif;
  color: lightcoral;
`;
const PostDesc = styled.span`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
`;

const Post = () => {
  return (
    <Container>
      <Wrapper>
        <PostImage src="https://i.ibb.co/3mGKzdJ/offset.jpg"></PostImage>
        <PostInfo>
          <PostCat>
            <Span>Life</Span>
            <Span>Music</Span>
          </PostCat>
          <PostTitle> Lorem ipsum dolor sit amet</PostTitle>
          <PostDate>1 hour ago</PostDate>
          <PostDesc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            laudantium nam adipisci quia, provident delectus eveniet maiores
            similique nobis iure recusandae corrupti temporibus esse quam vitae
            aliquid cum. Voluptatibus, tempora!
          </PostDesc>
        </PostInfo>
      </Wrapper>
    </Container>
  );
};

export default Post;
