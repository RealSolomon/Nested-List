import React from "react";
import Button from "./Button";
import List from "./List";

const CustomElement = (props) => {
  const [sublist, setSubList] = React.useState(false);

  const up = props.index !== 0 ? true : false;
  const down = props.index !== props.elementsLength - 1 ? true : false;

  return (
    <li>
      {props.title}
      {up && <Button alterList={props.alterList} id={props.id} action={"Up"} />}
      {down && (
        <Button alterList={props.alterList} id={props.id} action={"Down"} />
      )}
      {<Button alterList={props.alterList} id={props.id} action={"Remove"} />}
      {
        <button
          onClick={() => {
            setSubList(!sublist);
          }}
        >
          {`${sublist ? "Remove" : "Add"} Sublist`}
        </button>
      }
      {sublist && <List />}
    </li>
  );
};

export default CustomElement;
