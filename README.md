# University Regulations Assistant

An AI-powered assistant with a modern and user-friendly interface for inquiring about university regulations.

## Features

- Multiple AI Agent support (Database, Web, and Multi-Agent)
- Real-time chat interface
- University-specific example questions
- Modern and responsive design
- Frontend developed with Next.js and TypeScript

## Technologies

Frontend:
- Next.js 14
- TypeScript
- Tailwind CSS
- Axios
- React Icons

Backend:
- Python 3.12+
- FastAPI
- Poetry
- Hugging Face models
- Langchain

## Requirements

Frontend:
- Node.js 18.0.0 or higher
- npm or yarn

Backend:
- Python 3.12+
- Poetry package manager

## Frontend Setup

1. Clone the project:
```bash
git clone https://github.com/yusufbaykal/Regulations-Agent-System-Frontend
cd Regulations-Agent-System-Frontend/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev

```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Frontend Environment Variables

Create a `.env.local` file and add the following variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Backend Setup

The backend API is maintained in a separate repository and provides the core functionality for the AI-powered regulation query system. [Regulations Agent System Backend](https://github.com/yusufbaykal/Regulations-Agent-System-Backend) repository.

1. Clone the repository:
```bash
git clone https://github.com/yusufbaykal/Regulations-Agent-System-Backend.git
cd agent/backend
```

2. Install dependencies:
```bash
pip install poetry
poetry install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Hugging Face API token

4. Start the backend server:
```bash
uvicorn main:app --reload
```

The backend will be available at `http://localhost:8000`.

