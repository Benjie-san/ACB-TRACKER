import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {

  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

export default App
