import styled from "styled-components";
import Typing from "../image/Typing.png";

const Container = styled.div`
  width: 700px;
  height: 400px;

  margin: 0 auto; /* 수평 중앙 정렬 */
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 중앙 정렬 */

  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

// 메인이미지와 타자연습 글씨
function ManeImage() {
  return (
    <Container>
      <Img src={Typing}></Img>
      <h1>타자연습</h1>
    </Container>
  );
}

export default ManeImage;
