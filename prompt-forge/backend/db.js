const fs = require('fs')
const path = require('path')

const DATA_DIR = path.join(__dirname, 'data')
const PROMPTS_FILE = path.join(DATA_DIR, 'prompts.json')

function initialize() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }

  if (!fs.existsSync(PROMPTS_FILE)) {
    fs.writeFileSync(PROMPTS_FILE, JSON.stringify([]))
  }
}

function readPrompts() {
  const data = fs.readFileSync(PROMPTS_FILE, 'utf8')
  return JSON.parse(data)
}

function writePrompts(prompts) {
  fs.writeFileSync(PROMPTS_FILE, JSON.stringify(prompts, null, 2))
}

function getPrompts() {
  return readPrompts()
}

function savePrompt(prompt) {
  const prompts = readPrompts()
  const newPrompt = {
    id: Date.now().toString(),
    ...prompt,
    createdAt: new Date().toISOString(),
  }
  prompts.push(newPrompt)
  writePrompts(prompts)
  return newPrompt
}

module.exports = {
  initialize,
  getPrompts,
  savePrompt,
}
