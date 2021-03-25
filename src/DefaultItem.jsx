import React from "react";

const DefaultItem = ({ addItem }) => {
  const [title, setTitle] = React.useState("");
  const id = Math.random().toString(36).substr(2, 9);

  const isEmptyName = () => {
    title.length > 0 ? addItem(title) : alert("Please enter the title.");

    setTitle("");
  };

  return (
    <li key={id}>
      <input
        value={title}
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          isEmptyName();
        }}
      >
        Add
      </button>
    </li>
  );
};

export default DefaultItem;
