const ListGroup = () => {
  let items = [
    "new york",
    "los angeles",
    "chicago",
    "houston",
    "philadelphia",
    "phoenix",
  ];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item fond</p>}

      <ul className="list-group">
        {" "}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
