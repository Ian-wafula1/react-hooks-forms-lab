import React from "react";
import { v4 } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit, setNameFunc, setCategoryFunc}) {
  const [name, setName] = useState('')
  const [category, setCategory] =useState('Produce')

  function setNameFunc(e) {
    setName(e.target.value)
  }

  function setCategoryFunc(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    console.log(name, category)

    const newItem = {
      id: v4(), 
      name: name, 
      category: category
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={setNameFunc} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={setCategoryFunc}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
