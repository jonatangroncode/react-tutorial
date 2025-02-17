import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </>
  );
}

export default App;
