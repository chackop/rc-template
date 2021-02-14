import React from "react";
import { QuestionType } from "../constants";

interface QuestionProps {
  data: QuestionType;
  onClick: () => void;
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Question: React.FC<QuestionProps> = ({ data, onClick, onChange }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <h3>{data.question}</h3>
      <textarea value={data.answer} onChange={(evt) => onChange(evt)} />
      <br />
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default Question;
