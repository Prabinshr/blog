import styled from "styled-components"
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
    padding-top: 50px;
`

const Wrapper = styled.div``

const Image = styled.img`
    width: 60%;
    height: 350px;
    object-fit: cover;
    margin-left: 150px;
    border-radius: 5px;

`
const WriteForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`

const Top = styled.div`
    display: flex;
    align-items: center;
`

const WriteLabel = styled.label``

const Icon = styled.div`
    border: 1px solid;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const WriteInput = styled.input`
    display: none;
`
const Title = styled.input`
    width: 100vh;
    font-size: 25px;
    border: none;
    padding: 20px;
    letter-spacing: 2px;
    outline: none;
`
const TextArea = styled.textarea`
width: 100vh;
    font-size: 25px;
    padding: 10px;
    letter-spacing: 2px;
    outline: none;
`
const Button = styled.button`
    padding: 10px;
  border: none;
  background-color: #014501;
  margin: 10px 60px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #075d07;
  }
`

const Write = () => {
  return (
    <Container>
        <Wrapper>
            <Image src="https://i.ibb.co/0ypk5rm/photo-15.jpg"></Image>
            <WriteForm>
                <Top>
                <WriteLabel htmlFor="fileInput" >
                    <Icon>
                        <AddIcon/>
                    </Icon>
                </WriteLabel>
                <WriteInput type="file" id="fileInput"></WriteInput>
                <Title type="text" placeholder="Title"></Title>
                </Top>
                <TextArea placeholder="Description"></TextArea>
                <Button>Publish</Button>
            </WriteForm>
        </Wrapper>
    </Container>

  )
}

export default Write