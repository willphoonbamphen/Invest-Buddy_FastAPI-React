import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FruitList from './Fruits';

const AddFruitForm = ({ addFruit , deleteFruit }) => {
  const [fruitName, setFruitName] = useState('');
  const [fruitNameRef, setFruitNameRef] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < FruitList.length; i++) {
      if (fruitName === FruitList[i]) {
        alert('Please enter a different fruit name');
        setFruitNameRef('');
        return;
      }
    }
    if (fruitName) {
      addFruit(fruitName);
      setFruitName('');
    }
    else {
      alert('Please enter a fruit name');
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    
    if (fruitName===fruitNameRef) {
      deleteFruit(fruitName);
      setFruitName('');
      setFruitNameRef('');
    }
    else {
      alert('Please enter a fruit name');
    }
  };



  return (
    <form >
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
        placeholder="Enter fruit name"
      />
      <button onClick={handleSubmit}>Add Fruit</button>
      <button onClick={handleDelete}>Delete Fruit</button>
    </form>
  );
};
AddFruitForm.propTypes = {
  addFruit: PropTypes.func.isRequired,
  deleteFruit: PropTypes.func.isRequired,

};


export default AddFruitForm;