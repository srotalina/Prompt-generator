import React, { useState } from 'react'
import { generatePrompt } from '../api/client'
import '../styles/PromptGenerator.css'

function PromptGenerator() {
  const [input, setInput] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError('Please enter a description')
      return
    }

    setLoading(true)
    setError('')
    try {
      const result = await generatePrompt(input)
      setGeneratedPrompt(result.prompt)
    } catch (err) {
      setError(err.message || 'Failed to generate prompt')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt)
  }

  return (
    <div className="generator-container">
      <h2>Prompt Generator</h2>
      <div className="input-section">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe what you want your prompt to do..."
          rows="4"
        />
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      {generatedPrompt && (
        <div className="output-section">
          <h3>Generated Prompt</h3>
          <div className="prompt-output">
            <p>{generatedPrompt}</p>
            <button onClick={handleCopy} className="copy-btn">Copy</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PromptGenerator