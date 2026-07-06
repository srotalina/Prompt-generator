const express = require('express')
const router = express.Router()
const db = require('../db')

// Generate a new prompt
router.post('/generate', async (req, res) => {
  try {
    const { description } = req.body

    if (!description) {
      return res.status(400).json({ error: 'Description is required' })
    }

    // TODO: Integrate with OpenAI API to generate prompts
    const generatedPrompt = `Generated prompt based on: ${description}`

    res.json({ prompt: generatedPrompt })
  } catch (error) {
    console.error('Error generating prompt:', error)
    res.status(500).json({ error: 'Failed to generate prompt' })
  }
})

// Get all prompts
router.get('/prompts', (req, res) => {
  try {
    const prompts = db.getPrompts()
    res.json(prompts)
  } catch (error) {
    console.error('Error fetching prompts:', error)
    res.status(500).json({ error: 'Failed to fetch prompts' })
  }
})

// Save a prompt
router.post('/prompts', (req, res) => {
  try {
    const { title, description, content, category } = req.body

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' })
    }

    const newPrompt = db.savePrompt({
      title,
      description,
      content,
      category,
    })

    res.status(201).json(newPrompt)
  } catch (error) {
    console.error('Error saving prompt:', error)
    res.status(500).json({ error: 'Failed to save prompt' })
  }
})

module.exports = router
