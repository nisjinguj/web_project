import styled from "styled-components";

const TypingContainer = styled.div`
  width: 600px;
  height: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin: 0 auto;
  margin-top: 16px;
`;

const TypingInput = styled.input`
  width: 100%;
  height: 100%;

  font-size: 42px;
  text-align: center;

  border: solid 1px;
  border-radius: 16px;
`;

// 사용자가 타자를 입력하는 부분
function TypingText({ placeholder, value, onChange }) {
  return (
    <TypingContainer>
      <TypingInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></TypingInput>
    </TypingContainer>
  );
}

export default TypingText;
