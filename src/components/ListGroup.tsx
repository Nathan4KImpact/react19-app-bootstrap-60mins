import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  //children: ReactNode; //Alerts, Buttons, etc. that we want to render inside the ListGroup component

  // Configuration de l'alerte interne
  alertMessage?: string; 
  alertLevel?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  defaultAlertVisible?: boolean; // État initial (optionnel)
}

export default function ListGroup(props: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [isAlertVisible, setIsAlertVisible] = useState(props.defaultAlertVisible || false);
 
  const getMessage = (i: number) => {
    return i === -1 ? "No item selected" : `Element selected : ${i}`;
  };

  return (
    <>
      <br />
      <h1>
        <strong>{props.heading}</strong>
      </h1>

      {/* Affichage conditionnel de l'alerte géré en interne */}
      {isAlertVisible && props.alertMessage && (
        <Alert
          message={props.alertMessage}
          alertLevel={props.alertLevel || "info"}
          onClickClose={() => setIsAlertVisible(false)}
        />
      )}
      {!isAlertVisible && (
        <Button onClickOK={() => setIsAlertVisible(true)} />
      )}

      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItem(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
 
      <p style={{ textIndent: "40px", marginTop : "10px"}}>
        <strong>{getMessage(selectedItem)} </strong>
      </p>
      <br />      
    </>
  );
}
