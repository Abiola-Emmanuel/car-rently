'use client';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";

const Accordion = ({
  id,
  questionName1,
  questionAnswer1,
  questionName2,
  questionAnswer2,
  questionName3,
  questionAnswer3,
  questionName4,
  questionAnswer4,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    { question: questionName1, answer: questionAnswer1 },
    { question: questionName2, answer: questionAnswer2 },
    { question: questionName3, answer: questionAnswer3 },
    { question: questionName4, answer: questionAnswer4 },
  ].filter((item) => item.question && item.answer);

  return (
    <div id={id} className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}

            <FaAngleDown className='angle' />
          </button>
          <div
            className="accordion-content"
            style={{
              maxHeight: activeIndex === index ? '400px' : '0',
              opacity: activeIndex === index ? '1' : '0',
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
