import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fruits from './Fruits';

const AddFruitForm = ({ addFruit , deleteFruit }) => {
  const [fruitName, setFruitName] = useState('');
  const ALERT_MESSAGE = 'Please enter a fruit name';


  const handleAdd = async (event) => {
    event.preventDefault();
    if (fruitName) {
      addFruit(fruitName);
      setFruitName('');
    }
    else {
      alert(ALERT_MESSAGE);
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    if (fruitName) {
      deleteFruit(fruitName);
      setFruitName('');
    }
    else {
      alert("DELETE ERROR");
    }
  }

  return (
    <form >
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
        placeholder="Enter fruit name"
      />
      <button onClick={handleAdd}>Add Fruit</button>
      <button onClick={handleDelete}>Delete Fruit</button>
    </form>
  );
}

AddFruitForm.propTypes = {
  addFruit: PropTypes.func.isRequired,
  deleteFruit: PropTypes.func.isRequired,

};


export default AddFruitForm;