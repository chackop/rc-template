import React from "react";
import { QuestionType } from "../constants";

interface SummaryProps {
  data: QuestionType[];
}

const Summary: React.FC<SummaryProps> = ({ data }) => {
  return (
    <div>
      <h2>Summary Section</h2>
      {data.length > 0 &&
        data.map((item, index) => (
          <div key={item.title + item.question + index}>
            <h5>
              {item.title}-{item.question}
            </h5>
            <h6>{item.answer}</h6>
          </div>
        ))}
    </div>
  );
};

export default Summary;
