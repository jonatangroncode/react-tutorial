import ListGroup from "./components/ListGroup";
function App() {
  const items = [
    "new york",
    "los angeles",
    "chicago",
    "houston",
    "philadelphia",
    "phoenix",
  ];

  return (
    <>
      <ListGroup items={items} heading="cities " />{" "}
    </>
  );
}

export default App;
