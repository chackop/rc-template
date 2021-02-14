import React, { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Summary from "./components/Summary";
import { initJourneyData } from "./constants";

function App() {
  const [journeyData, setjourneyData] = useState(initJourneyData);
  const [activeSection, setActiveSection] = useState(0);

  const handleNext = () => {
    setActiveSection((activeSection) => activeSection + 1);
  };

  const handleAnswer = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    // evt.preventDefault();
    const newJourney = [...journeyData];
    newJourney[activeSection] = {
      ...newJourney[activeSection],
      answer: evt.target.value,
    };

    setjourneyData(newJourney);
  };

  return (
    <div className="App">
      {journeyData &&
        (activeSection < journeyData.length ? (
          <Question
            data={journeyData[activeSection]}
            onClick={handleNext}
            onChange={handleAnswer}
          />
        ) : (
          <Summary data={journeyData} />
        ))}
    </div>
  );
}

export default App;
