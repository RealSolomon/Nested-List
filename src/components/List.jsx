import React from "react";

import CustomElement from "./CustomElement";
import DefaultElement from "./DefaultElement";
import { setID } from "../utils/SetId";

import "../styles.css";

const List = () => {
  const [items, setItems] = React.useState([]);

  const addNewItem = (title) => {
    const newItem = {
      title,
      id: setID(),
      sublist: false
    };
    setItems((prev) => [newItem, ...prev]);
  };

  const alterList = (elemId, type) => {
    const index = items.findIndex((i) => i.id === elemId);
    const list = JSON.parse(JSON.stringify(items));

    let temp;
    switch (type) {
      case "remove":
        list.splice(index, 1);
        break;
      case "up":
        temp = list[index];
        list[index] = list[index - 1];
        list[index - 1] = temp;
        break;
      case "down":
        temp = list[index];
        list[index] = list[index + 1];
        list[index + 1] = temp;
        break;
      default:
        return null;
    }
    setItems(list);
  };

  const renderItems = (items) => {
    return items.map((el, idx) => {
      return (
        <CustomElement
          title={el.title}
          key={el.id}
          index={idx}
          alterList={alterList}
          elementsLength={items.length}
          id={el.id}
        />
      );
    });
  };

  return (
    <ul>
      {renderItems(items)}
      <DefaultElement addItem={addNewItem} />
    </ul>
  );
};

export default List;
