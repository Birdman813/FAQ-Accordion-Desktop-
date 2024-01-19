import { Fragment, useState } from "react";
import "./App.css";
import AccordionElement from "./assets/Components/AccordionElement";
import womanImg from "./assets/images/illustration-woman-online-desktop.svg";
import boxImg from "./assets/images/illustration-box-desktop.svg";

function App() {
  const accordionArr = [
    {
      title: "How many team members can I invite?",
      subText: "You can invite unlimited team members",
      id: 1,
    },
    {
      title: "What is the maximum file upload size?",
      subText:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      id: 2,
    },
    {
      title: "How do I reset my password?",
      subText: "You can click on reset password button",
      id: 3,
    },
    {
      title: "Can I cancel my subscription?",
      subText: "Yes you can cancel your subscription",
      id: 4,
    },
    {
      title: "Do you provide additional support?",
      subText: "Yes, we provide additional support",
      id: 5,
    },
  ];

  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

  const handleClick = (accordionNumber) => {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber);
    }
  };

  return (
    <div className="body-container">
      <div className="accordion-card">
        <div className="img-container">
          <img src={womanImg} alt="Woman" />
          <img src={boxImg} alt="box" className="box-img" />
        </div>
        <div>
          <h1>FAQ</h1>
          <div className="accordion-section">
            {accordionArr.map((item) => {
              return (
                <Fragment key={item.id}>
                  <AccordionElement
                    title={item.title}
                    subText={item.subText}
                    id={item.id}
                    handleClick={handleClick}
                    activeAccordionNumber={activeAccordionNumber}
                  />
                  <hr />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
