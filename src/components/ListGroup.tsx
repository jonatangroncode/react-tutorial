const ListGroup = () => {
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
      <h1>List</h1>
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
