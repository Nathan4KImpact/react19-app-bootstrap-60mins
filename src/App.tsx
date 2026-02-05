import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

export default function App() {
  const citiesItems = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const coloursItems = ["Red", "Yellow", "Green", "Blue", "Purple"];
  const handleSelectItem = (item: string) =>
    console.log(`Selected Item: ${item}`);
  const [alertVisible, setAlertisibility] = useState(false);

  const handleClickOK = () => setAlertisibility(true);

  return (
    <>
      <>
        <ListGroup
          items={citiesItems}
          heading="World Top 7 Cities"
          onSelectItem={handleSelectItem}
        >
          {alertVisible && (
            <Alert
              message={`Cities count : ${citiesItems.length}`}
              alertLevel="success"
              onClickClose={() => setAlertisibility(false)}
            />
          )}
          <Button onClickOK={handleClickOK} />
        </ListGroup>
      </>
      <>
        <ListGroup
          items={coloursItems}
          heading="My Top 7 beautiful colours"
          onSelectItem={handleSelectItem}
        >
          <Alert
            message={`Colours count : ${citiesItems.length}`}
            alertLevel="info"
            onClickClose={() => setAlertisibility(false)}
          />
          <Button onClickOK={handleClickOK} />
        </ListGroup>
      </>
    </>
  );
}
