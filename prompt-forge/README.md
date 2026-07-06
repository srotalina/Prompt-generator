# Prompt Forge

A web application for generating and managing AI prompts.

## Features

- **Prompt Generator**: Generate custom prompts based on user descriptions
- **Prompt Library**: Browse and manage saved prompts
- **Copy to Clipboard**: Easily copy prompts for use
- **Categorization**: Organize prompts by category

## Project Structure

```
prompt-forge/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── api/           # API client
│   │   └── styles/        # CSS styles
│   ├── vite.config.js     # Vite configuration
│   └── index.html         # HTML entry point
└── backend/           # Express backend server
    ├── routes/        # API routes
    ├── db.js          # Database utilities
    ├── server.js      # Express server
    ├── package.json   # Dependencies
    └── .env.example   # Environment variables example
```

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
```bash
cd prompt-forge/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd prompt-forge/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

- `POST /api/generate` - Generate a new prompt
- `GET /api/prompts` - Get all saved prompts
- `POST /api/prompts` - Save a new prompt

## Configuration

### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=3001
NODE_ENV=development
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-3.5-turbo
```

## Development

### Frontend Technologies
- React
- Vite
- React Router
- CSS3

### Backend Technologies
- Express.js
- Node.js
- File-based storage (JSON)

## Future Enhancements

- [ ] Integrate with OpenAI API for advanced prompt generation
- [ ] Add database (MongoDB/PostgreSQL) for persistent storage
- [ ] User authentication and authorization
- [ ] Prompt templates and variations
- [ ] Sharing and collaboration features
- [ ] Advanced filtering and search

## License

MIT
