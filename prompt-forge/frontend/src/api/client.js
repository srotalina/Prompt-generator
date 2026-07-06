const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

export async function generatePrompt(description) {
  const response = await fetch(`${API_BASE_URL}/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ description }),
  })

  if (!response.ok) {
    throw new Error(`Failed to generate prompt: ${response.statusText}`)
  }

  return response.json()
}

export async function fetchPrompts() {
  const response = await fetch(`${API_BASE_URL}/prompts`)

  if (!response.ok) {
    throw new Error(`Failed to fetch prompts: ${response.statusText}`)
  }

  return response.json()
}

export async function savePrompt(prompt) {
  const response = await fetch(`${API_BASE_URL}/prompts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(prompt),
  })

  if (!response.ok) {
    throw new Error(`Failed to save prompt: ${response.statusText}`)
  }

  return response.json()
}
