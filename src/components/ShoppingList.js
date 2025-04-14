import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  // const [name, setName] = useState('')
  // const [category, setCategory] =useState('Produce')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter(item => {
    return item.name.includes(search)
  })
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  
  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  // console.log(items)
  // function setNameFunc(e) {
  //   setName(e.target.value)
  // }

  // function setCategoryFunc(e) {
  //   setCategory(e.target.value)
  // }

  function onItemFormSubmit(newItem) {
    setItems(items => [...items, newItem])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
