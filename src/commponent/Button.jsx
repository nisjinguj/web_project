import styled from "styled-components";

const ButtonContanier = styled.div`
  width: 200px;
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin: auto;
  margin-top: 16px;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;

  border: solid 1px;
  border-radius: 8px;
  color: #666398;

  text-align: center;
  font-size: 24px;
`;

// 사용자가 타자연습을 시작하기
function StartButton({ onClick }) {
  return (
    <ButtonContanier>
      <Button onClick={onClick}>타자연습 시작</Button>
    </ButtonContanier>
  );
}

export default StartButton;
