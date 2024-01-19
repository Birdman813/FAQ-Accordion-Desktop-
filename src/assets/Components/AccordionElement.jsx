import { useState } from "react";
import downArrow from "../../assets/images/icon-arrow-down.svg";
import upArrow from "../../assets/images/upArrow.png";
import "./AccordionElement.css";

const AccordionElement = (props) => {
  const [chosenSection, setChosenSection] = useState();

  return (
    <div className="main-container" onClick={() => props.handleClick(props.id)}>
      <div className="title-container">
        <p className="title">{props.title}</p>
        {props.activeAccordionNumber === props.id ? (
          <img src={upArrow} alt="upArrow" />
        ) : (
          <img src={downArrow} alt="downArrow" />
        )}
      </div>
      {props.activeAccordionNumber === props.id ? (
        <p className="subText">{props.subText}</p>
      ) : null}
    </div>
  );
};

export default AccordionElement;
