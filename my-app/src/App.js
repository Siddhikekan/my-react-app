// src/App.js
import React from 'react';
import ItemList from './components/App/ItemList';
import SearchBar from './components/App/SearchBar';

const App = () => {
  return (
    <div>
      <h1>Item List with Search</h1>
      <SearchBar />
      <ItemList />
    </div>
  );
};

export default App;


