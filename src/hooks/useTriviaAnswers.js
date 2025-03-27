import { useCallback, useState } from "react";

const UseTriviaAnswers = (incorrectNamesList) => {
  const [incorrectName, setIncorrectName] = useState("");
  const [buttonOrder, setButtonOrder] = useState([]);

  const setupAnswers = useCallback(
    (correctAnswer) => {
      const incorrectNames = incorrectNamesList.filter((name) => name !== correctAnswer);

      const randomIncorrectIndex = Math.floor(Math.random() * incorrectNames.length);
      setIncorrectName(incorrectNames[randomIncorrectIndex]);

      const order =
        Math.random() > 0.5 ? ["correct", "incorrect"] : ["incorrect", "correct"];
      setButtonOrder(order);
    },
    [incorrectNamesList]
  );

  return { incorrectName, buttonOrder, setupAnswers };
};

export default UseTriviaAnswers;
