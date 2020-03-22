import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarLayout from './Layouts/NavBar/NavBarLayout';
import HomePage from './Pages/Home/HomePage'

function App() {
  return (
    <NavBarLayout>
      <HomePage/>
    </NavBarLayout>
  );
}

export default App;
