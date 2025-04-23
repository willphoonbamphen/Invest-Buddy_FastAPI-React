import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DeleteFruitForm = ({ deleteFruit }) => {
  const [fruitName, setFruitName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fruitName) {
      deleteFruit(fruitName);
      setFruitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
        placeholder="Enter fruit name"
      />
      <button type="submit">Delete Fruit</button>
    </form>
  );
};
DeleteFruitForm.propTypes = {
  deleteFruit: PropTypes.func.isRequired,
  
};


export default DeleteFruitForm;