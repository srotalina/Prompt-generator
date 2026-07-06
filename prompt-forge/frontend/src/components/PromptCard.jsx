import React from 'react'
import '../styles/PromptCard.css'

function PromptCard({ prompt }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content)
  }

  return (
    <div className="prompt-card">
      <h3>{prompt.title}</h3>
      <p className="description">{prompt.description}</p>
      <p className="content">{prompt.content}</p>
      <div className="card-footer">
        <span className="category">{prompt.category}</span>
        <button onClick={handleCopy} className="copy-btn">Copy</button>
      </div>
    </div>
  )
}

export default PromptCard