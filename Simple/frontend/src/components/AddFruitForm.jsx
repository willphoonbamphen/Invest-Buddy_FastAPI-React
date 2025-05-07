import React, { useState , useEffect } from 'react';
import PropTypes from 'prop-types';


const AddFruitForm = ({ addFruit , deleteFruit }) => {
  const [fruitName, setFruitName] = useState('');
  const ALERT_MESSAGE = 'Please enter a fruit name';


  const handleAdd = (event) => {
    event.preventDefault();
    if (fruitName) {
      addFruit(fruitName);
      setFruitName('');
    }
    else {
      alert(ALERT_MESSAGE);
    }
  }

  const handleDelete = (event) => {
    event.preventDefault();
    if (fruitName) {
      deleteFruit(fruitName);
      setFruitName('');
    }
    else {
      alert(ALERT_MESSAGE);
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