import React, { useState, useEffect } from 'react'
import { fetchPrompts } from '../api/client'
import PromptCard from './PromptCard'
import '../styles/PromptLibrary.css'

function PromptLibrary() {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadPrompts()
  }, [])

  const loadPrompts = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await fetchPrompts()
      setPrompts(data)
    } catch (err) {
      setError(err.message || 'Failed to load prompts')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="library-container">
      <h2>Prompt Library</h2>
      <div className="prompts-grid">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  )
}

export default PromptLibrary