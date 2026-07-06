import { useState, useCallback } from 'react'
import { generatePrompt, fetchPrompts } from '../api/client'

export function usePrompts() {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const generate = useCallback(async (description) => {
    setLoading(true)
    setError(null)
    try {
      const result = await generatePrompt(description)
      return result.prompt
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const loadPrompts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchPrompts()
      setPrompts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { prompts, loading, error, generate, loadPrompts }
}
