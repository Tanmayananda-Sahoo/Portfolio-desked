import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import ProjectPage from './components/pages/ProjectPage.jsx';
import Navbar from './components/parts/Taskbar.jsx';

const App = () => {
  return (
    <>
      <HomePage />
    </>
  )
}

export default App