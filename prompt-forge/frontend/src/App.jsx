import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PromptGenerator from './components/PromptGenerator'
import PromptLibrary from './components/PromptLibrary'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Prompt Forge</h1>
          <nav>
            <a href="/">Generator</a>
            <a href="/library">Library</a>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<PromptGenerator />} />
            <Route path="/library" element={<PromptLibrary />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App