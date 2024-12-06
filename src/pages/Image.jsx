import styled from "styled-components";
import Typing from "../image/Typing.png";

const Container = styled.div`
  width: 700px;
  height: 400px;

  margin-top: 0;
  margin-bottom: 100px;

  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function ManeImage() {
  return (
    <Container>
      <Img src={Typing}></Img>
      <h1>타자연습</h1>
    </Container>
  );
}

export default ManeImage;
