import React from "react";
import CustomItem from "./CustomItem";
import DefaultItem from "./DefaultItem";
import "./styles.css";

const List = () => {
  const [items, setItems] = React.useState([]);

  const id = Math.random().toString(36).substr(2, 9);

  const addNewItem = (title) => {
    const newItem = {
      title,
      id: id
    };
    setItems((prev) => [newItem, ...prev]);
  };

  const renderItems = (items) => {
    return items.map((it, idx) => {
      return <CustomItem title={it.title} index={idx} />;
    });
  };

  return (
    <ul>
      {renderItems(items)}
      <DefaultItem addItem={addNewItem} />
    </ul>
  );
};

export default List;
