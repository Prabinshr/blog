import styled from "styled-components"

const Container = styled.div``
const Wrapper = styled.div``
const SpanDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const SpanT = styled.span`
    font-size: 30px;
    font-weight: 300;
    color: black;
    font-family: 'Urbanist', sans-serif;
    position: absolute;
    top: 10%;
`
const SpanB = styled.span`
 font-size: 70px;
    font-weight: 300;
    color: black;
    font-family: 'Varela Round', sans-serif;
    position: absolute;
    top: 14%;
`
const Image = styled.img`
width: 100%;
    height: 500px;
    object-fit: cover;
    margin-top: 50px;
`

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <SpanDiv>
                <SpanT>Tour & Travels</SpanT>
                <SpanB>Blog</SpanB>
            </SpanDiv>
            <Image src="https://i.ibb.co/3SL7yvL/photo-161.jpg"></Image>
        </Wrapper>
    </Container>
  )
}

export default Header