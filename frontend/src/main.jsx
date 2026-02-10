import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage.jsx';
import ProjectPage from './components/pages/ProjectPage.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import Navbar from './components/parts/Taskbar.jsx';
createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/Projects' element={<ProjectPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </>
)
