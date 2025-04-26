import React, { useEffect, useState } from 'react';
import AddFruitForm from './AddFruitForm';
import api from '../api';// Assuming you have a fruits.json file in the data folder

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get('/fruits');
      setFruits(response.data.fruits);
    } catch (error) {
      console.error("Error fetching fruits", error);
    }
  };

  const addFruit = async (fruitName) => {
    try {
      await api.post('/fruits', { name: fruitName });
      fetchFruits(); // Refresh the list before adding a fruit
      console.log({fruits},fruitName);
    } catch (error) {
      console.error("Error adding fruit", error);
    }
  };

  const deleteFruit = async (fruitName) => {
    try {
      await api.put('/fruits', { name: fruitName });
      fetchFruits(); // Refresh the list before adding a fruit
      console.log({fruits},fruitName);
    } catch (error) {
      console.error(`Error deleting fruit: ${fruitName}`, error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div>
      <h2>หุ้นแนะนำซื้อคลาส D (ผลตอบแทน 2.5-7% ต่อปี)</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
      <AddFruitForm addFruit={addFruit} deleteFruit={deleteFruit} fetchFruits={fetchFruits}/>
    </div>
  );
};

export default FruitList;