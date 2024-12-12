import { useState } from "react";
import "./App.css";
import ManeImage from "./commponent/Image";
import Input from "./commponent/Input";
import ExercisesText from "./commponent/Exercises";
import StartButton from "./commponent/Button";
import TypingText from "./commponent/Typing";

function App() {
  const [userInput, setUserInput] = useState("");
  const [randomOutput, setRandomOutput] = useState("");
  // ""로 기본을 잡으면 안됨 userInput과 userInputTyping이 같은지 비교하기 때문에 설정하면 안됨
  const [userInputTyping, setUserInputTyping] = useState("");

  // userInput중 하나를 랜덤하게 뽑음
  function Random() {
    let arr = [];
    for (let i = 0; i < userInput.length; i++) {
      // 문자열을 하나씩 배열에 입력
      arr.push(userInput.slice(i, i + 1));
    }
    //배열중 하나를 무작위로 뽑음
    setRandomOutput(arr[Math.floor(Math.random() * arr.length)]);
    console.log(randomOutput);
  }

  return (
    <>
      <ManeImage></ManeImage>
      <Input
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        placeholder="연습할자리를 입력해 주세요"
      ></Input>
      <StartButton
        onClick={() => {
          Random();
        }}
      ></StartButton>
      <ExercisesText value={randomOutput}></ExercisesText>
      <TypingText
        placeholder="여기에 타자를 입력해주세요"
        value={userInputTyping}
        onChange={(e) => {
          const inputValue = e.target.value;
          setUserInputTyping(inputValue);
          if (inputValue == randomOutput) {
            Random();
            setUserInputTyping("");
          }
        }}
      ></TypingText>
    </>
  );
}

export default App;
