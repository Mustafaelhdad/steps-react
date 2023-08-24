import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import StepMessage from "./components/StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((step) => step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((step) => step + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            {/* textColor, bgColor, onClick, text */}
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>&larr;</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>&rarr;</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
