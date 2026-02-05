import { useState, type ReactNode } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  children: ReactNode; //Alerts, Buttons, etc. that we want to render inside the ListGroup component
}

export default function ListGroup(props: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState(-1);

  const getMessage = (i: number) => {
    return i === -1 ? "No item selected" : `Element selected : ${i}`;
  };

  return (
    <>
      <br />
      <h1>
        <strong>{props.heading}</strong>
      </h1>

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
      <p style={{ textIndent: "40px", marginTop : "10px"}}><strong> {getMessage(selectedItem)} </strong></p>
      <>{props.children}</>
      <br />      
    </>
  );
}
