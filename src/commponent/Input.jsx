import styled from "styled-components";

const InputContainer = styled.div`
  margin-top: 40px;
  width: 500px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin: 0 auto;
`;

const InputUser = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 8px;

  text-align: center;

  font-size: 36px;
`;

// 사용자로 부터 연습할 자리를 입력받음
function Input({ placeholder, value, onChange }) {
  return (
    <InputContainer>
      <InputUser
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></InputUser>
    </InputContainer>
  );
}

export default Input;
