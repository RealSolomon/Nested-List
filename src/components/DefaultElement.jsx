import React from "react";
import { setID } from "../utils/SetId";

const DefaultElement = ({ addItem }) => {
  const [title, setTitle] = React.useState("");
  const [id] = React.useState(setID());

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

export default DefaultElement;
