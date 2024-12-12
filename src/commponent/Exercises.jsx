import styled from "styled-components";

const Text = styled.div`
  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin: 0 auto;
  margin-top: 32px;

  border: solid 2px;
  color: #2a3a48;
  border-radius: 16px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 100%;

  font-size: 124px;
  text-align: center;

  border-radius: 16px;
`;

// 연습할 자리를 화면에 출력
function ExercisesText({ value }) {
  return (
    <Text>
      <TextInput value={value} readOnly></TextInput>
    </Text>
  );
}

export default ExercisesText;
